import React, { useEffect, useMemo, useCallback } from 'react';
import { FormHelperText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { transport } from "../../Grid/httpRequest";

const emptyValues = [null, undefined, ''];

const SelectField = React.memo(({ column, field, formik, lookups, dependsOn = [], api, ...otherProps }) => {
    const userSelected = React.useRef(false);
    const { placeHolder } = column;
    const [options, setOptions] = React.useState([]);
    
    // Memoize dependency values to prevent unnecessary re-renders
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn.length) return toReturn;
        for(const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, [dependsOn, ...((dependsOn).map(dependency => formik.values[dependency]))]);
    
    const initialOptions = useMemo(() => {
        if (dependsOn.length) {
            return []; // Start empty for cascading combos
        }
        const options = typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
        return options;
    }, [column.lookup, lookups, dependsOn]);

    // Fetch cascading combo options
    const fetchCascadingOptions = async () => {
        if (!dependsOn.length || !column.lookup) return;
        try {
            // Only fetch if all dependencies have values
            const allDependenciesHaveValues = Object.values(dependencyValues).every(value => !emptyValues.includes(value));
            if (!allDependenciesHaveValues) {
                setOptions([]);
                return;
            }

            const requestBody = {
                lookups: [{ lookup: column.lookup, where: dependencyValues }]
            };
            const response = await transport({ url: `${api}/combo`, data: requestBody, method: 'POST' });
            
            if (response.data && response.data.success && response.data.lookups) {
                const fetchedOptions = response.data.lookups[column.lookup] || [];
                setOptions(fetchedOptions);
                
                // Clear current value if it's not in the new options
                if (formik.values[field] && !fetchedOptions.find(opt => opt.value === formik.values[field])) {
                    formik.setFieldValue(field, '');
                }
            }
        } catch (error) {
            setOptions([]);
        }
    }

    // Single effect to manage options - reduces redundant effects
    useEffect(() => {
        if (dependsOn.length) {
            fetchCascadingOptions();
        } else if(!userSelected.current) {
            setOptions(initialOptions);
        }
    }, [dependencyValues, initialOptions]);

    // Memoize input value processing to avoid recalculation on each render
    const inputValue = useMemo(() => {
        let value = formik.values[field];
        
        // Handle default value selection
        if (options?.length && !value && !column.multiSelect && "IsDefault" in options[0]) {
            const isDefaultOption = options.find(e => e.IsDefault);
            if (isDefaultOption) {
                value = isDefaultOption.value;
                formik.setFieldValue(field, isDefaultOption.value);
            }
        }
        
        // Handle multi-select values
        if (column.multiSelect) {
            if (!value || value.length === 0) {
                value = [];
            } else if (!Array.isArray(value)) {
                value = value.split(',').map((e) => parseInt(e));
            }
        }
        
        return value;
    }, [formik.values[field], options, column.multiSelect, field, formik.setFieldValue]);

    // Memoize event handlers to prevent unnecessary re-renders of child components
    const handleChange = useCallback((event) => {
        formik.handleChange(event);
        userSelected.current = true;
    }, [formik.handleChange]);
    
    // Memoize styles to prevent object recreation
    const selectStyles = useMemo(() => ({
        backgroundColor: column.readOnly ? '#dfdede' : ''
    }), [column.readOnly]);
    return (
        <FormControl
            fullWidth
            key={field}
            error={formik.touched[field] && formik.errors[field]}
            variant="standard">
            <InputLabel>{placeHolder ? placeHolder : ""}</InputLabel> 
            <Select
                IconComponent={KeyboardArrowDownIcon}
                {...otherProps}
                name={field}
                multiple={column.multiSelect === true}
                readOnly={column.readOnly === true}
                value={`${inputValue}`}
                onChange={handleChange}
                onBlur={formik.handleBlur}
                sx={selectStyles}
            >
                {Array.isArray(options) && options.map(option => (
                    <MenuItem key={option.value} value={option.value} disabled={option.isDisabled}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{formik.touched[field] && formik.errors[field]}</FormHelperText>
        </FormControl>
    );
});

export default SelectField;
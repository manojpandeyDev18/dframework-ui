import React, { useEffect, useMemo, useCallback } from 'react';
import { FormHelperText } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { transport } from "../../Grid/httpRequest";

const SelectField = React.memo(({ column, field, formik, lookups, dependsOn, api, ...otherProps }) => {
    const userSelected = React.useRef(false);
    const { filter, placeHolder } = column;
    
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    
    // Memoize dependency values to prevent unnecessary re-renders
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn || !Array.isArray(dependsOn)) return toReturn;
        for(const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, [dependsOn, ...((dependsOn || []).map(field => formik.values[field]))]);
    
    // Check if this field has dependencies
    const hasDependencies = useMemo(() => 
        dependsOn && Array.isArray(dependsOn) && dependsOn.length
    , [dependsOn]);

    // Memoize current field value to avoid dependency on entire formik.values
    const currentFieldValue = useMemo(() => formik.values[field], [formik.values, field]);
    
    const initialOptions = useMemo(() => {
        if (hasDependencies) {
            return []; // Start empty for cascading combos
        }
        const options = typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
        if (filter) {
            return filter({ options, currentValue: currentFieldValue, state: formik.values });
        }
        return options;
    }, [column.lookup, filter, lookups, currentFieldValue, formik.values, hasDependencies]);

    // Fetch cascading combo options
    const fetchCascadingOptions = useCallback(async () => {
        if (!hasDependencies || !column.lookup) return;
        
        setLoading(true);
        try {
            // Only fetch if all dependencies have values
            const allDependenciesHaveValues = Object.values(dependencyValues).every(value => 
                value !== null && value !== undefined && value !== ''
            );
            
            if (!allDependenciesHaveValues) {
                setOptions([]);
                return;
            }

            const requestBody = [{
                lookup: column.lookup,
                where: dependencyValues
            }];

            const response = await transport({ url: `${api}/combo`, data: requestBody, method: 'POST' });
            
            if (response.data && response.data.success && response.data.lookups) {
                const fetchedOptions = response.data.lookups[column.lookup] || [];
                setOptions(fetchedOptions);
                
                // Clear current value if it's not in the new options
                if (currentFieldValue && !fetchedOptions.find(opt => opt.value === currentFieldValue)) {
                    formik.setFieldValue(field, '');
                }
            }
        } catch (error) {
            setOptions([]);
        } finally {
            setLoading(false);
        }
    }, [hasDependencies, column.lookup, dependencyValues, field, api, currentFieldValue, formik.setFieldValue]);

    // Single effect to manage options - reduces redundant effects
    useEffect(() => {
        if (hasDependencies) {
            fetchCascadingOptions();
        } else if(!userSelected.current) {
            setOptions(initialOptions);
        }
    }, [hasDependencies, fetchCascadingOptions, initialOptions]);

    // Memoize input value processing to avoid recalculation on each render
    const inputValue = useMemo(() => {
        let value = currentFieldValue;
        
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
    }, [currentFieldValue, options, column.multiSelect, field, formik.setFieldValue]);

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
                disabled={loading}
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
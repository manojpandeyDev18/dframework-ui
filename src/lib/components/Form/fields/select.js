import React, { useEffect, useMemo, useCallback } from 'react';
import { FormHelperText, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useCascadingLookup from '../../../hooks/useCascadingLookup';

const SelectField = React.memo(({ column, field, formik, lookups, dependsOn = [], model, ...otherProps }) => {
    const userSelected = React.useRef(false);
    const { placeHolder } = column;
    const options = useCascadingLookup({ column, formik, lookups, dependsOn, userSelected, model });
    const theme = useTheme();

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
    }, [formik.values[field], options, column.multiSelect, field]);

    const handleChange = useCallback((event) => {
        if (typeof column.onChange === 'function') {
            column.onChange({ formik, value: event.target.value, options, event });
        }
        formik.handleChange(event);
        userSelected.current = true;
    }, [formik.values[field], column.onChange, options]);

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
                sx={{
                    backgroundColor: column.readOnly ? theme.palette?.action?.disabled : ''
                }}
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
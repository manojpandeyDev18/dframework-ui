import React, { useCallback, useMemo, useState, useEffect } from 'react';
import StringField from './string';
import useDebounce from '../../../hooks/useDebounce';
import { useTheme } from '@mui/material';

// Key code constants
const DIGIT_START = 47;
const DIGIT_END = 58;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 40;

// Control key codes
const CONTROL_KEYS = [8, 46, 9, 27, 13]; // backspace, delete, tab, escape, enter
const resolveValue = ({ value, state }) => {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        const key = value.slice(1, -1); // Extract key inside the braces
        return state[key] !== undefined ? state[key] : value;
    }
    return value;
};
const Field = ({ column, otherProps, formik, field, ...props }) => {
    const { min, max } = column;
    const theme = useTheme();
    const [inputValue, setInputValue] = useState(formik.values[field] || '');
    const debouncedValue = useDebounce(inputValue, 400);

    const resolvedMin = useMemo(
        () => Math.max(0, resolveValue({ value: min, state: formik.values })),
        [min, formik.values]
    );
    const resolvedMax = useMemo(
        () => resolveValue({ value: max, state: formik.values }),
        [max, formik.values]
    );

    // Update formik when debounced value changes
    useEffect(() => {
        if (debouncedValue !== formik.values[field]) {
            const numValue = Number(debouncedValue);
            if (numValue < resolvedMin) {
                formik.setFieldValue(field, resolvedMin);
            } else if (resolvedMax && numValue > resolvedMax) {
                formik.setFieldValue(field, resolvedMax);
            } else {
                formik.setFieldValue(field, numValue);
            }
        }
    }, [debouncedValue, field, formik, resolvedMin, resolvedMax]);

    // Update local state when formik value changes externally
    useEffect(() => {
        setInputValue(formik.values[field] || '');
    }, [formik.values[field]]);

    const { onBlur } = props;
    otherProps = {
        InputProps: {
            inputProps: {
                min: resolvedMin,
                max: resolvedMax,
                readOnly: column.readOnly === true,
                onKeyDown: (event) => {
                    const keyCode = event.which ? event.which : event.keyCode;
                    // Allow: backspace, delete, tab, escape, enter, arrows
                    if (CONTROL_KEYS.includes(keyCode) || (keyCode >= ARROW_LEFT && keyCode <= ARROW_RIGHT)) {
                        return;
                    }
                    // Allow number keys (0-9)
                    if (!(keyCode > DIGIT_START && keyCode < DIGIT_END)) {
                        event.preventDefault();
                    }
                },
                sx: column.readOnly
                    ? { backgroundColor: theme.palette?.action?.disabled } // Light grey background for read-only inputs
                    : undefined,
            }
        },
        type: 'number',
        ...otherProps,
        onChange: (event) => {
            setInputValue(event.target.value);
            if (typeof onBlur === "function") {
                onBlur(event);
            }
        },
    };

    return <StringField column={column} otherProps={otherProps} formik={formik} field={field} {...props} />;
};

export default Field;

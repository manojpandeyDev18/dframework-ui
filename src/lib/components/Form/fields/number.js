import React, { useMemo, useState, useEffect, useId } from 'react';
import { NumberField as BaseNumberField } from '@base-ui/react/number-field';
import {
    IconButton,
    FormControl,
    FormHelperText,
    Input,
    OutlinedInput,
    FilledInput,
    InputAdornment,
    useTheme
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useDebounce from '../../../hooks/useDebounce';

const resolveValue = ({ value, state }) => {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        const key = value.slice(1, -1); // Extract key inside the braces
        return state[key] !== undefined ? state[key] : value;
    }
    return value;
};


const inputComponentMap = {
    outlined: OutlinedInput,
    filled: FilledInput,
    standard: Input,
};

const NumberFieldAdornment = () => (
    <InputAdornment
        position="end"
        sx={{
            flexDirection: 'column',
            maxHeight: 'unset',
            alignSelf: 'stretch',
            ml: 0,
            '& button': {
                py: 0,
                flex: 1,
                borderRadius: 0.5,
            },
        }}
    >
        <BaseNumberField.Increment
            render={<IconButton size="small" aria-label="Increase" />}
        >
            <KeyboardArrowUpIcon
                fontSize="small"
                sx={{ transform: 'translateY(2px)' }}
            />
        </BaseNumberField.Increment>

        <BaseNumberField.Decrement
            render={<IconButton size="small" aria-label="Decrease" />}
        >
            <KeyboardArrowDownIcon
                fontSize="small"
                sx={{ transform: 'translateY(-2px)' }}
            />
        </BaseNumberField.Decrement>
    </InputAdornment>
);

const Field = ({ column, otherProps, formik, field, ...props }) => {
    const { min, max, readOnly } = column;
    const theme = useTheme();

    const resolvedMin = useMemo(
        () => resolveValue({ value: min, state: formik.values }),
        [min, formik.values]
    );

    const resolvedMax = useMemo(
        () => resolveValue({ value: max, state: formik.values }),
        [max, formik.values]
    );
    const formikFieldValue = useMemo(() => formik.values[field] ?? null, [formik.values[field]]);
    const [inputValue, setInputValue] = useState(formikFieldValue);
    const debouncedValue = useDebounce(inputValue, 400);

    useEffect(() => {
        if (debouncedValue !== formikFieldValue) {
            formik.setFieldValue(field, debouncedValue);
        }
    }, [debouncedValue]);

    // Sync with formik value changes from external sources
    useEffect(() => {
        if (formikFieldValue !== inputValue) {
            setInputValue(formikFieldValue);
        }
    }, [formikFieldValue]);

    const handleValueChange = (value) => {
        setInputValue(value);
    };

    const handleBlur = (event) => {
        formik.setFieldTouched(field, true);
        if (typeof props.onBlur === "function") {
            props.onBlur(event);
        }
    };

    const inputId = useId();
    const id = `number-field-${field}-${inputId}`;
    const variant = column.variant || 'standard';
    const InputComponent = inputComponentMap[variant];
    return (
        <BaseNumberField.Root
            value={inputValue}
            onValueChange={handleValueChange}
            min={resolvedMin}
            max={resolvedMax}
            disabled={readOnly}
            render={(baseProps, state) => (
                <FormControl
                    fullWidth
                    ref={baseProps.ref}
                    error={formik.touched[field] && Boolean(formik.errors[field])}
                    sx={readOnly ? {
                        backgroundColor: theme.palette?.action?.disabled
                    } : undefined}
                >
                    {baseProps.children}
                </FormControl>
            )}
        >
            <BaseNumberField.Input
                render={(inputProps, state) => (
                    <InputComponent
                        id={id}
                        inputRef={inputProps.ref}
                        value={state.inputValue}
                        onChange={inputProps.onChange}
                        onBlur={(e) => {
                            inputProps.onBlur(e);
                            handleBlur(e);
                        }}
                        inputProps={{
                            ...inputProps,
                            'aria-describedby': formik.touched[field] && formik.errors[field] ? `${id}-error` : undefined,
                        }}
                        endAdornment={<NumberFieldAdornment />}
                        sx={{ pr: 0 }}
                        {...otherProps}
                    />
                )}
            />
            {formik.touched[field] && formik.errors[field] && <FormHelperText id={`${id}-error`}> {formik.errors[field]} </FormHelperText>}
        </BaseNumberField.Root>
    );
};

export default Field;

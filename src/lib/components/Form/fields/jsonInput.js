import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import debounce from 'lodash/debounce';
import { ImportantSpan } from '../field-mapper';

const Field = ({ field, formik }) => {
    const [jsonData, setJsonData] = React.useState({});
    const validations = React.useMemo(() => {
        let value = formik.values[`${field}Validations`];
        if (typeof value === 'string') {
            value = JSON.parse(value);
        }
        return value || [];
    }, [formik.values[field]]);

    const json = React.useMemo(() => {
        const value = formik.values[field];
        // Need to have json as object to apply the Yup Validation.
        return typeof value === 'string' ? JSON.parse(value): value;
    }, [formik.values[field]]);

    React.useEffect(() => {
        let inputJSON = {};
        if (!json && !validations) return;
        else if(validations && !json) {
            Object.keys(validations).forEach(key => inputJSON[key] = validations[key].defaultValue || '');
        } else {
            inputJSON = json;
        }
        setJsonData(inputJSON);
        handleDebouncedChange(inputJSON);
    }, [formik.values[field]]);

    const handleDebouncedChange = React.useMemo(
        () =>
            debounce((jsonData) => {
                formik.setFieldValue(field, jsonData);
            }, 300),
        [field]
    );

    const handleChange = (key, value) => {
        const updatedState = { ...jsonData, [key]: value };
        setJsonData(updatedState);
        handleDebouncedChange(updatedState);
    };

    React.useEffect(() => {
        return () => {
            handleDebouncedChange.cancel();
        };
    }, [handleDebouncedChange]);

    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard"
            error={formik.touched[field] && Boolean(formik.errors[field])}
            style={{ marginBottom: '1rem' }}
        >
            {Object.keys(jsonData).map((key) => {
                const validationObj = validations.find((obj) => obj.field === key) || {};
                const { required, min, max, type } = validationObj;
                return (
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginBottom: '0.5rem',
                        }}
                    >
                        <Typography variant="body1" sx={{ width: "180px", marginRight: 2 }}>
                            {key} {required ?  <ImportantSpan>*</ImportantSpan>: <></>}:
                        </Typography>
                        {type === 'boolean' ?
                            <Checkbox
                                checked={jsonData[key]}
                                onChange={(e) => handleChange(key, e.target.checked)}
                                style={{ paddingLeft: 0 }}
                            /> :
                            <Input
                                id={key}
                                name={key}
                                value={jsonData[key]}
                                onChange={(e) => handleChange(key, e.target.value)}
                                fullWidth
                                style={{ flex: 2 }}
                                required={!!required}
                                type={type || 'text'}
                                inputProps={{
                                    ...(min !== undefined && { min }),
                                    ...(max !== undefined && { max }),
                                }}
                            />}
                    </div>
                )
            })}
            {formik.touched[field] && formik.errors[field] && <FormHelperText>{typeof formik.errors[field] === 'object' ? Object.values(formik.errors[field]).join(' , ') : formik.errors[field]}</FormHelperText>}
        </FormControl>
    );
};

export default Field;
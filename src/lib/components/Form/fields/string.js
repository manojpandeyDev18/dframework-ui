import TextField from '@mui/material/TextField';
import React, { useMemo } from 'react';

const field = ({ column, field, formik, label, ...otherprops }) => {
    const rows = column.rows || (column.multiline ? 5 : 1);
    const value = useMemo(()=> formik.values[field] ?? column.defaultValue, [formik, column]);
    return <TextField
        type="text"
        variant={column.variant || "standard"}
        InputProps={{
            readOnly: column.readOnly === true,
            sx: column.readOnly
                ? { backgroundColor: '#dfdede' } // Light grey background for read-only inputs
                : undefined
        }}
        key={field}
        required={column.required}
        multiline={column.multiline}
        rows={rows}
        label=""
        fullWidth
        name={field}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[field] && Boolean(formik.errors[field])}
        helperText={formik.touched[field] && formik.errors[field]}
        autoComplete={column.autoComplete}
        {...otherprops}
        // defaultValue={column.defaultValue}
    />;
};

export default field;
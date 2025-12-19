import { useCallback } from "react";
import { styled } from "@mui/material/styles";

const DivSpacing = styled('div')({
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '20px'
});
const TransferField = ({ component, name, formik, field, column }) => {
    const { value } = formik.getFieldProps(name || field);
    const { setFieldValue } = formik;
    const Component = component || column.relation;
    const onAssignChange = useCallback((value) => {
        setFieldValue(name || field, value);
    }, [setFieldValue, name, field]);
    return (
        <div>
            <DivSpacing>{`${"Available"} ${column.label}`}</DivSpacing>
            <Component selected={value} available={true} onAssignChange={onAssignChange} disableCellRedirect={column.disableCellRedirect} readOnly={column.readOnly} />
            <DivSpacing>{`${"Assigned"} ${column.label}`}</DivSpacing>
            <Component selected={value} assigned={true} onAssignChange={onAssignChange} disableCellRedirect={column.disableCellRedirect} readOnly={column.readOnly} />
        </div>
    );
}

export default TransferField;
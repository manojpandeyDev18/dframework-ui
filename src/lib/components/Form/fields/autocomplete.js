import * as React from 'react';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useStateContext } from "../../useRouter/StateProvider";
import { transport } from "../../Grid/httpRequest";

const consts = {
    limitTags: 5
}

const Field = React.memo(({ column, field, formik, lookups, dependsOn, fieldConfigs = {}, mode, api, ...otherProps }) => {
    const { stateData } = useStateContext();
    
    const [options, setOptions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    // Memoize current field value to avoid dependency on entire formik.values
    const currentFieldValue = React.useMemo(() => formik.values[field], [formik.values, field]);
    
    // Memoize input value processing to avoid recalculation on each render
    const inputValue = React.useMemo(() => 
        currentFieldValue?.split(", ")?.map(Number) || []
    , [currentFieldValue]);
    
    // Memoize dependency values to prevent unnecessary re-renders
    const dependencyValues = React.useMemo(() => {
        const toReturn = {};
        if (!dependsOn || !Array.isArray(dependsOn)) return toReturn;
        for(const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, [dependsOn, ...((dependsOn || []).map(field => formik.values[field]))]);

    // Check if this field has dependencies
    const hasDependencies = React.useMemo(() => 
        dependsOn && Array.isArray(dependsOn) && dependsOn.length
    , [dependsOn]);

    const initialOptions = React.useMemo(() => {
        if (hasDependencies) {
            return []; // Start empty for cascading combos
        }
        return lookups ? lookups[column.lookup] : [];
    }, [lookups, column.lookup, hasDependencies]);

    // Fetch cascading combo options
    const fetchCascadingOptions = React.useCallback(async () => {
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
                
                // Clear current value if selected options are not in the new options
                const validValues = inputValue.filter(val => 
                    fetchedOptions.find(opt => opt.value === val)
                );
                
                if (validValues.length !== inputValue.length) {
                    formik.setFieldValue(field, validValues.length > 0 ? validValues.join(', ') : '');
                }
            }
        } catch (error) {
            console.error('Error fetching cascading options:', error);
            setOptions([]);
        } finally {
            setLoading(false);
        }
    }, [hasDependencies, column.lookup, dependencyValues, field, api, inputValue, formik.setFieldValue]);

    // Initialize options
    React.useEffect(() => {
        if (hasDependencies) {
            fetchCascadingOptions();
        } else {
            setOptions(initialOptions);
        }
    }, [hasDependencies, fetchCascadingOptions, initialOptions]);

    // Memoize filtered options to avoid recalculation on each render
    const filteredOptions = React.useMemo(() => {
        let processedOptions = [...options];
        
        const { filter } = column;
        if (typeof filter === "function" && processedOptions.length) {
            processedOptions = filter({ options: processedOptions, stateData }) || processedOptions;
        }
        
        return processedOptions;
    }, [options, column.filter, stateData]);
    
    // Memoize filtered combos to avoid recalculation on each render
    const filteredCombos = React.useMemo(() => 
        filteredOptions.filter(option => inputValue.includes(option.value)) || []
    , [filteredOptions, inputValue]);
    
    // Memoize disabled state
    const isDisabled = React.useMemo(() => 
        mode !== 'copy' && fieldConfigs.disabled
    , [mode, fieldConfigs.disabled]);
    
    // Memoize event handler to prevent unnecessary re-renders
    const handleAutoCompleteChange = React.useCallback((_, newValue) => {
        formik?.setFieldValue(field, newValue ? newValue.map(val => val.value).join(', ') : '');
    }, [formik?.setFieldValue, field]);

    return (
        <FormControl
            fullWidth
            key={field}
            variant="standard"
            error={formik.touched[field] && Boolean(formik.errors[field])}
        >
            <Autocomplete
                {...otherProps}
                multiple
                id={field}
                limitTags={column.limitTags || consts.limitTags}
                options={filteredOptions || []}
                getOptionLabel={(option) => option.label || ''}
                defaultValue={filteredCombos}
                renderInput={(params) => <TextField {...params} variant="standard" />}
                onChange={handleAutoCompleteChange}
                value={filteredCombos}
                size="small"
                disabled={isDisabled || loading}
                loading={loading}
            />
            {formik.touched[field] && formik.errors[field] && <FormHelperText>{formik.errors[field]}</FormHelperText>}
        </FormControl>
    )
});

export default Field;


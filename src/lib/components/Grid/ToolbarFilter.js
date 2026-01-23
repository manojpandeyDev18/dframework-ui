import React, { useCallback, useMemo } from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import { useStateContext } from '../useRouter/StateProvider';
import utils from '../utils';
import { getDefaultOperator } from './helper';

dayjs.extend(utcPlugin);

const ToolbarFilter = ({
    column,
    filterModel,
    setFilterModel,
    lookupData,
    tTranslate,
    tOpts
}) => {
    const { systemDateTimeFormat, stateData } = useStateContext();
    const { fixedFilterFormat } = utils;

    // Find existing filter for this column
    const existingFilter = useMemo(() => {
        return filterModel?.items?.find(item => item.field === column.field);
    }, [filterModel, column.field]);

    // Get current filter value - use ?? to properly handle falsy but valid values like 0, false, ""
    const filterValue = existingFilter?.value ?? (column.toolbarFilter?.defaultFilterValue ?? '');

    // Handle filter change - use functional update to avoid filterModel dependency
    const handleFilterChange = useCallback((newValue) => {
        const operator = column.toolbarFilter?.defaultOperator || getDefaultOperator(column.type);
        
        setFilterModel((prevFilterModel) => {
            const currentItems = prevFilterModel?.items || [];

            // If value is empty, remove filter
            if (newValue === '' || newValue === null || (Array.isArray(newValue) && newValue.length === 0)) {
                const newItems = currentItems.filter((item) => item.field !== column.field);
                return {
                    ...prevFilterModel,
                    items: newItems,
                };
            }

            // Update or add filter
            const newFilter = {
                field: column.field,
                operator: operator,
                value: newValue,
                type: column.type,
            };

            const otherFilters = currentItems.filter((item) => item.field !== column.field);
            return {
                ...prevFilterModel,
                items: [...otherFilters, newFilter],
            };
        });
    }, [column, setFilterModel]);

    // Get operator label/symbol for display
    const getOperatorLabel = useCallback((operator, type) => {
        // For number operators, use symbols
        if (type === 'number') {
            const symbolMap = {
                '=': '=',
                '!=': '≠',
                '>': '>',
                '>=': '≥',
                '<': '<',
                '<=': '≤'
            };
            return symbolMap[operator] || operator;
        }
        
        // For string operators, use verbose labels for non-obvious ones
        // Note: 'startsWith' is included for completeness but won't be displayed
        // due to shouldShowOperator logic below (it's the default and doesn't need a label)
        if (type === 'string') {
            const labelMap = {
                'contains': 'contains',
                'equals': 'exact match',
                'startsWith': 'starts with',
                'endsWith': 'ends with',
                'isEmpty': 'is empty',
                'isNotEmpty': 'is not empty'
            };
            return labelMap[operator] || operator;
        }
        
        // For other types, return the operator as-is or a readable version
        const labelMap = {
            'is': 'is',
            'not': 'is not',
            'isAnyOf': 'any of',
            'after': 'after',
            'onOrAfter': 'on or after',
            'before': 'before',
            'onOrBefore': 'on or before'
        };
        return labelMap[operator] || operator;
    }, []);

    // Render based on column type
    const renderFilterInput = () => {
        const baseLabel = column.toolbarFilter?.label || column.headerName || column.label || column.field;
        const operator = column.toolbarFilter?.defaultOperator || getDefaultOperator(column.type);
        const operatorLabel = getOperatorLabel(operator, column.type);
        
        // For number fields, prepend operator symbol. For others, append operator text if verbose
        const shouldShowOperator = column.type === 'number' || (column.type === 'string' && operator !== 'startsWith');
        const label = shouldShowOperator 
            ? (column.type === 'number' ? `${operatorLabel} ${baseLabel}` : `${baseLabel} (${operatorLabel})`)
            : baseLabel;

        switch (column.type) {
            case 'string':
                return (
                    <TextField
                        variant="standard"
                        label={tTranslate(label, tOpts)}
                        value={filterValue}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        type="text"
                        size="small"
                        sx={{ minWidth: 150 }}
                    />
                );

            case 'number':
                return (
                    <TextField
                        variant="standard"
                        label={tTranslate(label, tOpts)}
                        value={filterValue}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        type="text"
                        inputProps={{ inputMode: 'numeric' }}
                        size="small"
                        sx={{ minWidth: 150 }}
                    />
                );

            case 'boolean': {
                const booleanSelectValue =
                    filterValue === '' || filterValue === undefined || filterValue === null
                        ? ''
                        : filterValue === true || filterValue === 'true'
                            ? 'true'
                            : filterValue === false || filterValue === 'false'
                                ? 'false'
                                : '';

                return (
                    <FormControl variant="standard" sx={{ minWidth: 150 }}>
                        <InputLabel>{tTranslate(label, tOpts)}</InputLabel>
                        <Select
                            value={booleanSelectValue}
                            onChange={(e) => {
                                const val = e.target.value;
                                let newValue;
                                if (val === '') {
                                    newValue = '';
                                } else if (val === 'true') {
                                    newValue = true;
                                } else if (val === 'false') {
                                    newValue = false;
                                } else {
                                    newValue = val;
                                }
                                handleFilterChange(newValue);
                            }}
                            size="small"
                        >
                            <MenuItem value="">{tTranslate('All', tOpts)}</MenuItem>
                            <MenuItem value="true">{tTranslate('True', tOpts)}</MenuItem>
                            <MenuItem value="false">{tTranslate('False', tOpts)}</MenuItem>
                        </Select>
                    </FormControl>
                );
            }

            case 'select':
            case 'lookup':
                const options = column.customLookup || lookupData?.[column.lookup] || [];
                const normalizedOptions = typeof column.lookup === 'string'
                    ? options.map((option) => ({
                        label: option?.label || '',
                        value: option?.value ?? ''
                    }))
                    : options;

                return (
                    <FormControl variant="standard" sx={{ minWidth: 150 }}>
                        <InputLabel>{tTranslate(label, tOpts)}</InputLabel>
                        <Select
                            value={filterValue ?? []}
                            onChange={(e) => handleFilterChange(e.target.value)}
                            multiple={existingFilter?.operator === 'isAnyOf' || column.toolbarFilter?.defaultOperator === 'isAnyOf'}
                            size="small"
                        >
                            {normalizedOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                );

            case 'date':
            case 'dateTime':
                const columnType = column.type;
                // Normalize column type for fixedFilterFormat lookup (dateTime -> datetime)
                const normalizedType = columnType === 'dateTime' ? 'datetime' : columnType;
                const filterFormat = fixedFilterFormat[normalizedType];
                const format = systemDateTimeFormat(columnType !== 'dateTime', false, stateData.dateTime);
                const DateComponent = columnType === 'dateTime' ? DateTimePicker : DatePicker;
                
                // Parse and validate date value once
                let dateValue = null;
                if (filterValue) {
                    const parsedDate = dayjs(filterValue);
                    dateValue = parsedDate.isValid() ? parsedDate : null;
                }

                return (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateComponent
                            label={tTranslate(label, tOpts)}
                            format={format}
                            value={dateValue}
                            onChange={(newValue) => {
                                if (!newValue || !newValue.isValid()) {
                                    handleFilterChange(null);
                                } else {
                                    handleFilterChange(newValue.format(filterFormat));
                                }
                            }}
                            slotProps={{
                                textField: {
                                    variant: "standard",
                                    size: "small",
                                    sx: { minWidth: 150 }
                                }
                            }}
                        />
                    </LocalizationProvider>
                );

            default:
                return (
                    <TextField
                        variant="standard"
                        label={tTranslate(label, tOpts)}
                        value={filterValue}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        size="small"
                        sx={{ minWidth: 150 }}
                    />
                );
        }
    };

    return renderFilterInput();
};

export default ToolbarFilter;

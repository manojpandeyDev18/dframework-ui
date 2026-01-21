import React, { useCallback, useMemo } from 'react';
import { TextField, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import { useStateContext } from '../useRouter/StateProvider';
import utils from '../utils';
import { getGridStringOperators, getGridBooleanOperators } from '@mui/x-data-grid-premium';

dayjs.extend(utcPlugin);

// Utility function to get default operator based on column type
const getDefaultOperator = (type) => {
    switch (type) {
        case 'string':
            return 'contains';
        case 'number':
            return '=';
        case 'date':
        case 'dateTime':
            return 'is';
        case 'boolean':
            return 'is';
        case 'select':
        case 'lookup':
            return 'isAnyOf';
        default:
            return 'contains';
    }
};

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

    // Get current filter value
    const filterValue = existingFilter?.value ?? (column.toolbarFilter?.defaultFilterValue || '');

    // Handle filter change
    const handleFilterChange = useCallback((newValue) => {
        const operator = column.toolbarFilter?.defaultOperator || getDefaultOperator(column.type);
        
        // If value is empty, remove filter
        if (newValue === '' || newValue === null || (Array.isArray(newValue) && newValue.length === 0)) {
            const newItems = filterModel.items.filter(item => item.field !== column.field);
            setFilterModel({
                ...filterModel,
                items: newItems
            });
            return;
        }

        // Update or add filter
        const newFilter = {
            field: column.field,
            operator: operator,
            value: newValue,
            type: column.type
        };

        const otherFilters = filterModel.items.filter(item => item.field !== column.field);
        setFilterModel({
            ...filterModel,
            items: [...otherFilters, newFilter]
        });
    }, [column, filterModel, setFilterModel]);

    // Render based on column type
    const renderFilterInput = () => {
        const label = column.toolbarFilter?.label || column.header || column.label || column.field;

        switch (column.type) {
            case 'string':
            case 'number':
                return (
                    <TextField
                        variant="standard"
                        label={tTranslate(label, tOpts)}
                        value={filterValue}
                        onChange={(e) => handleFilterChange(e.target.value)}
                        type={column.type === 'number' ? 'number' : 'text'}
                        size="small"
                        sx={{ minWidth: 150 }}
                    />
                );

            case 'boolean':
                return (
                    <FormControl variant="standard" sx={{ minWidth: 150 }}>
                        <InputLabel>{tTranslate(label, tOpts)}</InputLabel>
                        <Select
                            value={filterValue}
                            onChange={(e) => handleFilterChange(e.target.value)}
                            size="small"
                        >
                            <MenuItem value="">{tTranslate('All', tOpts)}</MenuItem>
                            <MenuItem value={true}>{tTranslate('True', tOpts)}</MenuItem>
                            <MenuItem value={false}>{tTranslate('False', tOpts)}</MenuItem>
                        </Select>
                    </FormControl>
                );

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
                            {normalizedOptions.map((option, index) => (
                                <MenuItem key={index} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                );

            case 'date':
            case 'dateTime':
                const columnType = column.type;
                const filterFormat = fixedFilterFormat[columnType];
                const format = systemDateTimeFormat(columnType !== 'dateTime', false, stateData.dateTime);
                const DateComponent = columnType === 'dateTime' ? DateTimePicker : DatePicker;
                const dateValue = filterValue ? dayjs(filterValue) : null;

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

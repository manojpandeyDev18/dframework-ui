import React, { useMemo, useCallback } from 'react';
import {
    useGridSelector,
    gridFilterModelSelector
} from '@mui/x-data-grid-premium';

import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';

const GridOperators = {
    IsAnyOf: 'isAnyOf'
};

const CustomDropdownMenu = (props) => {
    const { column, item, applyValue, apiRef } = props;
    const lookupData = column?.dataRef?.current?.lookups;
    let options = column.customLookup || lookupData[column.lookup] || [];

    if (typeof column.lookup === 'string') {
        options = options.map(({ label, value }) => ({
            label,
            value
        }));
    }

    const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
    const currentFieldFilters = useMemo(
        () =>
            filterModel.items?.filter((value) => {
                return value.field === column.field;
            }),
        [column.field, filterModel.items]
    );

    const handleFilterChange = useCallback(
        (event) => {
            let inputValue = event.target.value;
            if (filterModel.items.length >= 1) {
                inputValue = inputValue.length === 1 ? inputValue[0] : inputValue;

                for (const element of filterModel.items) {
                    if (element.field !== item.field) {
                        continue;
                    }
                    if (element.operator === GridOperators.IsAnyOf) {
                        inputValue = Array.isArray(inputValue) ? inputValue : [inputValue];
                    } else {
                        inputValue = inputValue === 0 ? '0' : inputValue;
                    }
                }
            }

            if (inputValue.length === 0 && currentFieldFilters[0]) {
                apiRef.current.deleteFilterItem(currentFieldFilters[0]);
                return;
            }

            const newValue = inputValue;
            const newitem = currentFieldFilters[0] ? currentFieldFilters[0] : item;
            applyValue({ ...newitem, value: newValue });
        },
        [apiRef, column.applyZeroFilter, currentFieldFilters, item, applyValue]
    );

    const value = currentFieldFilters[0]?.value ?? '';
    console.log("Custom Dropdown Menu ", options);
    console.log("Custom Dropdown Menu value ", value);

    return (
        <FormControl variant="outlined">
            <InputLabel>{"Values"}</InputLabel>
            <Select
                label="Values"
                variant="outlined"
                value={value}
                onChange={(e) => handleFilterChange(e)}
                multiple={Array.isArray(value)}
                MenuProps={{
                    PaperProps: {
                        style: {
                            height: 'fit-content',
                            overflow: 'hidden'
                        }
                    }
                }}
                input={<OutlinedInput focused />}
                sx={{ width: "201px", height: "45px" }}
            >
                {options?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdownMenu;

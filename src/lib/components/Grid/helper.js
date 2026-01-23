import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { GridToolbarExportContainer } from '@mui/x-data-grid-premium';
import { GridOn, Code, Language, TableChart, DataObject as DataObjectIcon } from '@mui/icons-material';
import React from 'react';

// Helper to convert default sort string to array
export const convertDefaultSort = (defaultSort, constants, sortRegex) => {
    if (typeof defaultSort !== constants.string) return [];
    return defaultSort.split(',').map(sortField => {
        sortRegex.lastIndex = 0;
        const sortInfo = sortRegex.exec(sortField);
        if (!sortInfo) return null;
        const [, field, direction = 'ASC'] = sortInfo;
        return {
            field: field.trim(),
            sort: direction.trim().toLowerCase()
        };
    }).filter(Boolean);
};

// Export menu item component
export const ExportMenuItem = ({ tTranslate, tOpts, handleExport, contentType, type, isPivotExport = false, icon }) => (
    <MenuItem
        onClick={handleExport}
        data-type={type}
        data-content-type={contentType}
        data-is-pivot-export={isPivotExport}
    >
        <Box className="grid-icons" sx={{ pointerEvents: 'none', marginTop: 1 }}>{icon}</Box>
        {tTranslate(type, tOpts)}
    </MenuItem>
);

// Custom export button component
export const CustomExportButton = ({ exportFormats, ...props }) => (
    <GridToolbarExportContainer {...props}>
        {exportFormats.csv !== false && <ExportMenuItem {...props} icon={<GridOn fontSize="small" />} type="CSV" contentType="text/csv" />}
        {exportFormats.excel !== false && <ExportMenuItem {...props} icon={<TableChart fontSize="small" />} type="Excel" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />}
        {props.showPivotExportBtn && <ExportMenuItem {...props} icon={<TableChart fontSize="small" />} type="Excel With Pivot" contentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" isPivotExport={true} />}
        {exportFormats.xml !== false && <ExportMenuItem {...props} icon={<Code fontSize="small" />} type="XML" contentType="text/xml" />}
        {exportFormats.html !== false && <ExportMenuItem {...props} icon={<Language fontSize="small" />} type="HTML" contentType="text/html" />}
        {exportFormats.json !== false && <ExportMenuItem {...props} icon={<DataObjectIcon fontSize="small" />} type="JSON" contentType="application/json" />}
    </GridToolbarExportContainer>
);

// Get default operator based on column type
export const getDefaultOperator = (type, customOperator) => {
    if (customOperator) return customOperator;
    switch (type) {
        case 'string':
            return 'startsWith';
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
            return 'startsWith';
    }
};

// Shallow props comparison
export const areEqual = (prevProps = {}, nextProps = {}) => {
    let equal = true;
    for (const o in prevProps) {
        if (prevProps[o] !== nextProps[o]) {
            equal = false;
        }
    }
    for (const o in nextProps) {
        if (!(o in prevProps)) {
            equal = false;
        }
    }
    return equal;
};
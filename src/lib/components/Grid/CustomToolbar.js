import React from 'react';
import Button from '@mui/material/Button';
import {
    Toolbar,
    ColumnsPanelTrigger,
    FilterPanelTrigger
} from '@mui/x-data-grid-premium';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography';
import { Badge, Box } from "@mui/material";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';
import GridPreferences from './GridPreference';
import ToolbarFilter from './ToolbarFilter';
import { CustomExportButton } from './helper';

const ButtonWithMargin = styled(Button)({
    margin: '6px'
});

const GridToolBar = styled(Toolbar)({
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    minHeight: 'auto',
    borderBottom: 'none'
});

const CustomToolbar = function (props) {
    const {
        model,
        data,
        currentPreference,
        isReadOnly,
        canAdd,
        forAssignment,
        showAddIcon,
        onAdd,
        selectionApi,
        rowSelectionModel,
        selectAll,
        available,
        onAssign,
        assigned,
        onUnassign,
        effectivePermissions,
        clearFilters,
        handleExport,
        preferenceKey,
        apiRef,
        tTranslate,
        tOpts,
        filterModel,
        setFilterModel,
        onPreferenceChange,
        toolbarItems,
        gridColumns
    } = props;

    const addText = model.customAddText || (model.title ? `Add ${model.title}` : 'Add');
    const activeFilterCount = filterModel?.items?.length || 0;

    // Get columns that should have toolbar filters
    const toolbarFilterColumns = gridColumns?.filter(col => col.toolbarFilter) || [];
    const lookupData = data?.lookups || {};

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px'
                }}
            >
                <div>
                    {model.gridSubTitle && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }}> {tTranslate(model.gridSubTitle, tOpts)}</Typography>}
                    {currentPreference && model.showPreferenceInHeader && <Typography className="preference-name-text" variant="h6" component="h6" textAlign="center" sx={{ ml: 1 }} >{tTranslate('Applied Preference', tOpts)}: {currentPreference}</Typography>}
                    {(isReadOnly || (!canAdd && !forAssignment)) && <Typography variant="h6" component="h3" textAlign="center" sx={{ ml: 1 }} > {!canAdd || isReadOnly ? "" : model.title}</Typography>}
                    {!forAssignment && canAdd && !isReadOnly && <ButtonWithMargin startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAdd} size="medium" variant="contained" >{tTranslate(addText, tOpts)}</ButtonWithMargin>}
                    {(selectionApi.length && data.records.length) ? (
                        <ButtonWithMargin
                            onClick={selectAll}
                            size="medium"
                            variant="contained"
                        >
                            {rowSelectionModel.ids.size === data.records.length ? tTranslate("Deselect All", tOpts) : tTranslate("Select All", tOpts)}
                        </ButtonWithMargin>) :
                        <></>
                    }
                    {available && <ButtonWithMargin startIcon={!showAddIcon ? null : <AddIcon />} onClick={onAssign} size="medium" variant="contained"  >{tTranslate("Assign", tOpts)}</ButtonWithMargin>}
                    {assigned && <ButtonWithMargin startIcon={!showAddIcon ? null : <RemoveIcon />} onClick={onUnassign} size="medium" variant="contained"  >{tTranslate("Remove", tOpts)}</ButtonWithMargin>}
                </div>
                <GridToolBar {...props}>
                    {effectivePermissions.showColumnsOrder && (
                        <ColumnsPanelTrigger
                            render={(triggerProps) => (
                                <Button
                                    {...triggerProps}
                                    startIcon={<ViewColumnIcon />}
                                    size="small"
                                    variant="text"
                                >
                                    {tTranslate("COLUMNS", tOpts)}
                                </Button>
                            )}
                        />
                    )}
                    {effectivePermissions.filter && (<>
                        <FilterPanelTrigger
                            render={(triggerProps) => (
                                <Button
                                    {...triggerProps}
                                    startIcon={
                                        <Badge badgeContent={activeFilterCount} color="primary">
                                            <FilterListIcon />
                                        </Badge>
                                    }
                                    size="small"
                                    variant="text"
                                >
                                    {tTranslate("FILTERS", tOpts)}
                                </Button>
                            )}
                        />
                        <Button startIcon={<FilterListOffIcon />} onClick={clearFilters} size="small">{tTranslate("CLEAR FILTER", tOpts)}</Button>
                    </>)}

                    {effectivePermissions.export && (
                        <CustomExportButton handleExport={handleExport} showPivotExportBtn={model.pivotApi} exportFormats={model.exportFormats || {}} tTranslate={tTranslate} tOpts={tOpts} />
                    )}
                    {toolbarItems}
                    {preferenceKey &&
                        <GridPreferences
                            gridRef={apiRef}
                            preferenceKey={preferenceKey}
                            onPreferenceChange={onPreferenceChange}
                            t={tTranslate}
                            tOpts={tOpts}
                        />
                    }
                </GridToolBar>
            </div >
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0 10px 10px 10px' }}>
                {toolbarFilterColumns.length > 0 && (
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        {toolbarFilterColumns.map((column) => (
                            <ToolbarFilter
                                key={column.field}
                                column={column}
                                filterModel={filterModel}
                                setFilterModel={setFilterModel}
                                lookupData={lookupData}
                                tTranslate={tTranslate}
                                tOpts={tOpts}
                            />
                        ))}
                    </div>
                )}
            </Box>
          </>  
    );
};

export default CustomToolbar;

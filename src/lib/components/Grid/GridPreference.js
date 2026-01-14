import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, Checkbox, FormControlLabel, Grid, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Stack, TextField, Typography, Tooltip, ListItemIcon } from '@mui/material';
import { DataGridPremium, GridActionsCellItem, useGridApiRef } from '@mui/x-data-grid-premium';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSnackbar } from '../SnackBar';
import { useTranslation } from 'react-i18next';
import request, { DATA_PARSERS } from './httpRequest';
import { useStateContext } from '../useRouter/StateProvider';
import { DialogComponent } from '../Dialog';

const actionTypes = {
    Edit: "Edit",
    Delete: "Delete"
};

const DIALOG_TYPES = {
    ADD: "Add",
    EDIT: "Edit",
    MANAGE: "Manage",
    NONE: null
};

const gridColumns = [
    { field: "prefName", type: 'string', width: 300, headerName: "Preference Name", sortable: false, filterable: false },
    { field: "prefDesc", type: 'string', width: 300, headerName: "Preference Description", sortable: false, filterable: false },
    { field: "isDefault", type: "boolean", width: 100, headerName: "Default", sortable: false, filterable: false },
    { field: 'editAction', type: 'actions', headerName: '', width: 20, getActions: () => [<GridActionsCellItem key={1} icon={<Tooltip title={actionTypes.Edit}><EditIcon /></Tooltip>} tabIndex={1} data-action={actionTypes.Edit} label="Edit" color="primary" />] },
    { field: 'deleteAction', type: 'actions', headerName: '', width: 20, getActions: () => [<GridActionsCellItem key={2} icon={<Tooltip title={actionTypes.Delete}><DeleteIcon /></Tooltip>} tabIndex={2} data-action={actionTypes.Delete} label="Delete" color="error" />] }
];

const initialValues = {
    prefName: '',
    prefDesc: '',
    isDefault: false
};

const pageSizeOptions = [5, 10, 20, 50, 100];

const GridPreferences = ({ gridRef, onPreferenceChange }) => {
    const { getApiEndpoint } = useStateContext();
    const preferenceApi = getApiEndpoint("GridPreferenceManager");
    const preferenceKey = gridRef.current?.prefKey;
    const apiRef = useGridApiRef();
    const snackbar = useSnackbar();
    const { t } = useTranslation();
    const [dialogState, setDialogState] = useState(DIALOG_TYPES.NONE);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [openPreferenceExistsModal, setOpenPreferenceExistsModal] = useState(false);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState({});
    const [preferences, setPreferences] = useState(null);
    const [currentPreference, setCurrentPreference] = useState(null);

    // Filter out the default preference (prefId === 0) for the management grid
    const nonDefaultPreferences = useMemo(() =>
        preferences == null ? [] : preferences.filter(pref => pref.prefId !== 0),
        [preferences]
    );

    const validationSchema = useMemo(() => 
        yup.object({
            prefName: yup.string().trim(true).required(t('Preference Name is Required')).max(20, t('Maximum Length is ') + '20'),
            prefDesc: yup.string().max(100, t('Maximum Length is ') + '100')
        }), [t]);

    const handleOpen = (event) => setMenuAnchorEl(event?.currentTarget);
    const handleClose = () => setMenuAnchorEl(null);
    const handleDialogClose = () => {
        setDialogState(DIALOG_TYPES.NONE);
        handleClose();
    };

    const resetToDefault = () => {
        if (gridRef.current?.initialGridState) {
            gridRef.current.restoreState(gridRef.current.initialGridState);
            setCurrentPreference(null);
            if (onPreferenceChange) onPreferenceChange(null);
            handleClose();
        }
    };

    // Only memoize functions used in useEffect dependencies
    const loadPreferences = useCallback(async ({ applyDefault = false }) => {
        const response = await request({
            url: preferenceApi,
            params: { action: 'list', id: preferenceKey },
            dataParser: DATA_PARSERS.json
        });
        
        if (!Array.isArray(response)) {
            snackbar.showMessage(t('Failed to load preferences.'));
            if (onPreferenceChange) onPreferenceChange(null);
            return;
        }
        
        setPreferences(response);
        
        if (applyDefault) {
            const defaultPref = response.find(pref => pref.isDefault);
            if (defaultPref) {
                return { defaultPrefId: defaultPref.prefId };
            } else {
                if (onPreferenceChange) onPreferenceChange(null);
            }
        }
    }, [preferenceApi, preferenceKey, snackbar, t, onPreferenceChange]);

    const applyPreference = useCallback(async (prefId) => {
        // Store initial state before applying first preference
        if (!gridRef.current?.initialGridState && gridRef.current?.exportState) {
            gridRef.current.initialGridState = gridRef.current.exportState();
        }

        if (prefId === 0) {
            resetToDefault();
            return;
        }

        const preference = preferences.find(ele => ele.prefId === prefId);
        if (!preference?.prefValue) {
            snackbar.showMessage(t('Failed to load preference.'));
            return;
        }

        let gridState;
        try {
            gridState = typeof preference.prefValue === 'string' ? JSON.parse(preference.prefValue) : preference.prefValue;
        } catch (error) {
            snackbar.showMessage(t('Failed to parse preference data.'));
            return;
        }

        gridRef.current.restoreState(gridState);
        setCurrentPreference(preference.prefName);
        if (onPreferenceChange) onPreferenceChange(preference.prefName);
        handleClose();
    }, [gridRef, preferences, onPreferenceChange, snackbar, t]);

    const savePreference = async (values) => {
        const prefName = values.prefName.trim();

        if (preferences.find(ele => ele.prefName === prefName && ele.prefId !== values.prefId)) {
            setOpenPreferenceExistsModal(true);
            return;
        }

        const response = await request({ 
            url: preferenceApi, 
            params: {
                action: 'save',
                id: preferenceKey,
                prefId: values.prefId,
                prefName,
                prefDesc: values.prefDesc,
                prefValue: gridRef.current.exportState(),
                isDefault: values.isDefault
            },
            dataParser: DATA_PARSERS.json 
        });

        if (response === true || response?.success === true) {
            snackbar.showMessage(t(`Preference ${dialogState === DIALOG_TYPES.ADD ? "added" : "saved"} successfully.`));
            handleDialogClose();
            await loadPreferences({ applyDefault: false });
            return;
        }

        snackbar.showMessage(t('Error saving preference: ') + (response?.message || t('Unknown error')));
    };

    const deletePreference = async () => {
        const response = await request({ 
            url: preferenceApi, 
            params: {
                action: 'delete',
                id: preferenceKey,
                prefIdArray: openConfirmDeleteDialog.prefId
            },
            dataParser: DATA_PARSERS.json 
        });

        if (response === true || response?.success === true) {
            snackbar.showMessage(t('Preference deleted successfully.'));
            await loadPreferences({ applyDefault: false });
            setOpenConfirmDeleteDialog({});
            return;
        }

        snackbar.showMessage(t('Error deleting preference: ') + (response?.message || t('Unknown error')));
    };

    const onCellClick = (cellParams) => {
        const action = cellParams.field === 'editAction' ? actionTypes.Edit : cellParams.field === 'deleteAction' ? actionTypes.Delete : null;
        const error = t(`Default preference cannot be ${action === actionTypes.Edit ? 'edited' : 'deleted'}`)
        if (cellParams.id === 0 && action) {
            snackbar.showMessage(error);
            return;
        }
        if (action === actionTypes.Edit) {
            setDialogState(DIALOG_TYPES.EDIT);
            formik.setValues(cellParams?.row);
        }
        if (action === actionTypes.Delete) {
            setOpenConfirmDeleteDialog({
                prefId: cellParams.id,
                preferenceName: cellParams.row.prefName
            });
        }
    };

    const openDialog = (type) => {
        setDialogState(type);
        handleClose();
        if (type === DIALOG_TYPES.ADD) {
            formik.resetForm();
        }
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: savePreference,
        mode: "onBlur"
    });

    // Load preferences on mount
    useEffect(() => {
        if (!preferenceKey) return;
        
        const loadAndApply = async () => {
            const result = await loadPreferences({ applyDefault: true });
            if (result?.defaultPrefId) {
                await applyPreference(result.defaultPrefId);
            }
        };
        
        loadAndApply();
    }, [preferenceKey, loadPreferences, applyPreference]);

    const isManageDialog = dialogState === DIALOG_TYPES.MANAGE;
    const isFormDialog = dialogState === DIALOG_TYPES.ADD || dialogState === DIALOG_TYPES.EDIT;

    return (
        <Box>
            <Button
                id="grid-preferences-btn"
                aria-controls={menuAnchorEl ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={menuAnchorEl ? 'true' : undefined}
                onClick={handleOpen}
                title={t('Preference')}
                startIcon={<SettingsIcon />}
            >
                {t('Preferences')} {currentPreference && `(${currentPreference})`}
            </Button>
            <Menu
                id={`grid-preference-menu`}
                anchorEl={menuAnchorEl}
                open={!!menuAnchorEl}
                onClose={handleClose}
                component={List}
                dense
                MenuListProps={{
                    'aria-labelledby': 'grid-preferences-btn'
                }}
                sx={{
                    '& .MuiMenu-paper': { minWidth: 240, maxHeight: 320 },
                    '& .MuiListItemSecondaryAction-root': {
                        display: 'flex'
                    },
                    '& .Mui-selected': {
                        color: 'text.primary',
                        '&:hover': {
                            backgroundColor: 'success.main'
                        }
                    }
                }}
            >
                <MenuItem component={ListItemButton} dense onClick={() => openDialog(DIALOG_TYPES.ADD)}>
                    {t('Add Preference')}
                </MenuItem>
                <MenuItem component={ListItemButton} dense onClick={() => openDialog(DIALOG_TYPES.MANAGE)}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    {t('Manage Preferences')}
                </MenuItem>
                {gridRef.current?.initialGridState && (
                    <MenuItem component={ListItemButton} dense divider={preferences?.length > 0} onClick={() => applyPreference(0)}>
                        {t('Reset to Default')}
                    </MenuItem>
                )}

                {preferences?.length > 0 && preferences?.map((ele) => {
                    const { prefName, prefDesc, prefId } = ele;
                    return (
                        <MenuItem
                            onClick={() => applyPreference(prefId)}
                            component={ListItem}
                            selected={currentPreference === prefName}
                            key={`pref-item-${prefId}`}
                            title={t(prefDesc)}
                            dense
                        >
                            <ListItemText primary={prefName} />
                        </MenuItem>
                    );
                })}
            </Menu>
            <DialogComponent
                open={dialogState !== DIALOG_TYPES.NONE}
                disableRestoreFocus
                title={
                    <Typography variant="h5">
                        {dialogState} {t(isManageDialog ? 'Preferences' : 'Preference')}
                    </Typography>
                }
                maxWidth={isManageDialog ? 'md' : 'sm'}
                fullWidth
            >
                {isFormDialog && (
                    <Grid
                        component={'form'}
                        onSubmit={formik.handleSubmit}
                        rowGap={2}
                        container
                        sx={{
                            '& .MuiFormLabel-root:not(.MuiTypography-root)': {
                                fontWeight: 400,
                                display: 'table',
                                whiteSpace: 'pre-wrap' /* css-3 */,
                                wordWrap: 'break-word' /* Internet Explorer 5.5+ */
                            }
                        }}
                    >
                        <Grid size={12}>
                            <TextField
                                value={formik.values.prefName}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                label={
                                    <span>
                                        {t('Preference Name')} <span style={{ color: 'red' }}>*</span>
                                    </span>
                                }
                                autoFocus
                                name="prefName"
                                onChange={formik.handleChange}
                                error={!!formik.errors.prefName}
                                helperText={formik.errors.prefName}
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                value={formik.values.prefDesc}
                                variant="outlined"
                                multiline
                                rows={2}
                                size="small"
                                margin="dense"
                                label={t('Preference Description')}
                                name="prefDesc"
                                onChange={formik.handleChange}
                                error={!!formik.errors.prefDesc}
                                helperText={formik.errors.prefDesc}
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formik.values.isDefault}
                                        name="isDefault"
                                        onChange={formik.handleChange}
                                    />
                                }
                                label={t('Default')}
                            />
                        </Grid>
                        <Grid size={12}>
                            <Stack direction="row" columnGap={1} style={{ justifyContent: 'end' }}>
                                <Button
                                    type="submit"
                                    size="small"
                                    startIcon={<SaveIcon />}
                                    color="primary"
                                    variant="contained"
                                    disableElevation
                                >
                                    {t('Save')}
                                </Button>
                                <Button
                                    type="button"
                                    startIcon={<CloseIcon />}
                                    color="error"
                                    variant="contained"
                                    size="small"
                                    onClick={handleDialogClose}
                                    disableElevation
                                >
                                    {t('Close')}
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                )}

                {isManageDialog && (
                    <Grid container rowGap={2}>
                        <Grid size={12}>
                            <DataGridPremium
                                sx={{
                                    "& .MuiTablePagination-selectLabel": {
                                        marginTop: 2
                                    },
                                    "& .MuiTablePagination-displayedRows": {
                                        marginTop: 2
                                    },
                                    "& .MuiDataGrid-columnHeader .MuiInputLabel-shrink": {
                                        display: "none"
                                    }
                                }}
                                className="pagination-fix"
                                onCellClick={onCellClick}
                                columns={gridColumns}
                                pageSizeOptions={pageSizeOptions}
                                pagination
                                rowCount={nonDefaultPreferences.length}
                                rows={nonDefaultPreferences}
                                getRowId={(row) => row['GridPreferenceId']}
                                slots={{
                                    headerFilterMenu: false
                                }}
                                density="compact"
                                disableDensitySelector={true}
                                apiRef={apiRef}
                                disableAggregation={true}
                                disableRowGrouping={true}
                                disableRowSelectionOnClick={true}
                                autoHeight
                            />
                        </Grid>
                        <Grid size={12}>
                            <Stack direction="row" columnGap={1} style={{ justifyContent: 'end' }}>
                                <Button
                                    type="button"
                                    startIcon={<CloseIcon />}
                                    color="error"
                                    variant="contained"
                                    size="small"
                                    onClick={handleDialogClose}
                                    disableElevation
                                >
                                    {t('Close')}
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                )}
            </DialogComponent>
            <DialogComponent
                open={openPreferenceExistsModal}
                onConfirm={() => setOpenPreferenceExistsModal(false)}
                title=""
                okText={t('Ok')}
                cancelText=""
            >
                "{formik.values.prefName.trim()}": {t('name already in use, please use another name.')}
            </DialogComponent>
            <DialogComponent
                open={!!openConfirmDeleteDialog.preferenceName}
                onConfirm={deletePreference}
                onCancel={() => setOpenConfirmDeleteDialog({})}
                title={t('Confirm delete')}
                yesNo={true}
            >
                {t('Are you sure you wish to delete')} "{openConfirmDeleteDialog.preferenceName}"?
            </DialogComponent>
        </Box>
    );
};


export default GridPreferences;
import React, { useMemo, useState } from 'react';
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
import { useStateContext, useRouter } from '../useRouter/StateProvider';
import actionsStateProvider from '../useRouter/actions';
import { DialogComponent } from '../Dialog';

const actionTypes = {
    Edit: "Edit",
    Delete: "Delete"
};

const DIALOG_TYPES = {
    ADD: "Add",
    EDIT: "Modify",
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

const GridPreferences = ({ preferenceName, gridRef }) => {
    const { stateData, dispatchData, removeCurrentPreferenceName, getAllSavedPreferences } = useStateContext();
    const { navigate } = useRouter();
    const apiRef = useGridApiRef();
    const snackbar = useSnackbar();
    const { t } = useTranslation();
    const [dialogState, setDialogState] = useState(DIALOG_TYPES.NONE);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [openPreferenceExistsModal, setOpenPreferenceExistsModal] = useState(false);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState({});
    const { Username } = stateData?.getUserData ? stateData.getUserData : {};
    const preferences = stateData?.preferences || [];
    const currentPreference = stateData?.currentPreference;
    const preferenceApi = stateData?.gridSettings?.permissions?.preferenceApi;
    const defaultPreferenceEnums = stateData?.gridSettings?.permissions?.defaultPreferenceEnums;

    // Filter out the default preference (prefId === 0) for the management grid
    const nonDefaultPreferences = useMemo(() => 
        preferences.filter(pref => pref.prefId !== 0), 
        [preferences]
    );

    const validationSchema = useMemo(() => {
        const schema = yup.object({
            prefName: yup
                .string()
                .trim(true)
                .required('Preference Name is Required')
                .max(20, 'Maximum Length is 20'),
            prefDesc: yup.string().max(100, `Description maximum length is 100`)
        });
        return schema;
    }, []);

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await savePreference(values);
        },
        mode: "onBlur"
    });

    const handleOpen = (event) => {
        setMenuAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setMenuAnchorEl(null);
    };

    const handleDialogClose = () => {
        setDialogState(DIALOG_TYPES.NONE);
        handleClose();
    };

    const savePreference = async (values) => {
        const presetName = values.prefName.trim();
        const preferenceAlreadyExists = preferences.findIndex(ele => ele.prefName === presetName);
        
        if (preferenceAlreadyExists > -1 && (dialogState === DIALOG_TYPES.ADD || preferences[preferenceAlreadyExists].prefId !== values.prefId)) {
            setOpenPreferenceExistsModal(true);
            return;
        }

        // Use MUI's exportState to capture current grid state
        const gridState = gridRef.current.exportState();
        
        const params = {
            action: 'save',
            id: preferenceName,
            prefName: presetName,
            prefDesc: values.prefDesc,
            prefValue: gridState,
            isDefault: values.isDefault
        };
        
        const response = await request({ url: preferenceApi, params, history: navigate, dispatchData, dataParser: DATA_PARSERS.json });
        
        if (response === true || response?.success === true) {
            const action = dialogState === DIALOG_TYPES.ADD ? "Added" : "Saved";
            snackbar.showMessage(t(`Preference ${action} Successfully.`));
            handleDialogClose();
            getAllSavedPreferences({ preferenceName, Username, history: navigate, dispatchData, preferenceApi, defaultPreferenceEnums });
            return;
        }

        snackbar.showMessage(t(response.message || 'An error occurred while saving the preference.'));
    };

    const applyPreference = async (prefId) => {
        let gridState;
        let newPreferenceName = 'Default';
        
        if (prefId === 0) {
            gridState = defaultPreferenceEnums[newPreferenceName] || null;
        } else {
            const params = {
                action: 'load',
                id: preferenceName,
                Username,
                prefId
            };
            const response = await request({ url: preferenceApi, params, history: navigate, dispatchData, dataParser: DATA_PARSERS.json });
            
            if (response?.prefValue) {
                try {
                    gridState = typeof response.prefValue === 'string' ? JSON.parse(response.prefValue) : response.prefValue;
                } catch (error) {
                    snackbar.showMessage(t('Failed to parse preference data.'));
                    return;
                }
            }

            if (response?.prefName) {
                newPreferenceName = response.prefName;
            }
        }

        if (!gridState) {
            snackbar.showMessage(t('Failed to load preference.'));
            return;
        }

        // Use MUI's restoreState to apply the grid state
        gridRef.current.restoreState(gridState);
        
        dispatchData({ type: actionsStateProvider.SET_CURRENT_PREFERENCE_NAME, payload: newPreferenceName });
    };
    const deletePreference = async () => {
        const { prefId, preferenceName: currentPrefname } = openConfirmDeleteDialog;

        const params = {
            action: 'delete',
            id: currentPrefname,
            Username,
            prefIdArray: prefId
        };
        const response = await request({ url: preferenceApi, params, history: navigate, dispatchData, dataParser: DATA_PARSERS.json });
        
        if (response === true || response?.success === true) {
            if (currentPrefname === currentPreference) {
                removeCurrentPreferenceName({ dispatchData });
            }
            snackbar.showMessage(t('Preference Deleted Successfully.'));
            getAllSavedPreferences({ preferenceName: newPreferenceName, history: navigate, dispatchData, Username, preferenceApi, defaultPreferenceEnums });
            setOpenConfirmDeleteDialog({});
            return;
        }
            
        snackbar.showMessage(t(response?.message || 'An error occurred while deleting the preference.'));
    };

    const onCellClick = async (cellParams) => {
        const action = cellParams.field === 'editAction' ? actionTypes.Edit : cellParams.field === 'deleteAction' ? actionTypes.Delete : null;
        if (cellParams.id === 0 && action) {
            const actionText = action === actionTypes.Edit ? 'Edited' : 'Deleted';
            snackbar.showMessage(t(`Default preference cannot be ${actionText}`));
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

    const isManageDialog = dialogState === DIALOG_TYPES.MANAGE;
    const isFormDialog = dialogState === DIALOG_TYPES.ADD || dialogState === DIALOG_TYPES.EDIT;

    const openDialog = (type) => {
        setDialogState(type);
        handleClose();
        if (type === DIALOG_TYPES.ADD) {
            formik.resetForm();
        }
    };
    
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
                <MenuItem component={ListItemButton} dense divider={preferences?.length > 0} onClick={() => openDialog(DIALOG_TYPES.MANAGE)}>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    {t('Manage Preferences')}
                </MenuItem>

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
                            <ListItemText primary={t(prefName)} />
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
                "{formik.values.prefName.trim()}" {t('name already in use, please use another name.')}
            </DialogComponent>
            <DialogComponent
                open={!!openConfirmDeleteDialog.preferenceName}
                onConfirm={deletePreference}
                onCancel={() => setOpenConfirmDeleteDialog({})}
                title={t('Confirm delete')}
                yesNo={true}
            >
                {t('Are you sure you wish to delete')} "{openConfirmDeleteDialog.preferenceName}"
            </DialogComponent>
        </Box>
    );
};


export default GridPreferences;
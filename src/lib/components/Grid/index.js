import {
    DataGridPremium,
    getGridDateOperators,
    GRID_CHECKBOX_SELECTION_COL_DEF,
    getGridStringOperators,
    getGridBooleanOperators,
    GridActionsCellItem,
    useGridApiRef,
    useGridApiContext,
    useGridSelector,
    gridRowSelectionStateSelector
} from '@mui/x-data-grid-premium';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyIcon from '@mui/icons-material/FileCopy';
import ArticleIcon from '@mui/icons-material/Article';
import EditIcon from '@mui/icons-material/Edit';
import { useMemo, useEffect, memo, useRef, useState, useCallback } from 'react';
import { useSnackbar } from '../SnackBar/index';
import { DialogComponent } from '../Dialog/index';
import { getList, getRecord, deleteRecord, saveRecord } from './crud-helper';
import { Footer } from './footer';
import template from './template';
import { Tooltip, Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PageTitle from '../PageTitle';
import { useStateContext, useRouter } from '../useRouter/StateProvider';
import LocalizedDatePicker from './LocalizedDatePicker';
import actionsStateProvider from '../useRouter/actions';
import CustomDropdownMenu from './CustomDropdownMenu';
import CustomToolbar from './CustomToolbar';
import { getPermissions } from '../utils';
import HistoryIcon from '@mui/icons-material/History';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Checkbox from '@mui/material/Checkbox';
import { useTranslation } from 'react-i18next';
import { convertDefaultSort, areEqual, getDefaultOperator } from './helper';
import { styled } from '@mui/material/styles';

const defaultPageSize = 50;
const sortRegex = /(\w+)( ASC| DESC)?/i;
const recordCounts = 60000;
const actionTypes = {
    Copy: "Copy",
    Edit: "Edit",
    Delete: "Delete",
    History: "History",
    Download: "Download"
};
const iconMapper = {
    'article': <ArticleIcon />,
    'edit': <EditIcon />,
    'copy': <CopyIcon />,
    'delete': <DeleteIcon />,
    'history': <HistoryIcon />,
    'download': <FileDownloadIcon />,
};

const constants = {
    gridFilterModel: { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' },
    permissions: { edit: true, add: true, export: true, delete: true, showColumnsOrder: true, filter: true },
    client: 'client',
    server: 'server',
    object: 'object',
    startDate: 'startDate',
    endDate: 'endDate',
    oneToMany: 'oneToMany',
    lookup: 'lookup',
    Number: 'number',
    string: 'string',
    boolean: 'boolean',
    right: 'right',
    left: 'left',
    dateTime: 'dateTime',
    actions: 'actions',
    function: 'function',
    pageSizeOptions: [5, 10, 20, 50, 100],
    defaultActionWidth: 50
};
const auditColumnMappings = [
    { key: 'addCreatedOnColumn', field: 'CreatedOn', type: 'dateTime', header: 'Created On' },
    { key: 'addCreatedByColumn', field: 'CreatedByUser', type: 'string', header: 'Created By' },
    { key: 'addModifiedOnColumn', field: 'ModifiedOn', type: 'dateTime', header: 'Modified On' },
    { key: 'addModifiedByColumn', field: 'ModifiedByUser', type: 'string', header: 'Modified By' }
];
const booleanIconRenderer = (params) => {
    if (params.value) {
        return <CheckIcon style={{ color: 'green' }} />;
    } else {
        return <CloseIcon style={{ color: 'gray' }} />;
    }
};

const DeleteContentText = styled('span')({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
});

const CustomCheckBox = ({ params, handleSelectRow, idProperty }) => {
    const apiRef = useGridApiContext();
    const rowId = params.row[idProperty];
    // useGridSelector subscribes to state changes and triggers re-render when selection updates
    const selectionModel = useGridSelector(apiRef, gridRowSelectionStateSelector);
    const isChecked = selectionModel?.ids?.has(rowId) ?? false;

    const handleCheckboxClick = (event) => {
        event.stopPropagation();
        handleSelectRow({ row: params.row });
    };

    return (
        <Checkbox
            onClick={handleCheckboxClick}
            checked={isChecked}
            color="primary"
            value={rowId}
            inputProps={{ 'aria-label': 'checkbox' }}
        />
    );
};

const GridBase = memo(({
    model,
    columns,
    api,
    defaultSort,
    setActiveRecord,
    parentFilters,
    parent,
    where,
    title,
    showPageTitle,
    permissions,
    selected,
    assigned,
    available,
    disableCellRedirect = false,
    onAssignChange,
    customStyle,
    onCellClick,
    showRowsSelected,
    showFullScreenLoader,
    customFilters,
    onRowDoubleClick,
    onRowClick = () => { },
    gridStyle,
    reRenderKey,
    additionalFilters,
    onCellDoubleClickOverride,
    onAddOverride,
    dynamicColumns,
    toolbarItems,
    readOnly = false,
    onListParamsChange,
    apiRef: propsApiRef,
    baseFilters,
    ...props
}) => {
    const [paginationModel, setPaginationModel] = useState({ pageSize: defaultPageSize, page: 0 });
    const [data, setData] = useState({ recordCount: 0, records: null, lookups: {} });
    const forAssignment = !!onAssignChange;
    const rowsSelected = showRowsSelected;
    // MUI v8: rowSelectionModel uses object format with type ('include'/'exclude') and ids (Set)
    const [rowSelectionModel, setRowSelectionModel] = useState({
        type: 'include',
        ids: new Set()
    });
    const [isDeleting, setIsDeleting] = useState(false);
    const [record, setRecord] = useState(null);
    const visibilityModel = { CreatedOn: false, CreatedByUser: false, ...model.columnVisibilityModel };
    const [showAddConfirmation, setShowAddConfirmation] = useState(false);
    const snackbar = useSnackbar();
    const paginationMode = model.paginationMode === constants.client ? constants.client : constants.server;
    const { t: translate, i18n } = useTranslation();
    const tOpts = useMemo(() => ({ t: translate, i18n }), [translate, i18n]);
    const [errorMessage, setErrorMessage] = useState('');
    const [sortModel, setSortModel] = useState(convertDefaultSort(defaultSort || model.defaultSort, constants, sortRegex));
    const initialFilterModel = { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' };
    if (model.defaultFilters) {
        initialFilterModel.items = [];
        model.defaultFilters.forEach((ele) => {
            initialFilterModel.items.push(ele);
        });
    }
    const [filterModel, setFilterModel] = useState({ ...initialFilterModel });
    const { navigate, getParams, useParams, pathname } = useRouter();
    const { id: idWithOptions } = useParams() || getParams;
    const id = idWithOptions?.split('-')[0];
    const apiRef = propsApiRef || useGridApiRef();
    const { idProperty = "id", showHeaderFilters = true, disableRowSelectionOnClick = true, hideTopFilters = true, updatePageTitle = true, isElasticScreen = false, navigateBack = false, selectionApi = {}, debounceTimeOut = 300 } = model;
    const isReadOnly = model.readOnly === true || readOnly;
    const isDoubleClicked = model.allowDoubleClick === false;
    const dataRef = useRef(data);
    const showAddIcon = model.showAddIcon === true;
    const toLink = model.columns.filter(({ link }) => Boolean(link)).map(item => item.link);
    const { stateData, dispatchData, formatDate, getApiEndpoint, buildUrl, isLoading, setPageTitle } = useStateContext();
    const { timeZone } = stateData;
    const effectivePermissions = useMemo(() => ({ ...constants.permissions, ...model.permissions, ...permissions }), [model.permissions, permissions]);
    const emptyIsAnyOfOperatorFilters = ["isEmpty", "isNotEmpty", "isAnyOf"];
    const userData = stateData.userData || {};
    const documentField = model.columns.find(ele => ele.type === 'fileUpload')?.field || "";
    const userDefinedPermissions = { add: effectivePermissions.add, edit: effectivePermissions.edit, delete: effectivePermissions.delete };
    const { canAdd, canEdit, canDelete } = getPermissions({ userData, model, userDefinedPermissions });
    const tTranslate = model.tTranslate ?? ((key) => key);
    const { addUrlParamKey, searchParamKey, hideBreadcrumb = false, tableName, showHistory = true, hideBreadcrumbInGrid = false, breadcrumbColor, disablePivoting = false, columnHeaderHeight = 70 } = model;
    const gridTitle = model.gridTitle || model.title;
    const preferenceKey = getApiEndpoint("GridPreferenceManager") ? (model.preferenceId || model.module?.preferenceId) : null;
    const searchParams = new URLSearchParams(window.location.search);
    const [currentPreference, setCurrentPreference] = useState(null);
    const [preferencesReady, setPreferencesReady] = useState(!preferenceKey);
    const backendApi = api || model.api;
    // State for single expanded detail panel row
    const [rowPanelId, setRowPanelId] = useState(null);
    const detailPanelExpandedRowIds = useMemo(() => new Set(rowPanelId ? [rowPanelId] : []), [rowPanelId]);
    const enableRowDetailPanel = typeof model.getDetailPanelContent === 'function';

    useEffect(() => {
        if (!apiRef.current) return;
        // Store preferenceKey on apiRef for GridPreferences to access
        apiRef.current.prefKey = preferenceKey;
    }, [apiRef, preferenceKey]);

    // Callback when preferences are loaded or changed
    const onPreferenceChange = useCallback((preferenceName) => {
        setCurrentPreference(preferenceName);
        setPreferencesReady(true);
    }, []);

    const baseDataFromParams = searchParams.has('baseData') && searchParams.get('baseData');
    const baseSaveData = useMemo(() => {
        if (baseDataFromParams) {
            try {
                const parsedData = JSON.parse(baseDataFromParams);
                if (typeof parsedData === constants.object && parsedData !== null) {
                    return parsedData;
                }
            } catch (error) {
                console.error('Failed to parse baseData from URL:', error);
            }
        }
        return {};
    }, [baseDataFromParams]);

    const handleSelectRow = useCallback(({ row }) => {
        const rowId = row[idProperty];
        setRowSelectionModel(prevModel => {
            const newIds = new Set(prevModel?.ids || []);
            if (newIds.has(rowId)) {
                newIds.delete(rowId);
            } else {
                newIds.add(rowId);
            }
            return { type: 'include', ids: newIds };
        });
    }, [idProperty]);

    const gridColumnTypes = {
        "radio": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "date": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: true, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "date", label: tTranslate('Value', tOpts) })
        },
        "dateTime": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: false, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ columnType: "datetime", label: tTranslate('Value', tOpts) })
        },
        "dateTimeLocal": {
            "valueFormatter": (value) => (
                formatDate({ value, useSystemFormat: false, showOnlyDate: false, state: stateData.dateTime, timeZone })
            ),
            "filterOperators": LocalizedDatePicker({ type: "dateTimeLocal", convert: true })
        },
        "boolean": {
            renderCell: booleanIconRenderer
        },
        "select": {
            "type": "singleSelect",
            "valueOptions": "lookup"
        },
        "selection": {
            renderCell: (params) => <CustomCheckBox params={params} handleSelectRow={handleSelectRow} idProperty={idProperty} />
        }
    };

    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    useEffect(() => {
        if (!customFilters || !Object.keys(customFilters).length) return;
        if (customFilters.clear) {
            setFilterModel({ items: [], logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
            return;
        }
        const items = Object.entries(customFilters).reduce((acc, [key, value]) => {
            if (key === constants.startDate || key === constants.endDate) {
                acc.push(value);
            } else if (key in customFilters) {
                acc.push({ field: key, value, operator: "equals", type: "string" });
            }
            return acc;
        }, []);
        setFilterModel({ items, logicOperator: "and", quickFilterValues: [], quickFilterLogicOperator: "and" });
    }, [customFilters]);

    const lookupOptions = useCallback(({ field, lookupMap: lookupMapParam }) => {
        const lookupData = dataRef.current.lookups || {};
        const map = lookupMapParam || {};
        return lookupData[map[field]?.lookup] || [];
    }, []);

    useEffect(() => {
        if (props.isChildGrid || !hideTopFilters) {
            return;
        }
        dispatchData({
            type: actionsStateProvider.PASS_FILTERS_TO_HEADER, payload: {
                filterButton: null,
                hidden: { search: true, operation: true, export: true, print: true, filter: true }
            }
        });
    }, []);

    const createAction = useCallback(
        ({ key, title, icon, color = "primary", disabled, otherProps }) => (
            <GridActionsCellItem
                key={key}
                icon={<Tooltip title={title}>{iconMapper[icon] || icon}</Tooltip>}
                data-action={key}
                label={title}
                color={color}
                disabled={disabled}
                {...otherProps}
            />
        ),
        []
    );
    const { customActions = [] } = model;
    const actionConfig = useMemo(() => {
        const actions = [];

        if (!forAssignment && !isReadOnly) {
            actions.push(
                {
                    key: actionTypes.Edit,
                    title: "Edit",
                    icon: 'edit',
                    show: !!canEdit,
                    disabled: row => row.canEdit === false
                },
                {
                    key: actionTypes.Copy,
                    title: "Copy",
                    icon: 'copy',
                    show: !!effectivePermissions.copy,
                },
                {
                    key: actionTypes.Delete,
                    title: "Delete",
                    icon: 'delete',
                    color: "error",
                    show: !!canDelete,
                },
                {
                    key: actionTypes.History,
                    title: "History",
                    icon: 'history',
                    show: !!showHistory,
                },
                ...customActions
            );
        }

        actions.push({
            key: actionTypes.Download,
            title: "Download document",
            icon: 'download',
            show: documentField.length > 0,
        });

        return actions.filter(({ show }) => show !== false);
    }, [
        forAssignment,
        isReadOnly,
        canEdit,
        canDelete,
        showHistory,
        effectivePermissions.copy,
        documentField.length,
        customActions
    ]);

    const getActions = useCallback(
        ({ row }) =>
            actionConfig
                .map(({ key, title, icon, color, disabled, show, action, ...otherProps }) =>
                    createAction({
                        key,
                        title: title || action, // Fallback to 'action' for backward compatibility if 'title' is not provided
                        icon,
                        color,
                        disabled: disabled?.(row),
                        otherProps
                    })
                ),
        [actionConfig, createAction]
    );
    const { gridColumns, pinnedColumns, lookupMap } = useMemo(() => {
        let baseColumnList = columns || model.gridColumns || model.columns;
        if (dynamicColumns) {
            baseColumnList = [...dynamicColumns, ...baseColumnList];
        }
        const pinnedColumns = { left: [GRID_CHECKBOX_SELECTION_COL_DEF.field], right: [] };
        const finalColumns = [];
        const lookupMap = {};
        const updatedColumnType = { ...gridColumnTypes, ...model.gridColumnTypes };
        for (const column of baseColumnList) {
            if (column.gridLabel === null || (parent && column.lookup === parent) || (column.type === constants.oneToMany && column.countInList === false)) continue;
            const overrides = {};
            if (column.type === constants.oneToMany) {
                overrides.type = 'number';
                overrides.field = column.field.replace(/s$/, 'Count');
            }
 
            if (updatedColumnType[column.type]) {
                Object.assign(overrides, updatedColumnType[column.type]);
            }
            // Common filter operator pattern
            if (overrides.valueOptions === constants.lookup || column.type === constants.boolean) {
                let operators = [];

                if (overrides.valueOptions === constants.lookup) {
                    overrides.valueOptions = (params) => lookupOptions({ ...params, lookupMap });
                    const lookupFilters = [...getGridDateOperators(), ...getGridStringOperators()]
                        .filter((op) => ['is', 'not', 'isAnyOf'].includes(op.value));
                    operators = lookupFilters;
                }

                if (column.type === constants.boolean) {
                    operators = getGridBooleanOperators();
                }

                overrides.filterOperators = operators.map((operator) => ({
                    ...operator,
                    InputComponent: operator.InputComponent
                        ? (params) => (
                            <CustomDropdownMenu
                                column={{
                                    ...column,
                                    ...(column.type === constants.boolean
                                        ? {
                                            customLookup: [
                                                { value: true, label: 'Yes' },
                                                { value: false, label: 'No' }
                                            ]
                                        }
                                        : {}),
                                    dataRef
                                }}
                                {...params}
                                autoHighlight
                            />
                        )
                        : undefined
                }));
            }
            if (column.linkTo || column.link) {
                overrides.cellClassName = 'mui-grid-linkColumn';
            }
            const headerName = tTranslate(column.gridLabel || column.label, tOpts);
            finalColumns.push({ ...column, ...overrides, headerName, description: headerName });
            if (column.pinned) {
                pinnedColumns[column.pinned === constants.right ? constants.right : constants.left].push(column.field);
            }
            lookupMap[column.field] = column;
        }
        let auditColumns = model.standard;
        if (auditColumns === true) {
            auditColumns = { addCreatedOnColumn: true, addCreatedByColumn: true, addModifiedOnColumn: true, addModifiedByColumn: true };
        }
        if (auditColumns && typeof auditColumns === constants.object) {
            auditColumnMappings.forEach(({ key, field, type, header }) => {
                if (auditColumns[key] === true) {
                    const column = { field, type, headerName: tTranslate(header, tOpts), width: 200 };
                    if (type === constants.dateTime) {
                        column.filterOperators = LocalizedDatePicker({ columnType: 'date' });
                        column.valueFormatter = gridColumnTypes.dateTime.valueFormatter;
                        column.keepLocal = true;
                    }
                    finalColumns.push(column);
                }
            });
        }
        if (actionConfig.length) {
            finalColumns.push({
                field: 'actions',
                type: 'actions',
                width: (model.actionWidth ?? constants.defaultActionWidth) * actionConfig.length,
                hidable: false,
                getActions,
                headerName: tTranslate('Actions', tOpts),
            });

            pinnedColumns.right.push('actions');
        }
        return { gridColumns: finalColumns, pinnedColumns, lookupMap };
    }, [columns, model, parent, permissions, forAssignment, dynamicColumns, translate]);

    // Initialize toolbar filters with default values
    const hasInitializedRef = useRef(false);
    useEffect(() => {
        // Only run once on initial mount
        if (hasInitializedRef.current) return;
        const toolbarFilterColumns = gridColumns?.filter(col => col.toolbarFilter?.defaultFilterValue !== undefined) || [];
        if (toolbarFilterColumns.length === 0) return;

        // Check if any toolbar filters already exist in filterModel
        const hasExistingToolbarFilters = filterModel.items.some(item => 
            toolbarFilterColumns.some(col => col.field === item.field)
        );
        if (hasExistingToolbarFilters) {
            hasInitializedRef.current = true;
            return;
        }

        const toolbarFilters = toolbarFilterColumns.map(col => ({
            field: col.field,
            operator: getDefaultOperator(col.type, col.toolbarFilter?.defaultOperator),
            value: col.toolbarFilter.defaultFilterValue,
            type: col.type
        }));

        setFilterModel(prev => ({
            ...prev,
            items: [...prev.items, ...toolbarFilters]
        }));
        hasInitializedRef.current = true;
    }, [gridColumns]);


    const fetchData = (action = "list", extraParams = {}, contentType, columns, isPivotExport, isElasticExport) => {
        const { pageSize, page } = paginationModel;

        const baseUrl =  buildUrl(model.controllerType, isPivotExport ? model.pivotApi : backendApi);

        if (assigned || available) {
            extraParams[assigned ? "include" : "exclude"] = Array.isArray(selected) ? selected.join(",") : selected;
        }

        const filters = { ...filterModel };
        const finalBaseFilters = Array.isArray(baseFilters) ? [...baseFilters] : [];
        if (model.joinColumn && id) {
            finalBaseFilters.push({ field: model.joinColumn, operator: "is", type: "number", value: Number(id) });
        }

        if (additionalFilters) {
            filters.items = [...(filters.items || []), ...additionalFilters];
        }
        extraParams = { ...extraParams, ...props.extraParams }; // Merge any custom params passed via component props into extraParams
        const isValidFilters = !filters.items.length || filters.items.every(item => "value" in item && item.value !== undefined);
        if (!isValidFilters) return;

        const listParams = {
            action,
            page: !contentType ? page : 0,
            pageSize: !contentType ? pageSize : 1000000,
            sortModel,
            filterModel: filters,
            controllerType: model.controllerType,
            api: baseUrl,
            gridColumns,
            model,
            parentFilters,
            extraParams,
            contentType,
            columns,
            template: isPivotExport ? model.exportTemplate : null,
            configFileName: isPivotExport ? model.configFileName : null,
            baseFilters: finalBaseFilters,
            isElasticExport
        };
        if (typeof onListParamsChange === 'function') {
            onListParamsChange(listParams);
        }
        apiRef.current.listParams = listParams;
        return getList({
            ...listParams,
            setError: snackbar.showError,
            setData,
            showFullScreenLoader,
            history: navigate,
        });
    };

    const openForm = useCallback(({ id, record = {}, mode }) => {
        if (setActiveRecord) {
            getRecord({ id, api: backendApi, setActiveRecord, model, parentFilters, where, setError: snackbar.showError });
            return;
        }
        let path = pathname;
        if (!path.endsWith("/")) {
            path += "/";
        }
        if (mode === "copy") {
            path += "0-" + id;
        } else {
            path += id;
        }
        if (addUrlParamKey) {
            searchParams.set(addUrlParamKey, record[addUrlParamKey]);
            path += `?${searchParams.toString()}`;
        }
        navigate(path);
    }, [setActiveRecord, backendApi, model, parentFilters, where, pathname, addUrlParamKey, searchParams, navigate, dispatchData, getRecord]);

    const handleDownload = useCallback(({ documentLink }) => {
        if (!documentLink) return;
        window.open(documentLink, '_blank');
    }, []);
    const onCellClickHandler = useCallback(async (cellParams, event, details) => {
        let action = cellParams.field === model.linkColumn ? actionTypes.Edit : null;
        if (!action && cellParams.field === constants.actions) {
            action = details?.action;
            if (!action) {
                const el = event.target.closest('button');
                if (el) {
                    action = el.dataset.action;
                }
            }
        }
        const { row: record } = cellParams;
        if (!isReadOnly) {
            if (onCellClick) {
                const result = await onCellClick({ cellParams, event, details });
                if (typeof result !== constants.boolean) {
                    return;
                }
            }
            const columnConfig = lookupMap[cellParams.field] || {};
            if (columnConfig.linkTo) {
                navigate({
                    pathname: template.replaceTags(columnConfig.linkTo, record)
                });
                return;
            }
            switch (action) {
                case actionTypes.Edit: {
                    if (model.getDetailPanelContent) {
                        const rowId = record[idProperty];
                        setRowPanelId(prevId => prevId === rowId ? null : rowId);
                        return;
                    } else {
                        return openForm({ id: record[idProperty], record });
                    }
                }
                case actionTypes.Copy:
                    return openForm({ id: record[idProperty], mode: 'copy' });
                case actionTypes.Delete:
                    setIsDeleting(true);
                    setRecord({ name: record[model.linkColumn], id: record[idProperty] });
                    break;
                case actionTypes.History:
                    // navigates to history screen, specifying the tablename, id of record and breadcrumb to render title on history screen.
                    return navigate(`${getApiEndpoint('history')}?tableName=${tableName}&id=${record[idProperty]}&breadCrumb=${searchParamKey ? searchParams.get(searchParamKey) : gridTitle}`);
                default:
                    // Check if action matches any customAction and call its onClick if found
                    const foundCustomAction = customActions.find(ca => ca.action === action && typeof ca.onClick === constants.function);
                    if (foundCustomAction) {
                        foundCustomAction.onClick({ row: record, navigate });
                        return;
                    }
                    break;
            }
        }
        if (action === actionTypes.Download) {
            handleDownload({ documentLink: record[documentField] });
        }
        if (!toLink.length) {
            return;
        }
        const { row } = cellParams;
        const columnConfig = lookupMap[cellParams.field] || {};
        const historyObject = {
            pathname: template.replaceTags(columnConfig.linkTo, row)
        };
        if (model.addRecordToState) {
            historyObject.state = row;
        }
        navigate(historyObject);
    }, [isReadOnly, onCellClick, lookupMap, model, idProperty, documentField, navigate, toLink, customActions, tableName, searchParamKey, searchParams, gridTitle, getApiEndpoint, handleDownload, openForm]);

    const handleDelete = useCallback(async () => {
        const baseUrl = buildUrl(model.controllerType, backendApi);
        const result = await deleteRecord({ id: record.id, api: baseUrl, setError: snackbar.showError, setErrorMessage, model });
        if (result === true) {
            setIsDeleting(false);
            snackbar.showMessage('Record Deleted Successfully.');
            fetchData();
        } else {
            setIsDeleting(false);
        }
    }, [model.controllerType, backendApi, record?.id, snackbar, setErrorMessage, model, fetchData]);

    const clearError = useCallback(() => {
        setErrorMessage(null);
        setIsDeleting(false);
    }, []);

    const processRowUpdate = useCallback((updatedRow) => {
        if (typeof props.processRowUpdate === "function") {
            props.processRowUpdate(updatedRow, data);
        }
        return updatedRow;
    }, [props.processRowUpdate, data]);

    const onCellDoubleClick = useCallback((event) => {
        if (event.row.canEdit === false) {
            return;
        }
        const { row: record } = event;
        if (typeof onCellDoubleClickOverride === constants.function) {
            onCellDoubleClickOverride(event);
            return;
        }
        if (!isReadOnly && !isDoubleClicked && !disableCellRedirect) {
            openForm({ id: record[idProperty], record });
        }
        if (isReadOnly && model.rowRedirectLink) {
            const historyObject = {
                pathname: template.replaceTags(model.rowRedirectLink, record)
            };
            if (model.addRecordToState) {
                historyObject.state = record;
            }
            navigate(historyObject);
        }
        if (typeof onRowDoubleClick === constants.function) {
            onRowDoubleClick(event);
        }
    }, [onCellDoubleClickOverride, isReadOnly, isDoubleClicked, disableCellRedirect, openForm, idProperty, model.rowRedirectLink, model.addRecordToState, navigate, onRowDoubleClick, template]);

    const handleAddRecords = useCallback(async () => {
        if (rowSelectionModel.ids.size < 1) {
            snackbar.showError("Please select at least one record to proceed");
            return;
        }

        const selectedIds = Array.from(rowSelectionModel.ids);
        const recordMap = new Map((data.records || []).map(record => [record[idProperty], record]));
        let selectedRecords = selectedIds.map(id => ({ ...baseSaveData, ...recordMap.get(id) }));

        // If selectionUpdateKeys is defined, filter each record to only those keys
        if (Array.isArray(model.selectionUpdateKeys) && model.selectionUpdateKeys.length) {
            selectedRecords = selectedRecords.map(item =>
                Object.fromEntries(model.selectionUpdateKeys.map(key => [key, item[key]]))
            );
        }

        const baseUrl =  buildUrl(model.controllerType, selectionApi || backendApi);
        try {
            const result = await saveRecord({
                id: 0,
                api: `${baseUrl}/updateMany`,
                values: { items: selectedRecords },
                setError: snackbar.showError,
                model
            });

            if (result) {
                fetchData();
                const message = result.info ? result.info : "Record Added Successfully.";
                snackbar.showMessage(message);
            }
        } catch (err) {
            snackbar.showError(err.message || "An error occurred, please try again later.");
        } finally {
            setRowSelectionModel({
                type: 'include',
                ids: new Set()
            });
            setShowAddConfirmation(false);
        }
    }, [rowSelectionModel.ids, snackbar, data.records, idProperty, baseSaveData, model.selectionUpdateKeys, model.controllerType, selectionApi, backendApi, model, dispatchData, fetchData]);

    const onAdd = useCallback(() => {
        if (selectionApi.length > 0) {
            if (rowSelectionModel.ids.size > 0) {
                setShowAddConfirmation(true);
                return;
            }
            snackbar.showError(
                "Please select at least one record to proceed"
            );
            return;
        }
        if (typeof onAddOverride === constants.function) {
            onAddOverride();
        } else {
            openForm({ id: 0 });
        }
    }, [selectionApi, snackbar, onAddOverride, openForm, rowSelectionModel.ids.size]);

    const clearFilters = useCallback(() => {
        if (!filterModel?.items?.length) return;
        setFilterModel({ ...constants.gridFilterModel });
    }, [filterModel]);
    const updateAssignment = useCallback(({ unassign, assign }) => {
        const assignedValues = Array.isArray(selected) ? selected : (selected.length ? selected.split(',') : []);
        const finalValues = unassign ? assignedValues.filter(id => !unassign.includes(parseInt(id))) : [...assignedValues, ...assign];
        onAssignChange(typeof selected === constants.string ? finalValues.join(',') : finalValues);
    }, [selected, onAssignChange]);

    const onAssign = useCallback(() => {
        updateAssignment({ assign: Array.from(rowSelectionModel.ids) });
    }, [updateAssignment, rowSelectionModel.ids]);

    const onUnassign = useCallback(() => {
        updateAssignment({ unassign: Array.from(rowSelectionModel.ids) });
    }, [updateAssignment, rowSelectionModel.ids]);

    const selectAll = useCallback(() => {
        const records = data.records || [];
        const currentCount = rowSelectionModel.ids.size;
        if (currentCount === records.length) {
            // If all records are selected, deselect all
            setRowSelectionModel({
                type: 'include',
                ids: new Set()
            });
        } else {
            // Select all records
            const allIds = records.map(record => record[idProperty]);
            setRowSelectionModel({
                type: 'include',
                ids: new Set(allIds)
            });
        }
    }, [rowSelectionModel, data.records, idProperty]);

    const getGridRowId = useCallback((row) => row[idProperty], [idProperty]);
    const handleExport = useCallback((e) => {
        if (data?.recordCount > recordCounts) {
            snackbar.showMessage('Cannot export more than 60k records, please apply filters or reduce your results using filters');
            return;
        }
        const { orderedFields, columnVisibilityModel, lookup } = apiRef.current.state.columns;
        const isPivotExport = e.target.dataset.isPivotExport === 'true';
        const hiddenColumns = Object.keys(columnVisibilityModel).filter(key => columnVisibilityModel[key] === false);

        const nonExportColumns = new Set(gridColumns.filter(col => col.exportable === false).map(col => col.field));

        const visibleColumns = orderedFields.filter(
            field => !nonExportColumns.has(field) && !hiddenColumns.includes(field) && field !== '__check__' && field !== 'actions'
        );

        if (visibleColumns.length === 0) {
            snackbar.showMessage('You cannot export while all columns are hidden... please show at least 1 column before exporting');
            return;
        }

        const columns = {};
        visibleColumns.forEach(field => {
            const col = lookup[field];
            columns[field] = { field, width: col.width, headerName: col.headerName || col.field, type: col.type, keepLocal: col.keepLocal === true, isParsable: col.isParsable, lookup: col.lookup };
        });
        const action = (model?.formActions?.export || isPivotExport) ? (model?.formActions?.export || 'export') : undefined;
        fetchData(
            action,
            undefined,
            e.target.dataset.contentType,
            columns,
            isPivotExport,
            isElasticScreen
        );
    }, [data?.recordCount, apiRef, gridColumns, snackbar, fetchData, isElasticScreen]);

    useEffect(() => {
        if (!backendApi || !preferencesReady) return;
        fetchData();
    }, [paginationModel, model, assigned, available, selected, filterModel, id, additionalFilters, props.extraParams, sortModel, backendApi, gridColumns, parentFilters, isElasticScreen, preferencesReady, baseFilters]);

    useEffect(() => {
        if (props.isChildGrid || forAssignment || !updatePageTitle) {
            return;
        }
        setPageTitle({ icon: "", titleHeading: model.pageTitle || model.title, title: model.title });
        return () => {
            setPageTitle(null);
        };
    }, [setPageTitle, model.pageTitle, model.title]);

    const updateFilters = useCallback((e) => {
        const { items } = e;
        const updatedItems = items.map(item => {
            const { field, operator, type, value } = item;
            const column = gridColumns.find(col => col.field === field) || {};
            const isNumber = column.type === constants.Number;

            if (isNumber && value < 0) {
                return { ...item, value: null };
            }

            if ((emptyIsAnyOfOperatorFilters.includes(operator)) || (isNumber && !isNaN(value)) || ((!isNumber))) {
                const isKeywordField = isElasticScreen && gridColumns.filter(element => element.field === field)[0]?.isKeywordField;
                if (isKeywordField) {
                    item.filterField = `${item.field}.keyword`;
                }
                item.value = ['isEmpty', 'isNotEmpty'].includes(operator) ? null : value;
                return { ...item, type: column.type };
            }
            const updatedValue = isNumber ? null : value;
            return { field, operator, type, value: updatedValue };
        });
        e.items = updatedItems;
        setFilterModel(e);
    }, [gridColumns, constants.Number, emptyIsAnyOfOperatorFilters, isElasticScreen, setFilterModel]);

    const updateSort = useCallback((e) => {
        const sort = e.map((ele) => {
            const field = gridColumns.filter(element => element.field === ele.field)[0] || {};
            const isKeywordField = isElasticScreen && field.isKeywordField;
            const obj = { ...ele, filterField: isKeywordField ? `${ele.field}.keyword` : ele.field };
            if (field.dataIndex) {
                obj.filterField = field.dataIndex;
            }
            return obj;
        });
        setSortModel(sort);
    }, [gridColumns, isElasticScreen, setSortModel]);

    const pageTitle = title || model.gridTitle || model.title;
    const breadCrumbs = searchParamKey
        ? [{ text: searchParams.get(searchParamKey) || pageTitle }]
        : [{ text: pageTitle }];

    const handleDetailPanelExpanded = useCallback((ids) => {
        setRowPanelId(ids.size > 0 ? [...ids].pop() : null);
    }, []);

    const getDetailPanelContent = useCallback((params) => {
        if (typeof model.getDetailPanelContent === 'function') {
            return model.getDetailPanelContent({
                ...params,
                onRefresh: () => {
                    // Close the expanded panel and refresh data
                    setRowPanelId(null);
                    fetchData();
                }
            });
        }
        return null;
    }, [model.getDetailPanelContent, fetchData]);

    const localeText =
        useMemo(() => ({
            filterValueTrue: tTranslate('Yes', tOpts),
            filterValueFalse: tTranslate('No', tOpts),
            noRowsLabel: tTranslate('No data', tOpts),
            footerTotalRows: `${tTranslate('Total rows', tOpts)}:`,
            MuiTablePagination: {
                labelRowsPerPage: tTranslate('Rows per page', tOpts),
                labelDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate('of', tOpts)} ${count}`,
            },
            toolbarQuickFilterPlaceholder: tTranslate(model?.searchPlaceholder || 'Search...', tOpts),
            toolbarColumns: tTranslate('Columns', tOpts),
            toolbarFilters: tTranslate('Filters', tOpts),
            toolbarExport: tTranslate('Export', tOpts),
            filterPanelAddFilter: tTranslate('Add filter', tOpts),
            filterPanelRemoveAll: tTranslate('Remove all', tOpts),
            filterPanelDeleteIconLabel: tTranslate('Delete', tOpts),
            filterPanelColumns: tTranslate('Columns', tOpts),
            filterPanelOperator: tTranslate('Operator', tOpts),
            filterPanelValue: tTranslate('Value', tOpts),
            filterPanelInputLabel: tTranslate('Value', tOpts),
            filterPanelInputPlaceholder: tTranslate('Filter value', tOpts),
            columnMenuLabel: tTranslate('Menu', tOpts),
            columnMenuShowColumns: tTranslate('Show columns', tOpts),
            columnMenuManageColumns: tTranslate('Manage columns', tOpts),
            columnMenuFilter: tTranslate('Filter', tOpts),
            columnMenuHideColumn: tTranslate('Hide column', tOpts),
            columnMenuManagePivot: tTranslate('Manage pivot', tOpts),
            toolbarColumnsLabel: tTranslate('Select columns', tOpts),
            toolbarExportLabel: tTranslate('Export', tOpts),
            pivotDragToColumns: tTranslate('Drag here to pivot by', tOpts),
            pivotDragToRows: tTranslate('Drag here to group by', tOpts),
            pivotDragToValues: tTranslate('Drag here to create values', tOpts),
            pivotColumns: tTranslate('Pivot columns', tOpts),
            pivotRows: tTranslate('Row groups', tOpts),
            pivotValues: tTranslate('Values', tOpts),
            pivotMenuRows: tTranslate('Rows', tOpts),
            pivotMenuColumns: tTranslate('Columns', tOpts),
            pivotMenuValues: tTranslate('Values', tOpts),
            pivotToggleLabel: tTranslate('Pivot', tOpts),
            pivotSearchControlPlaceholder: tTranslate('Search pivot columns', tOpts),
            columnMenuUnsort: tTranslate('Unsort', tOpts),
            columnMenuSortAsc: tTranslate('Sort by ascending', tOpts),
            columnMenuSortDesc: tTranslate('Sort by descending', tOpts),
            columnMenuUnpin: tTranslate('Unpin', tOpts),
            columnsPanelTextFieldLabel: tTranslate('Find column', tOpts),
            columnsPanelTextFieldPlaceholder: tTranslate('Column title', tOpts),
            columnsPanelHideAllButton: tTranslate('Hide all', tOpts),
            columnsPanelShowAllButton: tTranslate('Show all', tOpts),
            pinToLeft: tTranslate('Pin to left', tOpts),
            pinToRight: tTranslate('Pin to right', tOpts),
            unpin: tTranslate('Unpin', tOpts),
            filterValueAny: tTranslate('any', tOpts),
            filterOperatorIs: tTranslate('is', tOpts),
            filterOperatorNot: tTranslate('is not', tOpts),
            filterOperatorIsAnyOf: tTranslate('is any of', tOpts),
            filterOperatorContains: tTranslate('contains', tOpts),
            filterOperatorDoesNotContain: tTranslate('does not contain', tOpts),
            filterOperatorEquals: tTranslate('equals', tOpts),
            filterOperatorDoesNotEqual: tTranslate('does not equal', tOpts),
            filterOperatorStartsWith: tTranslate('starts with', tOpts),
            filterOperatorEndsWith: tTranslate('ends with', tOpts),
            filterOperatorIsEmpty: tTranslate('is empty', tOpts),
            filterOperatorIsNotEmpty: tTranslate('is not empty', tOpts),
            filterOperatorAfter: tTranslate('is after', tOpts),
            filterOperatorOnOrAfter: tTranslate('is on or after', tOpts),
            filterOperatorBefore: tTranslate('is before', tOpts),
            filterOperatorOnOrBefore: tTranslate('is on or before', tOpts),
            toolbarFiltersTooltipHide: tTranslate('Hide filters', tOpts),
            toolbarFiltersTooltipShow: tTranslate('Show filters', tOpts),

            //filter textfield labels
            headerFilterOperatorContains: tTranslate('contains', tOpts),
            headerFilterOperatorEquals: tTranslate('equals', tOpts),
            headerFilterOperatorStartsWith: tTranslate('starts with', tOpts),
            headerFilterOperatorEndsWith: tTranslate('ends with', tOpts),
            headerFilterOperatorIsEmpty: tTranslate('is empty', tOpts),
            headerFilterOperatorIsNotEmpty: tTranslate('is not empty', tOpts),
            headerFilterOperatorAfter: tTranslate('is after', tOpts),
            headerFilterOperatorOnOrAfter: tTranslate('is on or after', tOpts),
            headerFilterOperatorBefore: tTranslate('is before', tOpts),
            headerFilterOperatorOnOrBefore: tTranslate('is on or before', tOpts),
            headerFilterOperatorIs: tTranslate('is', tOpts),
            'headerFilterOperator=': tTranslate('equals', tOpts),
            'headerFilterOperator!=': tTranslate('does not equal', tOpts),
            'headerFilterOperator>': tTranslate('greater than', tOpts),
            'headerFilterOperator>=': tTranslate('greater than or equal to', tOpts),
            'headerFilterOperator<': tTranslate('less than', tOpts),
            'headerFilterOperator<=': tTranslate('less than or equal to', tOpts),
            columnsManagementSearchTitle: tTranslate('Search', tOpts),
            columnsManagementNoColumns: tTranslate('No columns', tOpts),
            paginationRowsPerPage: tTranslate('Rows per page', tOpts),
            paginationDisplayedRows: ({ from, to, count }) => `${from}–${to} ${tTranslate('of', tOpts)} ${count}`,
            toolbarQuickFilterLabel: tTranslate('Search', tOpts),
            toolbarFiltersTooltipActive: (count) => {
                const key = count === 1 ? 'active filter' : 'active filters';
                return `${count} ${tTranslate(key, tOpts)}`;
            },
            columnHeaderSortIconLabel: tTranslate('Sort', tOpts),
            filterPanelOperatorAnd: tTranslate('And', tOpts),
            filterPanelOperatorOr: tTranslate('Or', tOpts),
            noResultsOverlayLabel: tTranslate('No results found', tOpts),
            columnHeaderFiltersTooltipActive: (count) => {
                const key = count === 1 ? 'active filter' : 'active filters';
                return `${count} ${tTranslate(key, tOpts)}`;
            },
            detailPanelToggle: tTranslate('Detail panel toggle', tOpts),
            checkboxSelectionHeaderName: tTranslate('Checkbox selection', tOpts),
            columnsManagementShowHideAllText: tTranslate('Show/Hide all', tOpts),
            noColumnsOverlayLabel: tTranslate('No columns', tOpts),
            noColumnsOverlayManageColumns: tTranslate('Manage columns', tOpts),
            columnsManagementReset: tTranslate('Reset', tOpts),
            groupColumn: (name) => `${tTranslate('Group by', tOpts)} ${name}`,
            unGroupColumn: (name) => `${tTranslate('Ungroup', tOpts)} ${name}`,
            footerRowSelected: (count) => {
                const key = count === 1 ? 'item selected' : 'items selected';
                return `${count.toLocaleString()} ${tTranslate(key, tOpts)}`;
            }
        }), [tTranslate, tOpts, model?.searchPlaceholder]);

    const slotProps = useMemo(() => ({
        headerFilterCell: { showClearIcon: true },
        toolbar: {
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
            gridColumns,
            tTranslate,
            tOpts,
            idProperty,
            filterModel,
            setFilterModel,
            onPreferenceChange,
            toolbarItems
        },
        footer: {
            pagination: true,
            apiRef,
            tTranslate,
            tOpts
        },
        panel: {
            placement: "bottom-end"
        },
        pagination: {
            backIconButtonProps: {
                title: tTranslate('Go to previous page', tOpts),
                'aria-label': tTranslate('Go to previous page', tOpts),
            },
            nextIconButtonProps: {
                title: tTranslate('Go to next page', tOpts),
                'aria-label': tTranslate('Go to next page', tOpts),
            },
        }
    }), [model, data, currentPreference, isReadOnly, canAdd, forAssignment, showAddIcon, onAdd, selectionApi, rowSelectionModel, selectAll, available, onAssign, assigned, onUnassign, effectivePermissions, clearFilters, handleExport, preferenceKey, apiRef, gridColumns, tTranslate, tOpts, idProperty, filterModel, setFilterModel, onPreferenceChange, toolbarItems]);

    const initialState = useMemo(() => ({
        columns: {
            columnVisibilityModel: visibilityModel
        },
        pinnedColumns: pinnedColumns
    }), [visibilityModel, pinnedColumns]);

    const slots = useMemo(() => ({
        headerFilterMenu: false,
        toolbar: CustomToolbar,
        footer: Footer
    }), []);

    return (
        <>
            {showPageTitle !== false && <PageTitle navigate={navigate} showBreadcrumbs={!hideBreadcrumb && !hideBreadcrumbInGrid}
                breadcrumbs={breadCrumbs} enableBackButton={navigateBack} breadcrumbColor={breadcrumbColor} />}
            <Box style={gridStyle || customStyle}>
                <Box sx={{ display: 'flex', maxHeight: '80vh', flexDirection: 'column' }}>
                    <DataGridPremium
                        sx={{
                            "& .MuiTablePagination-selectLabel": {
                                marginTop: 2
                            },
                            "& .MuiTablePagination-displayedRows": {
                                marginTop: 2
                            },
                            "& .MuiDataGrid-virtualScroller ": {
                                zIndex: 2,
                            },
                            "& .MuiDataGrid-detailPanelToggleCell, & .MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--detailPanelToggle": {
                                display: 'none'
                            }
                        }}
                        headerFilters={showHeaderFilters}
                        unstable_headerFilters={showHeaderFilters} //for older versions of mui
                        checkboxSelection={forAssignment}
                        loading={!data.records || isLoading}
                        className="pagination-fix"
                        onCellClick={onCellClickHandler}
                        onCellDoubleClick={onCellDoubleClick}
                        columns={gridColumns}
                        paginationModel={paginationModel}
                        pageSizeOptions={constants.pageSizeOptions}
                        onPaginationModelChange={setPaginationModel}
                        pagination
                        rowCount={data.recordCount}
                        rows={data.records || []}
                        sortModel={sortModel}
                        paginationMode={paginationMode}
                        sortingMode={paginationMode}
                        filterMode={paginationMode}
                        processRowUpdate={processRowUpdate}
                        keepNonExistentRowsSelected
                        onSortModelChange={updateSort}
                        onFilterModelChange={updateFilters}
                        rowSelectionModel={rowSelectionModel}
                        onRowSelectionModelChange={setRowSelectionModel}
                        filterModel={filterModel}
                        getRowId={getGridRowId}
                        onRowClick={onRowClick}
                        slots={slots}
                        slotProps={slotProps}
                        hideFooterSelectedRowCount={rowsSelected}
                        density="compact"
                        disableDensitySelector={true}
                        apiRef={apiRef}
                        disableAggregation={true}
                        disableRowGrouping={true}
                        disableRowSelectionOnClick={disableRowSelectionOnClick}
                        disablePivoting={disablePivoting}
                        filterDebounceMs={debounceTimeOut}
                        initialState={initialState}
                        {...(enableRowDetailPanel && {
                             getDetailPanelContent,
                             detailPanelExpandedRowIds,
                             onDetailPanelExpandedRowIdsChange: handleDetailPanelExpanded
                        })}
                        localeText={localeText}
                        showToolbar={true}
                        columnHeaderHeight={columnHeaderHeight}
                    />
                </Box>
                {errorMessage && (<DialogComponent open={!!errorMessage} onConfirm={clearError} onCancel={clearError} title="Info" hideCancelButton={true} > {errorMessage}</DialogComponent>)
                }
                {isDeleting && !errorMessage && (
                    <DialogComponent open={isDeleting} onConfirm={handleDelete} onCancel={() => setIsDeleting(false)} title="Confirm Delete">
                        <DeleteContentText>
                            {tTranslate("Are you sure you want to delete", tOpts)} {record.name && <Tooltip style={{ display: "inline" }} title={record.name} arrow>
                                {record.name.length > 30 ? `${record.name.slice(0, 30)}...` : record.name}
                            </Tooltip>} ?
                        </DeleteContentText>
                    </DialogComponent>)}
                {showAddConfirmation && (
                    <DialogComponent
                        open={showAddConfirmation}
                        onConfirm={handleAddRecords}
                        onCancel={() => setShowAddConfirmation(false)}
                        title="Confirm Add"
                    >
                        <DeleteContentText>
                            {tTranslate("Are you sure you want to add", tOpts)} {rowSelectionModel.ids.size} {tTranslate("records", { count: rowSelectionModel.ids.size, ...tOpts })}?
                        </DeleteContentText>
                    </DialogComponent>
                )}
            </Box >
        </>
    );
}, areEqual);

export default GridBase;
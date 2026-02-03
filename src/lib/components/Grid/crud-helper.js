import actionsStateProvider from "../useRouter/actions";
import request, { transport, HTTP_STATUS_CODES, DATA_PARSERS } from "./httpRequest";
import utils from "../utils";
import dayjs from "dayjs";

const dateDataTypes = ['date', 'dateTime'];
const lookupDataTypes = ['singleSelect', 'radio', 'select'];
const timeInterval = 200;
const contentTypeToFileType = {
    "text/csv": "CSV",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
    'application/json': "JSON"
};

const isLocalTime = (dateValue) => new Date().getTimezoneOffset() === new Date(dateValue).getTimezoneOffset();

/**
 * Transform combo records to lookup format
 */
const transformComboRecords = (combos = {}) => {
    const transformedCombos = {};

    for (const [comboType, records] of Object.entries(combos)) {
        if (Array.isArray(records)) {
            transformedCombos[comboType] = records.map(record => {
                if (Array.isArray(record)) {
                    return { value: record[0], label: record[1] };
                }
                return {
                    value: record.LookupId ?? record.value ?? record.id,
                    label: record.DisplayValue ?? record.label ?? record.name
                };
            });
        }
    }

    return transformedCombos;
};

/**
 * Process response data and merge combo lookups
 */
const processResponseData = async ({ responseData, model, dateColumns }) => {
    const { records = [] } = responseData;
    if (records && records.length) {
        records.forEach(record => {
            dateColumns.forEach(column => {
                const { field, keepLocal, keepLocalDate } = column;
                if (record[field]) {
                    // Try to parse compact timestamp format first (handles various lengths)
                    let parsedDate = dayjs(record[field]);

                    // If not compact format, try standard Date parsing
                    if (!parsedDate) {
                        parsedDate = new Date(record[field]);
                        // Check if the date is valid
                        if (isNaN(parsedDate.getTime())) {
                            console.warn(`Invalid date format for field ${field}:`, record[field]);
                            return; // Skip processing invalid dates
                        }
                    }

                    record[field] = parsedDate;

                    if (keepLocalDate) {
                        const userTimezoneOffset = record[field].getTimezoneOffset() * 60000;
                        record[field] = new Date(record[field].getTime() + userTimezoneOffset);
                    }
                    if (keepLocal && !isLocalTime(record[field])) {
                        const userTimezoneOffset = record[field].getTimezoneOffset() * 60000;
                        record[field] = new Date(record[field].getTime() + userTimezoneOffset);
                    }
                }
            });
            model.columns.forEach(({ field, displayIndex }) => {
                if (!displayIndex) return;
                record[field] = record[displayIndex];
            });
        });
    }

    return responseData;
};

/**
 * Handles common HTTP error responses such as session expiration and forbidden access.
 * If an error is detected, sets an appropriate error message and redirects the user after a delay.
 * Returns true if a common error was handled, otherwise false.
 * 
 * @param {Object} response - The HTTP response object containing the status code.
 * @param {Function} setError - Callback function to set the error message.
 * @returns {boolean} Returns true if a common error was handled and a redirect is triggered, otherwise false.
 */
const handleCommonErrors = (response, setError) => {
    if (response.status === HTTP_STATUS_CODES.SESSION_EXPIRED) {
        setError('Session Expired!');
        setTimeout(() => {
            window.location.href = '/';
        }, timeInterval);
        return true;
    } else if (response.status === HTTP_STATUS_CODES.FORBIDDEN) {
        setError('Access Denied!');
        setTimeout(() => {
            window.location.href = '/';
        }, timeInterval);
        return true;
    } else if (response.status === HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR) {
        setError('Internal Server Error');
    }
    return false;
};

function shouldApplyFilter(filter) {
    const { operator, value, type } = filter;

    const isUnaryOperator = ["isEmpty", "isNotEmpty"].includes(operator);
    const hasValidValue = value !== undefined &&
        value !== null &&
        (value !== '' || (type === 'number' && value === 0) || (type === 'boolean' && value === false));

    return isUnaryOperator || hasValidValue;
}

const getList = async ({ gridColumns, setIsLoading, setData, page, pageSize, sortModel, filterModel, api, parentFilters, action = 'list', setError, extraParams, contentType, columns, controllerType = 'node', template = null, configFileName = null, dispatchData, showFullScreenLoader = false, model, baseFilters = null, isElasticExport }) => {
    if (!contentType) {
        if (showFullScreenLoader) {
            dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: true });
        }
    }

    const lookups = [];
    const lookupWithDeps = []; // for backward compatibility having two lookups arrays
    const dateColumns = [];
    const isCSController = controllerType === 'cs';
    gridColumns.forEach(({ lookup, type, field, keepLocal = false, keepLocalDate, filterable = true, dependsOn }) => {
        if (dateDataTypes.includes(type)) {
            dateColumns.push({ field, keepLocal, keepLocalDate });
        }
        if (!lookup) {
            return;
        }
        if (!lookups.includes(lookup) && lookupDataTypes.includes(type) && filterable) {
            lookups.push(lookup);
            lookupWithDeps.push({ lookup, dependsOn });
        }
    });
    if (model?.formActions?.export && contentType) {
        action = model.formActions.export;
    }

    const where = [];
    if (filterModel?.items?.length) {
        filterModel.items.forEach(filter => {
            if (shouldApplyFilter(filter)) {
                const { field, operator, filterField } = filter;
                let { value } = filter;
                const column = gridColumns.filter((item) => item?.field === filter.field);
                const type = column[0]?.type;
                if (type === 'boolean') {
                    value = (value === 'true' || value === true) ? 1 : 0;
                } else if (type === 'number') {
                    value = Array.isArray(value) ? value.filter(e => e) : value;
                }
                value = filter.filterValues || value;
                where.push({
                    field: filterField || field,
                    operator,
                    value,
                    type
                });
            }
        });
    }
    if (parentFilters) {
        where.push(...parentFilters);
    }

    if (baseFilters) {
        where.push(...baseFilters);
    }
    const requestData = {
        start: page * pageSize,
        limit: isElasticExport ? model.exportSize : pageSize,
        ...extraParams,
        logicalOperator: filterModel.logicOperator,
        sort: sortModel.map(sort => (sort.filterField || sort.field) + ' ' + sort.sort).join(','),
        where,
        isElasticExport,
        model: model.module,
        fileName: model.overrideFileName
    };

    if(model?.comboTypes){
        requestData.comboTypes = model.comboTypes;
    }

    if (lookups.length) {
        requestData.lookups = lookups.join(',');
    }

    if (lookupWithDeps.length) {
        requestData.lookupWithDeps = JSON.stringify(lookupWithDeps);
    }

    if (model?.limitToSurveyed) {
        requestData.limitToSurveyed = model?.limitToSurveyed;
    }

    if (isCSController) {
        // payloadFilter keeps all filters for individual field mappings
        let payloadFilter = where, removedFields = [];

        // Remove fields that should not be in the where array or filters
        if (model.fieldsToRemoveFromPayload && model.fieldsToRemoveFromPayload.length) {
            payloadFilter = where.filter(ele => !model.fieldsToRemoveFromPayload.includes(ele.field));
            removedFields = where.filter(ele => model.fieldsToRemoveFromPayload.includes(ele.field));
        }

        delete requestData.where; // Remove where as CS controller uses filters
        // Pass filtered filters to createCSPayload
        utils.createCSPayload(payloadFilter, requestData);

        // Map filtered filters to individual fields
        if (payloadFilter?.length) {
            payloadFilter.map((ele) => { requestData[ele.field] = ele.value; })
        }

        // Add removed fields directly to requestData (not as filters)
        if (removedFields?.length) {
            removedFields.map((ele) => { requestData[ele.field] = ele.value; })
        }

        if (sortModel?.length) {
            requestData.sort = sortModel[0].field;
            requestData.dir = sortModel[0].sort;
        }
    }

    const headers = {};
    let url = controllerType === 'cs' ? `${api}?action=${action}&asArray=0` : `${api}/${action}`;

    if (template !== null) {
        url += `&template=${template}`;
    }
    if (configFileName !== null) {
        url += `&configFileName=${configFileName}`;
    }
    if (contentType) {
        const form = document.createElement("form");
        requestData.responseType = contentType;
        requestData.columns = columns;
        if (isCSController) {
            requestData.exportFormat = contentTypeToFileType[contentType];
            requestData.selectedFields = Object.keys(columns).join();
            if (requestData.sort && !Object.keys(columns).includes(requestData.sort)) {
                requestData.selectedFields += `,${requestData.sort}`;
            }
            requestData.cols = Object.keys(columns).map(col => {
                return { ColumnName: columns[col].field, Header: columns[col].headerName, Width: columns[col].width }
            });
            delete requestData.columns;
            delete requestData.responseType;
        }
        requestData.userTimezoneOffset = -new Date().getTimezoneOffset(); // Negate to get the correct offset for conversion
        form.setAttribute("method", "POST");
        form.setAttribute("id", "exportForm");
        form.setAttribute("target", "_blank");
        if (template === null) {
            for (const key in requestData) {
                let v = requestData[key];
                if (v === undefined || v === null) {
                    continue;
                } else if (typeof v !== 'string') {
                    v = JSON.stringify(v);
                }
                const hiddenTag = document.createElement('input');
                hiddenTag.type = "hidden";
                hiddenTag.name = key;
                hiddenTag.value = v;
                form.append(hiddenTag);
            }
        }
        form.setAttribute('action', url);
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => {
            document.getElementById("exportForm").remove();
        }, 3000);
        return;
    }
    try {
        setIsLoading(true);
        const params = {
            url,
            method: 'POST',
            data: requestData,
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            credentials: 'include'
        };
        setData(prevData => ({
            ...prevData,
            records: [] // reset records to empty array before fetching new data
        }));
        let response;
        if (isCSController) {
            response = await request({  url, params:  requestData, dispatchData, disableLoader: true, dataParser: DATA_PARSERS.json });
        } else {
            response = await transport(params);
        }
        if (response.status === HTTP_STATUS_CODES.OK || response.records) {
            // Process response data and merge combo lookups
            const processedData = await processResponseData({ responseData: response.data || response, model, dateColumns });
            setData({ ...processedData, ...(isCSController ? { lookups: transformComboRecords(response.combos) } : {}) });
        } else if (!handleCommonErrors(response, setError)) {
            setError(response.statusText || response.message);
        }
    } catch (error) {
        if (error.response && !handleCommonErrors(error.response, setError)) {
            setError('Could not list record', error.message || error.toString());
        } else{
            setError('Network failure or server unreachable. Please try again.');
        }
    } finally {
        setIsLoading(false);
        if (!contentType && showFullScreenLoader) {
            dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: false });
        }
    }
};

const getRecord = async ({ api, id, setIsLoading, setActiveRecord, model, parentFilters, where = {}, setError, dispatchData }) => {
    const isCSController = model.controllerType === 'cs';
    let activeRecord = {}
    api = api || model.api;
    setIsLoading(true);
    if (isCSController) {
        // Fetch record using POST with action
        const requestData = { 
            id, 
            action: model.formActions?.fetch || 'load', 
            method: 'POST' 
        };
        if (model.comboTypes) {
            requestData.comboTypes = model.comboTypes;
        }

        try {
            const response = await request({ 
                url: api, 
                params: requestData,  
                dispatchData,
                disableLoader: true, 
                dataParser: DATA_PARSERS.json 
            });
            if (response.error) {
                setError(response.error);
                return;
            }
            const record = response.data; // data is a single object for getRecord
            let title = record[model.linkColumn];

            // Apply default values if they exist
            const defaultValues = { ...model.defaultValues };
            const processedRecord = { ...defaultValues, ...record, ...parentFilters };
            activeRecord ={
                id,
                title: title,
                record: processedRecord,
                lookups: transformComboRecords(response.combos || {})
            }
        } catch (error) {
            if (error.response && !handleCommonErrors(error.response, setError)) {
                setError('Could not load record', error.message || error.toString());
            }
        } finally {
            setIsLoading(false);
        }
    } else {
        // Handle default (node) controller type
        const searchParams = new URLSearchParams();
        const url = `${api}/${id === undefined || id === null ? '-' : id}`;
        const lookupsToFetch = [];
        const fields = model.formDef || model.columns;
        fields?.forEach(field => {
            if (field.lookup && !lookupsToFetch.includes(field.lookup) && !field.dependsOn) {
                lookupsToFetch.push(field.lookup);
            }
        });
        searchParams.set("lookups", lookupsToFetch);
        if (where && Object.keys(where)?.length) {
            searchParams.set("where", JSON.stringify(where));
        }
        try {
            const response = await transport({
                url: `${url}?${searchParams.toString()}`,
                method: 'GET',
                credentials: 'include'
            });
            if (response.status === HTTP_STATUS_CODES.OK) {
                const { data: record, lookups } = response.data;
                let title = record[model.linkColumn];
                const columnConfig = model.columns.find(a => a.field === model.linkColumn);
                if (columnConfig && columnConfig.lookup) {
                    if (lookups && lookups[columnConfig.lookup] && lookups[columnConfig.lookup]?.length) {
                        const lookupValue = lookups[columnConfig.lookup].find(a => a.value === title);
                        if (lookupValue) {
                            title = lookupValue.label;
                        }
                    }
                }
                const defaultValues = { ...model.defaultValues };
                activeRecord = { id, title: title, record: { ...defaultValues, ...record, ...parentFilters }, lookups };
            } else if (!handleCommonErrors(response, setError)) {
                setError('Could not load record', response.body.toString());
            }
        } catch (error) {
            if (error.response && handleCommonErrors(error.response, setError)) {
                setError('Could not load record', error.message || error.toString());
            }
        } finally {
            setIsLoading(false);
        }
    }

    setActiveRecord(activeRecord);
};

const deleteRecord = async function ({ id, api, setIsLoading, setError }) {
    const result = { success: false, error: '' };
    if (!id) {
        setError('Deleted failed. No active record.');
        return;
    }
    setIsLoading(true);
    try {
        const response = await transport({
            url: `${api}/${id}`,
            method: 'DELETE',
            credentials: 'include'
        });
        if (response.status === HTTP_STATUS_CODES.OK) {
            if (response.data && !response.data.success) {
                result.success = false;
                setError('Delete failed', response.data.message);
                return false;
            }
            result.success = true;
            return true;
        } else if (!handleCommonErrors(response, setError)) {
            setError('Delete failed', response.body);
        }
    } catch (error) {
        if (error.response && !handleCommonErrors(error.response, setError)) {
            setError('Could not delete record', error.message || error.toString());
        }
    } finally {
        setIsLoading(false);
    }
    return result;
};

const saveRecord = async function ({ id, api, values, setIsLoading, setError, model }) {
    const isCSController = model?.controllerType === 'cs';
    try {
        setIsLoading(true);
        if (isCSController) {
            // Handle CS controller save
            const isNew = !id || id === "0";
            const action = isNew ? model.formActions?.save || 'save' : model.formActions?.edit || 'quickSave';
            const idProperty = model.idProperty || 'id';
            const formEditParams = model.formEditParams || 'lineItems';

            const requestData = {
                action,
                method: 'POST',
                ...values,
            };
            if (!isNew) {
                requestData[formEditParams] = [{
                    ...values,
                    [idProperty]: id,
                    isQuickSave: true, // Indicate quick save
                    id
                }]
            };

            const response = await request({
                url: api,
                params: requestData,
                disableLoader: true,
                dataParser: DATA_PARSERS.json
            });

            if (response.error) {
                setError(response.message || response.error);
                return null;
            }

            return response.success !== false ? response : null;
        } else {
            // Handle default (node) controller type
            const url = id !== 0 ? `${api}/${id}` : api;
            const method = id !== 0 ? 'PUT' : 'POST';

            const response = await transport({
                url,
                method,
                data: values,
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });

            if (response.status === HTTP_STATUS_CODES.OK) {
                const data = response.data;
                return data.success ? data : null;
            }

            throw new Error(response.body || 'Save failed');
        }
    } catch (error) {
        if (error.response && handleCommonErrors(error.response, setError)) {
            return false;
        }
        const errorMessage = error.message || error.toString() || 'Could not save record';
        setError('Save failed', errorMessage);
        return false;
    } finally {
        setIsLoading(false);
    }
};

const getLookups = async ({ api, setIsLoading, setActiveRecord, model, setError, lookups, scopeId }) => {
    api = api || model.api;
    setIsLoading(true);
    const searchParams = new URLSearchParams();
    const url = `${api}/lookups`;
    searchParams.set("lookups", lookups);
    searchParams.set("scopeId", scopeId);
    try {
        const response = await transport({
            url: `${url}?${searchParams.toString()}`,
            method: 'GET',
            credentials: 'include'
        });
        if (response.status === HTTP_STATUS_CODES.OK) {
            setActiveRecord(response.data);
        } else if (!handleCommonErrors(response, setError)) {
            setError('Could not load lookups', response.statusText);
        }
    } catch (error) {
        if (error.response && !handleCommonErrors(error.response, setError)) {
            setError('Could not load lookups', error.message || error.toString());
        }
    } finally {
        setIsLoading(false);
    }
};
export {
    getList,
    getRecord,
    deleteRecord,
    saveRecord,
    getLookups,
};

const crudHelper = {
    getList,
    getRecord,
    deleteRecord,
    saveRecord,
    getLookups,
};

export default crudHelper;

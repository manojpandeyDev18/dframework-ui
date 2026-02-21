import request, { DATA_PARSERS, getErrorMessage } from "./httpRequest";

const dateDataTypes = ['date', 'dateTime'];
const lookupDataTypes = ['singleSelect'];
const exportDefaultLimit = 1_000_000;
const exportFormCleanupDelayMs = 3000;

const isLocalTime = (dateValue) => new Date().getTimezoneOffset() === new Date(dateValue).getTimezoneOffset();

function shouldApplyFilter(filter) {
    const { operator, value, type } = filter;

    const isUnaryOperator = ["isEmpty", "isNotEmpty"].includes(operator);
    const hasValidValue = value !== undefined &&
        value !== null &&
        (value !== '' || (type === 'number' && value === 0) || (type === 'boolean' && value === false));

    return isUnaryOperator || hasValidValue;
}

const buildRequestData = ({ gridColumns, page, pageSize, sortModel, filterModel, baseFilters, action, extraParams = {}, model, api }) => {
    const isElasticExport = action === 'export' && model.isElasticExport === true;

    const lookups = [];
    const lookupWithDeps = []; // for backward compatibility having two lookups arrays
    const dateColumns = [];
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

    // Add baseFilters if present (already includes parentFilters merged in Grid component)
    if (baseFilters && Array.isArray(baseFilters)) {
        where.push(...baseFilters);
    }

    const requestData = {
        start: page * pageSize,
        limit: isElasticExport ? (model.exportSize || exportDefaultLimit) : pageSize,
        ...extraParams,
        logicalOperator: filterModel.logicOperator,
        sort: sortModel.map(sort => (sort.filterField || sort.field) + ' ' + sort.sort).join(','),
        where,
        isElasticExport,
        model: model.module,
        fileName: model.overrideFileName
    };

    if (lookups.length) {
        requestData.lookups = lookups.join(',');
    }

    if (lookupWithDeps.length) {
        requestData.lookupWithDeps = JSON.stringify(lookupWithDeps);
    }

    if (model?.limitToSurveyed) {
        requestData.limitToSurveyed = model?.limitToSurveyed;
    }

    let url = `${api}/${action}`;

    const queryParams = new URLSearchParams();
    if (extraParams.template) {
        queryParams.append('template', extraParams.template);
    }
    if (extraParams.configFileName) {
        queryParams.append('configFileName', extraParams.configFileName);
    }
    const queryString = queryParams.toString();
    if (queryString) {
        url += `?${queryString}`;
    }

    return { requestData, url, where, dateColumns };
};

/**
 * Fetches a list of records or triggers a file export depending on whether `contentType` is provided.
 *
 * - Without `contentType` (list path):
 *   - Performs a JSON POST request via `request`.
 *   - Returns the parsed response.
 *   - Throws on HTTP or application-level errors.
 *
 * - With `contentType` (export path):
 *   - Builds a POST payload and submits a hidden `<form>` to trigger a file download in a new window/tab.
 *   - This is a fire-and-forget operation: the promise resolves once the form is submitted.
 *   - No errors from the export request are propagated back to the caller; failures are effectively silent
 *     from this function's perspective and should be handled via server-side logging or a custom UX flow
 *     (e.g. returning an error file or exposing a separate export-status API).
 */
const getList = async ({ gridColumns, page, pageSize, sortModel, filterModel, baseFilters, action = 'list', extraParams = {}, contentType, columns, model, api }) => {
    const { requestData, url, where, dateColumns } = buildRequestData({ gridColumns, page, pageSize, sortModel, filterModel, baseFilters, action, extraParams, model, api });

    if (contentType) {
        requestData.responseType = contentType;
        requestData.columns = columns;
        requestData.userTimezoneOffset = -new Date().getTimezoneOffset(); // Negate to get the correct offset for conversion
        if (typeof model.createRequestPayload === 'function') {
            await model.createRequestPayload(requestData, { where, sortModel, page, pageSize, baseFilters, action, url, dataParsers: DATA_PARSERS, model });
        }
        const form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("id", "exportForm");
        form.setAttribute("target", "_blank");
        if (!extraParams.template) {
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
        form.setAttribute('action', requestData.url || url);
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => { form.remove(); }, exportFormCleanupDelayMs);
        return;
    }

    const reqParams = {
        url,
        additionalHeaders: {
            "Content-Type": "application/json"
        },
        jsonPayload: true,
        params: requestData,
        dataParser: DATA_PARSERS.json
    };

    // for manipulating the request payload before sending the request.
    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(reqParams, { where, sortModel, page, pageSize, baseFilters, action, dataParsers: DATA_PARSERS, model });
    }
    const response = await request(reqParams);

    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'An error occurred while fetching data');
    }

    // Parse response data if needed custom processing.
    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes(action)) {
        return await model.parseResponsePayload({ responseData: response, model, dateColumns, action });
    }

    response.records.forEach(record => {
        dateColumns.forEach(column => {
            const { field, keepLocal, keepLocalDate } = column;
            if (record[field]) {
                record[field] = new Date(record[field]);
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

    return response;
};

/**
 * Loads a single record by id along with its lookups.
 * Returns { id, title, record, lookups } or throws on error.
 */
const getRecord = async ({ api, id, model, parentFilters, where = {} }) => {
    api = api || model.api;
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
    const requestData = {
        url: `${url}?${searchParams.toString()}`,
        additionalParams: { method: 'GET' },
        jsonPayload: true
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, parentFilters, model, where, api, action: 'load', dataParsers: DATA_PARSERS });
    }

    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Load failed');
    }
    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('load')) {
        return await model.parseResponsePayload({ responseData: response, model, action: 'load' });
    }
    const { data: record, lookups } = response || {};
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
    return { id, title, record: { ...defaultValues, ...record, ...parentFilters }, lookups };
};

/**
 * Deletes a record by id. Returns true on success or throws on error.
 */
const deleteRecord = async function ({ id, api, model }) {
    if (!id) {
        throw new Error('Delete failed. No active record.');
    }
    const requestData = {
        url: `${api}/${id}`,
        additionalParams: { method: 'DELETE' }
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, model, api, action: 'delete', dataParsers: DATA_PARSERS });
    }
    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Delete failed');
    }
    return true;
};

/**
 * Creates or updates a record. Returns the response on success or throws on error.
 */
const saveRecord = async function ({ id, api, values, model }) {
    let url, method;

    if (id !== 0) {
        url = `${api}/${id}`;
        method = 'PUT';
    } else {
        url = api;
        method = 'POST';
    }

    const requestData = {
        url,
        additionalParams: { method },
        params: values,
        additionalHeaders: {
            'Content-Type': 'application/json'
        },
        jsonPayload: true
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, model, values, api, action: 'save', dataParsers: DATA_PARSERS });
    }

    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Save failed');
    }
    return response;
};

/**
 * Fetches lookup data for a given scope. Returns the response or throws on error.
 */
const getLookups = async ({ api, model, lookups, scopeId, reqData }) => {
    api = api || model.api;
    const searchParams = new URLSearchParams();
    const url = `${api}/lookups`;
    searchParams.set("lookups", lookups);
    searchParams.set("scopeId", scopeId);
    const requestData = {
        url: `${url}?${searchParams.toString()}`,
        additionalParams: { method: 'GET' },
        jsonPayload: true,
        ...reqData
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { model, lookups, scopeId, dataParsers: DATA_PARSERS, action: 'lookups', api });
    }
    const response = await request(requestData);
    if (response?.error || response?.success === false) {
        throw new Error(getErrorMessage(response) || 'Could not load lookups');
    }

    if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('lookups')) {
        return await model.parseResponsePayload({ responseData: response, model, action: 'lookups' });
    }
    return response;
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

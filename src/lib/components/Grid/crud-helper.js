import actionsStateProvider from "../useRouter/actions";
import request, { DATA_PARSERS } from "./httpRequest";

const dateDataTypes = ['date', 'dateTime'];
const lookupDataTypes = ['singleSelect'];

const isLocalTime = (dateValue) => new Date().getTimezoneOffset() === new Date(dateValue).getTimezoneOffset();

const getErrorMessage = (response) => response?.message || response?.info || response?.error;

function shouldApplyFilter(filter) {
    const { operator, value, type } = filter;

    const isUnaryOperator = ["isEmpty", "isNotEmpty"].includes(operator);
    const hasValidValue = value !== undefined &&
        value !== null &&
        (value !== '' || (type === 'number' && value === 0) || (type === 'boolean' && value === false));

    return isUnaryOperator || hasValidValue;
}

const getList = async ({ gridColumns, setData, page, pageSize, sortModel, filterModel, api, parentFilters, action = 'list', setError, extraParams, contentType, columns, controllerType = 'node', template = null, configFileName = null, dispatchData, showFullScreenLoader = false, model, baseFilters = null, isElasticExport, history = null }) => {
    if (!contentType) {
        if (showFullScreenLoader) {
            dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: true });
        }
    }

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

    if (lookups.length) {
        requestData.lookups = lookups.join(',');
    }

    if (lookupWithDeps.length) {
        requestData.lookupWithDeps = JSON.stringify(lookupWithDeps);
    }

    if (model?.limitToSurveyed) {
        requestData.limitToSurveyed = model?.limitToSurveyed;
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
        requestData.userTimezoneOffset = -new Date().getTimezoneOffset(); // Negate to get the correct offset for conversion
        // for manipulating the request payload before sending the request.
        if (typeof model.createRequestPayload === 'function') {
            await model.createRequestPayload(requestData, { where, sortModel, page, pageSize, parentFilters, action, url, dataParsers: DATA_PARSERS, model });
        }
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
        form.setAttribute('action', requestData.url || url);
        document.body.appendChild(form);
        form.submit();
        setTimeout(() => {
            document.getElementById("exportForm").remove();
        }, 3000);
        return;
    }
    try {
        const reqParams = {
            url,
            additionalHeaders: {
                "Content-Type": "application/json",
                ...headers
            },
            dispatchData,
            jsonPayload: true,
            params: requestData,
            dataParser: DATA_PARSERS.json,
            history
        };

        // for manipulating the request payload before sending the request.
        if (typeof model.createRequestPayload === 'function') {
            await model.createRequestPayload(reqParams, { where, sortModel, page, pageSize, parentFilters, action, dataParsers: DATA_PARSERS, model });
        }
        const response = await request(reqParams);

        if (response?.error || response?.success === false) {
            const errorMessage = getErrorMessage(response);
            setError('An error occurred while fetching data', errorMessage);
            setData((prevData) => ({ ...prevData, records: [], recordCount: 0 }));
            return;
        }

        // Parse response data if needed custom processing.
        if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes(action)) {
            const resData = await model.parseResponsePayload({ responseData: response, model, dateColumns, action });
            setData(resData);
            return;
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

        setData(response);
    } catch (error) {
        setError('Network failure or server unreachable. Please try again.');
    }
};

const getRecord = async ({ api, id, setActiveRecord, model, parentFilters, where = {}, setError, dispatchData }) => {
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
        dispatchData,
        jsonPayload: true
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, parentFilters, model, where, api, action: 'load', dataParsers: DATA_PARSERS });
    }
    try {
        const response = await request(requestData);
        if (response?.error || response?.success === false) {
            const errorMessage = getErrorMessage(response);
            setError('Load failed', errorMessage);
            return;
        }
        if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('load')) {
            const resData = await model.parseResponsePayload({ responseData: response, model, action: 'load' });
            setActiveRecord(resData);
            return;
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
        setActiveRecord({ id, title: title, record: { ...defaultValues, ...record, ...parentFilters }, lookups });
    } catch (error) {
        setError('Could not load record', error.message || error.toString());
    }
};

const deleteRecord = async function ({ id, api, setError, model }) {
    const result = { success: false, error: '' };
    if (!id) {
        setError('Deleted failed. No active record.');
        return;
    }
    const requestData = {
        url: `${api}/${id}`,
        additionalParams: { method: 'DELETE' }
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, model, api, action: 'delete', dataParsers: DATA_PARSERS });
    }
    try {
        const response = await request(requestData);
        if (response?.error || response?.success === false) {
            result.success = false;
            const errorMessage = getErrorMessage(response);
            setError('Delete failed', errorMessage);
            return false;
        }
        result.success = true;
        return true;
    } catch (error) {
        setError('Could not delete record', error.message || error.toString());
    }
    return result;
};

const saveRecord = async function ({ id, api, values, setError, model, dispatchData }) {
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
        jsonPayload: true,
        dispatchData
    };

    if (typeof model.createRequestPayload === 'function') {
        await model.createRequestPayload(requestData, { id, model, values, api, action: 'save', dataParsers: DATA_PARSERS });
    }

    try {
        const response = await request(requestData);
        if (response?.error || response?.success === false) {
            const errorMessage = getErrorMessage(response);
            setError('Save failed', errorMessage);
            return false;
        }
        return response;
    } catch (error) {
        setError('Could not save record', error.message || error.toString());
    }

    return false;
};

const getLookups = async ({ api, setActiveRecord, model, setError, lookups, scopeId, reqData }) => {
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
    try {
        if(typeof model.createRequestPayload === 'function') {
            await model.createRequestPayload(requestData, { model, lookups, scopeId, dataParsers: DATA_PARSERS, action: 'lookups', api });
        }
        const response = await request(requestData);
        if (response?.error || response?.success === false) {
            const errorMessage = getErrorMessage(response);
            setError('Could not load lookups', errorMessage);
            return false;
        }

        if (typeof model.parseResponsePayload === 'function' && model.parseResponseActions.includes('lookups')) {
            const resData = await model.parseResponsePayload({ responseData: response, model, action: 'lookups' });
            setActiveRecord(resData);
            return;
        }
        setActiveRecord(response);
    } catch (error) {
        setError('Could not load lookups', error.message || error.toString());
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

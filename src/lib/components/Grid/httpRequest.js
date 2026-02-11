import actionsStateProvider from '../useRouter/actions';
let pendingRequests = 0;

const HTTP_STATUS_CODES = {
    OK: 200,
    SESSION_EXPIRED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

const getFormData = (props) => {
    const formData = new FormData();
    for (const key in props) {
        if (typeof props[key] === "object") {
            formData.append(key, JSON.stringify(props[key]));
        } else {
            formData.append(key, props[key]);
        }
    }
    return formData;
};

const exportRequest = (url, query) => {
    const newURL = new URL(url);
    for (const key in query) {
        const value = typeof query[key] === 'object' ? JSON.stringify(query[key]) : query[key];
        newURL.searchParams.append(key, value);
    }
    window.open(newURL, '_blank').focus();
};

const transport = async (config) => {
    const {
        method = 'GET',
        url,
        data,
        headers = {},
        credentials = 'include',
        ...rest
    } = config;

    const fetchOptions = {
        method,
        credentials,
        headers: {
            ...headers
        },
        ...rest
    };

    if (data) {
        if (headers['Content-Type'] === 'multipart/form-data') {
            delete fetchOptions.headers['Content-Type']; // Let browser set it
            fetchOptions.body = data instanceof FormData ? data : getFormData(data);
        } else {
            fetchOptions.headers['Content-Type'] = headers['Content-Type'] || 'application/json';
            fetchOptions.body = typeof data === 'string' ? data : JSON.stringify(data);
        }
    }

    const response = await fetch(url, fetchOptions);
    const contentType = response.headers.get('content-type') || {};
    const responseObj = {
        status: response.status,
        data: contentType.includes('application/json') ? await response.json() : await response.text(),
        headers: Object.fromEntries(response.headers.entries())
    };

    return responseObj;
};

/**
 * Default data parsers for different response types
 * Use these to normalize API responses to a consistent type
 */
const DATA_PARSERS = Object.freeze({
    /**
     * Parse JSON string or return object as-is
     * Automatically handles string JSON responses
     */
    json: (data) => {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        return data;
    },
    /**
     * Convert to string
     */
    text: (data) => String(data),
    /**
     * Return data as-is without parsing
     */
    raw: (data) => data
});

/**
 * Enhanced HTTP request handler with automatic data parsing
 * 
 * @param {Object} config - Request configuration
 * @param {string} config.url - API endpoint URL
 * @param {Object} config.params - Request parameters
 * @param {Function} config.history - Navigation function for redirects
 * @param {boolean} config.jsonPayload - Whether to send JSON payload instead of FormData
 * @param {Object} config.additionalParams - Additional fetch parameters
 * @param {Object} config.additionalHeaders - Additional request headers
 * @param {boolean} config.disableLoader - Whether to disable the loading indicator
 * @param {Function} config.dispatchData - Redux dispatch function
 * @param {Function} config.dataParser - Parser function to normalize response data (default: DATA_PARSERS.raw)
 * @param {Function} config.onParseError - Custom error handler for parse failures
 * 
 * @returns {Promise<any>} Parsed response data or error object
 * 
 * @example
 * // Basic usage with automatic JSON parsing
 * const data = await request({ 
 *   url: '/api/data', 
 *   params: { id: 1 },
 *   dispatchData 
 * });
 * 
 * @example
 * // With custom error handling
 * const data = await request({ 
 *   url: '/api/data',
 *   params: { id: 1 },
 *   dispatchData,
 *   onParseError: (error, rawData) => {
 *     console.error('Parse failed:', error);
 *     return { error: true, message: 'Custom error message' };
 *   }
 * });
 * 
 * @example
 * // Using text parser
 * const text = await request({ 
 *   url: '/api/text', 
 *   params: {},
 *   dispatchData,
 *   dataParser: DATA_PARSERS.text
 * });
 */

const request = async ({ 
    url, 
    params = {}, 
    history, 
    jsonPayload = false, 
    additionalParams = {}, 
    additionalHeaders = {}, 
    disableLoader = false, 
    dispatchData,
    dataParser = DATA_PARSERS.raw,
    onParseError
}) => {
    if (params.exportData) {
        return exportRequest(url, params);
    }
    disableLoader = disableLoader || typeof dispatchData !== 'function';
    if (!disableLoader) {
        dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: true });
    }
    pendingRequests++;

    const reqParams = {
        method: 'POST',
        credentials: 'include',
        url: url,
        headers: jsonPayload ? { ...additionalHeaders } : { 'Content-Type': 'multipart/form-data', ...additionalHeaders },
        ...additionalParams
    };

    if (params && Object.keys(params).length > 0) {
        reqParams.data = jsonPayload ? params : getFormData(params);
    }

    try {
        const response = await transport(reqParams);
        pendingRequests--;
        let data = response.data;

        if (pendingRequests === 0 && !disableLoader) {
            dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: false });
        }

        // Handle HTTP errors here
        if (response.status === HTTP_STATUS_CODES.SESSION_EXPIRED && history) {
            history('/login');
            return;
        }

        if (response.status === HTTP_STATUS_CODES.FORBIDDEN) {
            return { error: true, message: data.message || 'Access Denied!' };
        }

        if (response.status !== HTTP_STATUS_CODES.OK) {
            // You can return the error object or handle as needed
            return { error: true, message: data.message || 'An error occurred' };
        }

        // Apply data parser to normalize response
        try {
            data = dataParser(data);
        } catch (parseError) {
            if (onParseError) {
                return onParseError(parseError, data);
            }
            // Return error in standard format
            return { 
                error: true, 
                message: 'Failed to parse response data', 
                parseError: parseError.message,
                rawData: data 
            };
        }

        return data;
    } catch (ex) {
        pendingRequests--;
        if (pendingRequests === 0 && !disableLoader) {
            dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: false });
        }
        // Only network errors will be caught here
        return { error: true, message: ex.message || 'Network error' };
    }
};

export {
    HTTP_STATUS_CODES,
    transport,
    DATA_PARSERS
};

export default request;
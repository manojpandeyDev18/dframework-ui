# CRUD Helper - Request & Response Hooks

This document covers the changes made to `crud-helper.js` and how to use the `createRequestPayload` and `parseResponsePayload` model hooks.

## `createRequestPayload`

An **async** function defined on the model that is called just before each HTTP request is made. It receives the full request object by reference, so mutations apply directly.

### Signature

```js
async createRequestPayload(requestData, context)
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `requestData` | `Object` | The request configuration object that will be passed to the HTTP layer. You can mutate this directly. |
| `context` | `Object` | Contextual metadata about the current operation (varies by action). |

### Context by Action

| Action | Context Properties |
|--------|-------------------|
| **list** | `{ where, sortModel, page, pageSize, parentFilters, action, dataParsers }` |
| **export** | `{ where, sortModel, page, pageSize, parentFilters, action, url }` |
| **load** | `{ id, parentFilters, model, where, api, action: 'load' }` |
| **save** | `{ id, model, values, api, action: 'save' }` |
| **delete** | `{ id, model, api, action: 'delete' }` |
| **lookups** | `{ model, lookups, scopeId, dispatchData }` |

### `requestData` Structure

For most operations, `requestData` contains:

```js
{
    url: String,              // The endpoint URL
    additionalParams: Object, // e.g. { method: 'GET' }
    additionalHeaders: Object,// e.g. { 'Content-Type': 'application/json' }
    params: Object,           // The request body/payload
    jsonPayload: Boolean,     // Whether to send as JSON
    dispatchData: Function,   // Redux dispatch function
    dataParser: Function      // (list only) response parser
}
```

### Example Usage

```jsx
const orderModel = new UiModel({
    title: "Orders",
    api: "/api/orders",
    columns: [
        { field: "id", type: "number", headerName: "ID" },
        { field: "status", type: "string", headerName: "Status" },
        { field: "total", type: "number", headerName: "Total" }
    ],

    // Modify request before it is sent
    createRequestPayload: async (requestData, context) => {
        // Add a custom header
        requestData.additionalHeaders = {
            ...requestData.additionalHeaders,
            'X-Custom-Token': 'my-token'
        };

        // Add extra params for list requests
        if (context.action === 'list') {
            requestData.params.includeArchived = false;
        }

        // Change the URL for save operations
        if (context.action === 'save') {
            requestData.url = `/api/orders/custom-save`;
        }
    }
});
```

### Example: Switching to a Different Data Parser

```jsx
const model = new UiModel({
    // ...columns, api, etc.

    createRequestPayload: async (requestData, context) => {
        if (context.action === 'list') {
            // Use a different data parser provided in context
            requestData.dataParser = context.dataParsers.text;
        }
    }
});
```

---

## `parseResponsePayload`

An **async** function defined on the model that is called after the HTTP response is received. When provided, it **replaces** the default response processing (date conversion, displayIndex mapping, etc.), giving you full control over how data is set.

### Signature

```js
async parseResponsePayload({ responseData, model, dateColumns })
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `responseData` | `Object` | The raw response from the server. |
| `model` | `Object` | The current UiModel instance. |
| `dateColumns` | `Array` | *(list only)* Array of `{ field, keepLocal, keepLocalDate }` objects for date columns. Not provided for `load` or `lookups`. |

### Return Value

The function must return the data in the shape expected by the consumer:

| Action | Expected Return Shape |
|--------|----------------------|
| **list** (`getList`) | `{ records: Array, recordCount: Number, lookups: Object }` |
| **load** (`getRecord`) | `{ id, title, record: Object, lookups: Object }` |
| **lookups** (`getLookups`) | The lookups object to pass to `setActiveRecord`. |

### Example Usage

```jsx
const productModel = new UiModel({
    title: "Products",
    api: "/api/products",
    columns: [
        { field: "id", type: "number", headerName: "ID" },
        { field: "name", type: "string", headerName: "Name" },
        { field: "price", type: "number", headerName: "Price" },
        { field: "createdAt", type: "date", headerName: "Created" }
    ],

    // Custom response processing
    parseResponsePayload: async ({ responseData, model, dateColumns }) => {
        // Transform the response to match expected structure
        const records = responseData.items.map(item => ({
            ...item,
            price: item.price / 100  // Convert cents to dollars
        }));

        return {
            records,
            recordCount: responseData.recordCount,
            lookups: responseData.lookups || {}
        };
    }
});
```

### Example: Custom Record Loading

```jsx
const model = new UiModel({
    // ...columns, api, etc.

    parseResponsePayload: async ({ responseData, model }) => {
        // Flatten nested API response for the form
        const { data, lookups } = responseData;
        return {
            id: data.id,
            title: data.displayName,
            record: {
                ...data,
                fullAddress: `${data.street}, ${data.city}, ${data.state}`
            },
            lookups
        };
    }
});
```

---

## Using Both Hooks Together

You can combine both hooks to fully control the request/response lifecycle:

```jsx
const model = new UiModel({
    title: "Invoices",
    api: "/api/invoices",
    columns: [/* ...columns */],

    createRequestPayload: async (requestData, context) => {
        // Add authentication and tenant context
        requestData.additionalHeaders = {
            ...requestData.additionalHeaders,
            'X-Tenant-Id': getCurrentTenantId()
        };

        // Add server-side includes for list requests
        if (context.action === 'list') {
            requestData.params.include = ['customer', 'lineItems'];
        }
    },

    parseResponsePayload: async ({ responseData, model, dateColumns }) => {
        // Flatten nested customer data into each record
        const records = responseData.records.map(record => ({
            ...record,
            customerName: record.customer?.name,
            customerEmail: record.customer?.email
        }));

        return {
            records,
            recordCount: responseData.recordCount,
            lookups: responseData.lookups
        };
    }
});
```

---

## `standAloneFilters`

Filters listed in `model.standAloneFilters` are excluded from the `where` array and instead spread as top-level keys in the request payload. This is useful when the backend expects certain filter values as dedicated parameters rather than inside the `where` clause.

### Usage

```jsx
const model = new UiModel({
    title: "Reports",
    api: "/api/reports",
    standAloneFilters: ["region", "year"],  // Can also be a single string: "region"
    columns: [
        { field: "region", type: "string", headerName: "Region" },
        { field: "year", type: "number", headerName: "Year" },
        { field: "revenue", type: "number", headerName: "Revenue" }
    ]
});

// When the user filters by region="US" and year=2025, the request payload becomes:
// { start: 0, limit: 25, where: [...other filters], region: "US", year: 2025 }
// instead of:
// { start: 0, limit: 25, where: [{ field: "region", value: "US" }, { field: "year", value: 2025 }] }
```

---

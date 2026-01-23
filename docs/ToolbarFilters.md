# Toolbar Filters Feature

## Overview

The Toolbar Filters feature allows you to display always-visible filter controls in the grid toolbar. Instead of requiring users to click the "Filters" button to access filtering options, you can configure specific columns to have their filter controls permanently visible in the toolbar for easier access.

## Configuration

To enable toolbar filters for a column, add a `toolbarFilter` property to the column definition in your UiModel.

### Basic Usage

```js
import { UiModel, GridBase } from '@durlabh/dframework-ui';

const model = new UiModel({
  title: "Users",
  api: "users",
  columns: [
    {
      field: "name",
      type: "string",
      gridLabel: "Name",
      toolbarFilter: {
        defaultOperator: "startsWith",  // Optional
        defaultFilterValue: "",          // Optional
        label: "Filter by Name"          // Optional - defaults to column header
      }
    },
    {
      field: "dateOfBirth",
      type: "date",
      gridLabel: "Date of Birth",
      toolbarFilter: {
        defaultOperator: "is",
        defaultFilterValue: "2024-01-01"
      }
    },
    {
      field: "gender",
      type: "select",
      gridLabel: "Gender",
      lookup: "genderOptions",
      toolbarFilter: {
        defaultOperator: "isAnyOf",
        defaultFilterValue: ["Male", "Female"]
      }
    },
    {
      field: "age",
      type: "number",
      gridLabel: "Age"
      // No toolbarFilter - this column won't appear in toolbar
    }
  ]
});

// Use in your component
<GridBase model={model} />
```

## ToolbarFilter Configuration Options

### `toolbarFilter` Object Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `defaultOperator` | string | No | The filter operator to use. If not specified, a default operator is chosen based on column type. |
| `defaultFilterValue` | any | No | The initial filter value. If specified, the filter will be applied on grid load. |
| `label` | string | No | The label to display for the filter input. Defaults to the column's `header`, `label`, or `field`. |

## Default Operators by Column Type

If you don't specify a `defaultOperator`, the following defaults are used:

| Column Type | Default Operator | Description |
|-------------|------------------|-------------|
| `string` | `startsWith` | Matches if the cell value starts with the filter value |
| `number` | `=` | Matches if values are equal |
| `date` | `is` | Matches exact date |
| `dateTime` | `is` | Matches exact date/time |
| `boolean` | `is` | Matches exact boolean value |
| `select` | `isAnyOf` | Matches if value is in the selected options |
| `lookup` | `isAnyOf` | Matches if value is in the selected options |

## Operator Labels in UI

Toolbar filters automatically display operator symbols or labels to clarify the filter behavior:

- **Number operators**: Display as symbols (e.g., `=`, `≥`, `≤`, `>`, `<`, `≠`) to save space
- **String operators**: Show verbose labels only for non-obvious operators (e.g., "exact match", "contains", "ends with")
- **Default string operator** (`startsWith`): No label shown to keep the UI clean
- **Other operators**: Display readable text (e.g., "is", "is not", "any of")

### Examples of Operator Display

- Number field with `>=` operator: Label shows `"≥ Age"`
- String field with `startsWith` operator: Label shows `"Name"` (no operator shown)
- String field with `equals` operator: Label shows `"Name (exact match)"`
- String field with `contains` operator: Label shows `"Name (contains)"`

## Supported Filter Operators

### String Operators
- `contains` - Contains text (case-insensitive)
- `equals` - Exact match
- `startsWith` - Starts with text
- `endsWith` - Ends with text
- `isEmpty` - Field is empty
- `isNotEmpty` - Field has a value

### Number Operators
- `=` - Equals
- `!=` - Not equals
- `>` - Greater than
- `>=` - Greater than or equal
- `<` - Less than
- `<=` - Less than or equal

### Date/DateTime Operators
- `is` - Exact date match
- `not` - Not this date
- `after` - After this date
- `onOrAfter` - On or after this date
- `before` - Before this date
- `onOrBefore` - On or before this date

### Boolean Operators
- `is` - Is true/false

### Select/Lookup Operators
- `is` - Equals value
- `not` - Not equals value
- `isAnyOf` - Matches any of the selected values (supports multiple selection)

## Examples

### Example 1: String Filter with "Starts With"

```js
{
  field: "name",
  type: "string",
  gridLabel: "Name",
  toolbarFilter: {
    defaultOperator: "startsWith",
    label: "Name starts with"
  }
}
```

### Example 2: Date Filter with Default Value

```js
{
  field: "createdDate",
  type: "date",
  gridLabel: "Created Date",
  toolbarFilter: {
    defaultOperator: "onOrAfter",
    defaultFilterValue: "2024-01-01",
    label: "Created After"
  }
}
```

### Example 3: Multi-Select Lookup Filter

```js
{
  field: "status",
  type: "select",
  gridLabel: "Status",
  lookup: "statusOptions",
  toolbarFilter: {
    defaultOperator: "isAnyOf",
    defaultFilterValue: ["Active", "Pending"],
    label: "Status"
  }
}
```

### Example 4: Boolean Filter

```js
{
  field: "isActive",
  type: "boolean",
  gridLabel: "Active Status",
  toolbarFilter: {
    defaultOperator: "is",
    label: "Show Active"
  }
}
```

### Example 5: Number Range Filter

```js
{
  field: "age",
  type: "number",
  gridLabel: "Age",
  toolbarFilter: {
    defaultOperator: ">=",
    defaultFilterValue: 18,
    label: "Minimum Age"
  }
}
```

## Complete Example

Here's a complete example showing multiple toolbar filters:

```js
import React from 'react';
import { UiModel, GridBase } from '@durlabh/dframework-ui';

function UserGrid() {
  const userModel = new UiModel({
    title: "Users",
    api: "users",
    columns: [
      {
        field: "id",
        type: "number",
        gridLabel: "ID",
        flex: 1
      },
      {
        field: "name",
        type: "string",
        gridLabel: "Name",
        flex: 2,
        toolbarFilter: {
          defaultOperator: "startsWith",
          label: "Name"
        }
      },
      {
        field: "dateOfBirth",
        type: "date",
        gridLabel: "Date of Birth",
        flex: 1,
        toolbarFilter: {
          defaultOperator: "is",
          label: "Birth Date"
        }
      },
      {
        field: "gender",
        type: "select",
        gridLabel: "Gender",
        lookup: "genderOptions",
        flex: 1,
        toolbarFilter: {
          defaultOperator: "isAnyOf",
          label: "Gender"
        }
      },
      {
        field: "email",
        type: "string",
        gridLabel: "Email",
        flex: 2
        // No toolbar filter - email can still be filtered via filter panel
      },
      {
        field: "isActive",
        type: "boolean",
        gridLabel: "Active",
        flex: 1
      }
    ]
  });

  return <GridBase model={userModel} />;
}

export default UserGrid;
```

## Filter Behavior

1. **Initial Load**: If a column has a `defaultFilterValue`, that filter is automatically applied when the grid loads.

2. **Filter Updates**: When a user changes a toolbar filter value:
   - The filter is immediately applied to the grid
   - The grid data is re-fetched with the new filter
   - Other existing filters (from the filter panel or other toolbar filters) remain active

3. **Clearing Filters**: 
   - Setting a toolbar filter to an empty value removes that filter
   - The "Clear Filter" button in the toolbar clears ALL filters, including toolbar filters
   - Toolbar filters are cleared but the inputs remain visible

4. **Filter Panel Interaction**: Toolbar filters and filter panel filters work together seamlessly. Both types of filters are combined using the logic operator (AND/OR).

## UI/UX Considerations

1. **Toolbar Space**: Be mindful of toolbar space. Too many toolbar filters can make the toolbar cluttered. Recommended: 2-4 toolbar filters maximum.

2. **Responsive Design**: Toolbar filters wrap to multiple lines on smaller screens.

3. **Filter Count Badge**: The filter count badge on the "Filters" button includes both toolbar filters and filter panel filters.

4. **Accessibility**: All toolbar filters have proper labels and are keyboard accessible.

## Advanced Tips

### Combining with defaultFilters

You can combine toolbar filters with the model's `defaultFilters` property:

```js
const model = new UiModel({
  title: "Active Users",
  api: "users",
  defaultFilters: [
    { field: "isDeleted", operator: "is", value: false }
  ],
  columns: [
    {
      field: "name",
      type: "string",
      gridLabel: "Name",
      toolbarFilter: {
        defaultOperator: "contains"
      }
    }
    // ... other columns
  ]
});
```

In this case, `isDeleted = false` will always be applied as a base filter, while the name toolbar filter is user-controllable.

### Using with Grid Preferences

Toolbar filters work with grid preferences. When a user saves their grid preferences, the current toolbar filter values are saved and restored when the preference is loaded.

## Troubleshooting

### Toolbar filter not showing
- Ensure the column has `toolbarFilter` property defined
- Check that the column is in the `columns` array
- Verify the column type is supported

### Filter not applying
- Check browser console for errors
- Ensure `defaultOperator` is valid for the column type
- Verify the API endpoint supports the filter parameters

### Lookup/Select filter showing empty
- Ensure lookup data is available in the grid's data response
- Check that the `lookup` property matches the lookup key in the response
- Verify the lookup data format: `[{ label: "Label", value: "value" }]`

## API Reference

### Column ToolbarFilter Configuration

```typescript
interface ToolbarFilterConfig {
  defaultOperator?: string;      // Filter operator to use
  defaultFilterValue?: any;      // Initial filter value
  label?: string;                // Input label (optional)
}

interface ColumnDefinition {
  field: string;
  type: string;
  gridLabel: string;
  toolbarFilter?: ToolbarFilterConfig;
  // ... other column properties
}
```

## Related Features

- **Header Filters**: Column-specific filters that appear in column headers (enabled via `showHeaderFilters: true`)
- **Filter Panel**: The traditional filter panel accessed via the "Filters" button
- **Grid Preferences**: Save and restore filter states including toolbar filters

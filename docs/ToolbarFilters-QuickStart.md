# Toolbar Filters - Quick Start Example

This example demonstrates how to use the new toolbar filters feature.

## Basic Example

```jsx
import React from 'react';
import { UiModel, GridBase } from '@durlabh/dframework-ui';

function UsersGrid() {
  const userModel = new UiModel({
    title: "Users",
    api: "users",
    columns: [
      {
        field: "id",
        type: "number",
        gridLabel: "ID",
        flex: 0.5
      },
      {
        field: "name",
        type: "string",
        gridLabel: "Name",
        flex: 1,
        // Add toolbar filter with "starts with" operator
        toolbarFilter: {
          defaultOperator: "startsWith",
          label: "Filter Name"
        }
      },
      {
        field: "email",
        type: "string",
        gridLabel: "Email",
        flex: 1.5
      },
      {
        field: "dateOfBirth",
        type: "date",
        gridLabel: "Date of Birth",
        flex: 1,
        // Add toolbar filter with default value
        toolbarFilter: {
          defaultOperator: "is",
          defaultFilterValue: "2000-01-01",
          label: "Birth Date"
        }
      },
      {
        field: "status",
        type: "select",
        gridLabel: "Status",
        lookup: "userStatuses",
        flex: 1,
        // Add multi-select toolbar filter
        toolbarFilter: {
          defaultOperator: "isAnyOf",
          defaultFilterValue: ["Active"],
          label: "Status"
        }
      },
      {
        field: "isActive",
        type: "boolean",
        gridLabel: "Active",
        flex: 0.5
      }
    ]
  });

  return <GridBase model={userModel} />;
}

export default UsersGrid;
```

## What You Get

With this configuration:

1. **Name Filter**: A text field in the toolbar that filters names using "starts with"
2. **Birth Date Filter**: A date picker in the toolbar pre-filled with "2000-01-01"
3. **Status Filter**: A multi-select dropdown showing only "Active" status by default

## Toolbar Layout

The toolbar will display like this:

```
[Add User] [Select All]  |  [Name Filter] [Birth Date Filter] [Status Filter]  |  [Columns] [Filters] [Clear] [Export]
```

## How It Works

- **Filters are always visible** - No need to click the "Filters" button
- **Changes are immediate** - Grid updates as soon as you change a filter value
- **Works with other filters** - Toolbar filters combine with header filters and filter panel
- **Clear Filter button** - Clears ALL filters including toolbar filters

## Advanced Example with All Features

```jsx
const advancedModel = new UiModel({
  title: "Products",
  api: "products",
  defaultFilters: [
    // This filter is always applied (backend filter)
    { field: "isDeleted", operator: "is", value: false }
  ],
  columns: [
    {
      field: "name",
      type: "string",
      gridLabel: "Product Name",
      flex: 2,
      toolbarFilter: {
        defaultOperator: "contains",
        label: "Search Products"
      }
    },
    {
      field: "category",
      type: "select",
      gridLabel: "Category",
      lookup: "categories",
      flex: 1,
      toolbarFilter: {
        defaultOperator: "isAnyOf",
        label: "Categories"
      }
    },
    {
      field: "price",
      type: "number",
      gridLabel: "Price",
      flex: 1,
      toolbarFilter: {
        defaultOperator: ">=",
        defaultFilterValue: 0,
        label: "Min Price"
      }
    },
    {
      field: "inStock",
      type: "boolean",
      gridLabel: "In Stock",
      flex: 0.5,
      toolbarFilter: {
        defaultOperator: "is",
        label: "Stock Status"
      }
    },
    {
      field: "createdDate",
      type: "date",
      gridLabel: "Created Date",
      flex: 1,
      toolbarFilter: {
        defaultOperator: "onOrAfter",
        label: "Created After"
      }
    }
  ]
});
```

## Tips

1. **Don't overload the toolbar** - Use 2-4 toolbar filters max for best UX
2. **Choose the right operators** - Match operators to use cases (e.g., "startsWith" for names)
3. **Provide good labels** - Make it clear what each filter does
4. **Use default values sparingly** - Only set defaults when it makes sense for your use case
5. **Combine with other filters** - Use toolbar filters for common searches, keep advanced filters in the panel

## Supported Operators by Type

### String
- `startsWith` (default - no operator label shown)
- `contains`
- `equals`
- `endsWith`

### Number
- `=` (default) - Displayed as `=`
- `!=` - Displayed as `≠`
- `>` - Displayed as `>`
- `>=` - Displayed as `≥`
- `<` - Displayed as `<`
- `<=` - Displayed as `≤`

### Date/DateTime
- `is` (default)
- `not`
- `after`
- `onOrAfter`
- `before`
- `onOrBefore`

### Boolean
- `is` (default)

### Select/Lookup
- `isAnyOf` (default - supports multiple selection)
- `is`
- `not`

For complete documentation, see [ToolbarFilters.md](./ToolbarFilters.md)

# how we will use the durlabh/dframework-ui

**:** In Dframework we have create Multple Component for our Use

**1:** SnackBar
**2:** Dialog
**3:** Grid
**4:** ChildGrid

**Example:** \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** Example of SnackBar \***\*\*\*\*\***\*\*\***\*\*\*\*\***

# How we will use the SnackBar Component

## frist import in your Index.js folder of your Project

```js
import React from "react";
import { SnackbarProvider } from "@durlabh/dfamework-ui";
export default function App() {
  return (
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 1000 }}>
      ******************* Import Your Component ********************
    </SnackbarProvider>
  );
}
```

## Then use in Your Project

```js
import React from "react";
import { useSnackbar } from "@durlabh/dfamework-ui";
export default function App() {
  const snac = useSnackbar();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          snac.showMessage("An error occured, please try after some time.")
        }
      >
        Show Snackbar
      </Button>
    </div>
  );
}
```

**Example:** \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** Example of Dialog \***\*\*\*\*\***\*\*\***\*\*\*\*\***

# How we will use the Dialog Component

```js
import {DialogComponent} from '@durlabh/dfamework-ui';
import React from 'react'
import
export default function App() {
  return (
    <div>
       <DialogComponent open={true}  onCancel={false} title="Confirm Delete"  children ="Are you sure you want to delete "/>
    </div>
  )
}
```

**Example:** \***\*\*\*\*\***\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***\*\*\***\*\*\*\*\*** Example of Grid \***\*\*\*\*\***\*\*\***\*\*\*\*\***

# Example of Grid

```js
import React from "react";
import { UiModel } from "./lib/components/Grid/ui-models";
export default function App() {
  const surveyModel = new UiModel({
    title: "Questionnaires",
    defaultSort: "SurveyTypeName ASC",
    linkColumn: "SurveyTypeName",
    api: "SurveyType",
    idProperty: "id",
    columns: [
      {
        field: "id",
        type: "number",
        flex: 1,
        headerName: "User Id",
        label: null,
        pinned: "right"
      },
      { field: "title", type: "string", headerName: "User Post Id", flex: 1 },
      {
        field: "Completed",
        type: "boolean",
        headerName: "Completion Status",
        flex: 1
      }
    ]
  });
  return (
    <div>
      <surveyModel.Grid />
    </div>
  );
}
```

# Example of ChildGrid of Grid

```js
import React from "react";
import { UiModel } from "./lib/components/Grid/ui-models";
export default function App() {
  const surveyModel = new UiModel({
    title: "Questionnaires",
    defaultSort: "SurveyTypeName ASC",
    linkColumn: "SurveyTypeName",
    api: "SurveyType",
    idProperty: "id",
    columns: [
      {
        field: "id",
        type: "number",
        flex: 1,
        headerName: "User Id",
        label: null,
        pinned: "right"
      },
      { field: "title", type: "string", headerName: "User Post Id", flex: 1 },
      {
        field: "Completed",
        type: "boolean",
        headerName: "Completion Status",
        flex: 1
      }
    ]
  });
  return (
    <div>
      <surveyModel.ChildGrid />
    </div>
  );
}
```

# Properties of UiModel

## UiModel Configuration Properties

| **Property**            | **Type**   | **Description**                                                  | **Can be extended from**                   | **Required**                 |
| ----------------------- | ---------- | ---------------------------------------------------------------- | ------------------------------------------ | ---------------------------- |
| `title`                 | `string`   | The title of the grid.                                           |                                            |                              |
| `formTitle`             | `string`   | Title used in the form layout.                                   |                                            |                              |
| `gridTitle`             | `string`   | Title used in the grid layout.                                   |                                            |                              |
| `gridSubTitle`          | `string`   | Subtitle displayed below the grid title.                         |                                            |                              |
| `api`                   | `string`   | The API endpoint to fetch grid data.                             | `"title"`                                  |                              |
| `idProperty`            | `string`   | Specifies the unique identifier for grid rows.                   | `"api, title"`                             |                              |
| `standard`              | `string`   | Checks whether it is a standard table.                           |                                            |                              |
| `defaultSort`           | `string`   | Specifies the default sort order for the grid data.              |                                            |                              |
| `linkColumn`            | `string`   | The column that contains the main link for the grid rows.        |                                            |                              |
| `columns`               | `array`    | The list of column definitions for the grid.                     | See the **Column Properties Table** below. |                              |
| `columnVisibilityModel` | `object`   | Defines the visibility of specific columns in the grid.          |                                            | Need to check if needed      |
| `isClient`              | `boolean`  | Determines if the grid operates in client mode.                  |                                            |                              |
| `defaultFilters`        | `array`    | Sets the default filters applied to the grid.                    |                                            |                              |
| `showHeaderFilters`     | `boolean`  | Displays header filters on grid columns.                         |                                            |                              |
| `readOnly`              | `boolean`  | If true, the grid becomes read-only.                             |                                            |                              |
| `doubleClicked`         | `boolean`  | Controls if double-clicking is enabled for rows.                 |                                            | Not needed                   |
| `permissions`           | `object`   | Permissions for grid actions like add, edit, delete, and export. |                                            |                              |
| `joinColumn`            | `string`   | Specifies the column used for joining data with a parent grid.   |                                            |                              |
| `standard`              | `boolean`  | Specified explicitly as false to hide the **createdOn**, **addCreatedByColumn**, **addModifiedOnColumn** and **addModifiedByColumn** columns.    |                                            |                              |
| `addCreatedOnColumn`    | `boolean`  | Specified explicitly as false to hide the createdOn columns.     |                                            |                              |
| `addCreatedByColumn`    | `boolean`  | Specified explicitly as false to hide the createdBy columns.     |                                            |                              |
| `addModifiedOnColumn`   | `boolean`  | Specified explicitly as false to hide the modifiedOn columns.    |                                            |                              |
| `addModifiedByColumn`   | `boolean`  | Specified explicitly as false to hide the modifiedBy columns.    |                                            |                              |
| `controllerType`        | `string`   | Specifies the type of controller (`cs` for client/server).       |                                            |                              |
| `template`              | `string`   | Template configuration for exporting.                            |                                            | Seems project specific CoolR |
| `pivotApi`              | `string`   | API endpoint for pivot-specific data.                            |                                            |                              |
| `showPivotExportBtn`    | `boolean`  | Displays the button for exporting pivot data.                    |                                            | Should not be needed         |
| `preferenceId`          | `string`   | Identifier for saved grid preferences.                           |                                            |                              |
| `tablePreferenceEnums`  | `object`   | Enumerations for specific table preferences.                     |                                            |                              |
| `rowRedirectLink`       | `string`   | URL to redirect when a row is clicked.                           |                                            |                              |
| `showAddIcon`           | `boolean`  | Indicates if the Add, Assign and Remove button icon should be displayed.          |                                            | Not needed                   |
| `pageTitle`             | `string`   | Sets the title for the page.                                     |                                            | Not needed                   |
| `addUrlParamKey`        | `string`   | Key for additional URL parameters when navigating to forms.      |                                            |                              |
| `searchParamKey`        | `string`   | Key for fetching parameters from the URL.                        |                                            | Duplicate as addUrlParamKey  |
| `enableGoBack`          | `boolean`  |  Property determines whether to show the back button on the Title.|	false     							   |        					  |
| `showOnlyExcelExport`   | `boolean`  | Limits export options to only Excel formats.                     |                                            |                              |
| `initialValues`         | `object`   | Initial values for form fields.                                  |                                            |                              |
| `hideRelationsInAdd`    | `boolean`  | Hides relations section in add mode.                             |                                            |                              |
| `navigateBack`          | `string`   | Specifies the route for navigation on cancel or save.            |                                            |                              |
| `applyFieldConfig`      | `function` | A function to apply custom field configurations.                 |                                            |                              |
| `getValidationSchema`   | `function` | Function to return the validation schema for the form.           |                                            |                              |
| `relations`             | `array`    | Defines the relationship configurations for related grids.       |                                            |                              |

## Column Properties Table

## Column Properties Table

| **Property**          | **Type**         | **Description**                                                      | **Can be extended from** |
| --------------------- | ---------------- | -------------------------------------------------------------------- | ------------------------ |
| `field`               | `string`         | The name of the field displayed in the column.                       |                          |
| `label`               | `string`         | Label text to display for available and assigned values.             |                          |
| `headerName`          | `string`         | The label displayed as the column header in grid.                    |   label                  |
| `type`                | `string`         | Specifies the type of data in the column (e.g., `number`, `string`). |                          |
| `flex`                | `number`         | Defines the column's flexibility in width compared to others.        |                          |
| `pinned`              | `string`         | Determines if the column is pinned to the right.                     | left					 |
| `sortable`            | `boolean`        | Specifies if the column can be sorted.                               |                          |
| `filterable`          | `boolean`        | Specifies if the column can be filtered.                             |                          |
| `editable`            | `boolean`        | Indicates if the cells in the column are editable.                   |                          |
| `tab`                 | `string`         | Specifies the tab associated with this column in a tabbed layout.    |                          |
| `required`            | `boolean`        | Indicates if this column is required in the form.                    |                          |
| `validation`          | `function`       | Custom validation function for the column's data.                    |                          |
| `hidden`              | `boolean`        | Hides the column from the grid.                                      |                          |
| `lookupKey`           | `string`         | Key to fetch data for lookup fields in this column.                  | Duplicate                |
| `renderCell`          | `function`       | Custom renderer for the cell content.                                |                          |
| `align`               | `string`         | Specifies text alignment for the column (`left`, `center`, `right`). |                          |
| `tooltip`             | `string`         | Tooltip to display on hover over the column header.                  |                          |
| `groupable`           | `boolean`        | Indicates if the column can be grouped.                              |                          |
| `width`               | `number`         | Specifies the width of the column in pixels.                         |                          |
| `resizable`           | `boolean`        | Indicates if the column width can be resized by the user.            |                          |
| `readOnly`            | `boolean`        | Marks the column as read-only.                                       |                          |
| `shouldDisableDate`   | `function`       | A function to disable specific dates in the `DatePicker`.            |                          |
| `showErrorText`       | `boolean`        | Indicates if error text should be displayed when validation fails.   |                          |
| `helperText`          | `string`         | Text to display as helper information below the field.               |                          |
| `minDateTime`         | `object`         | Minimal selectable moment of time with binding to date, to set min time in each day use minTime.`.                |                          |
| `minDate`         	| `object`         | Minimal selectable date..                |                          |
| `maxDate`       		| `object`         | Maximal selectable date.            |                          |
| `maxDateTime`         | `object`         | Maximal selectable moment of time with binding to date, to set max time in each day use maxTime.              |                          |
| `multiSelect`         | `boolean`        | Enables multiple selections in a `Select` field.                     |                          |
| `parentComboField`    | `string`         | Field name used to fetch dependent data for a `Select` field.        |                          |
| `lookup`              | `string`/`array` | Defines the lookup source for dropdown values in the column.         |                          |
| `assigned`            | `boolean`        | Indicates if the field displays assigned values.                     | Coolr specific           |
| `onAssignChange`      | `function`       | Callback triggered when assigned values are modified.                | Coolr specific           |
| `disableCellRedirect` | `boolean`        | Disables cell click redirection for the column.                      |                          |
| `useLinkColumn`       | `boolean`        | Specifies if the column uses a link for navigation.                  |                          |
| `variant`             | `string`         | Specifies the variant for fields (e.g., `standard`, `filled`).       |                          |
| `multiline`           | `boolean`        | Indicates if the text field should support multiple lines.           |                          |
| `rows`                | `number`         | Number of rows to display in a multiline text field.                 |                          |
| `isUtc`               | `boolean`        | Indicates if the field value is stored in UTC format.                |                          |
| `preferenceId`        | `string`         | Identifier for saved grid preferences.                               | modal preference id      |
| `shouldDisableDate`   | `function`       | A function that takes a date and formik as arguments and returns a boolean. |                   |
# **Field Components Properties Table**

You can use these components by defining the type in the **Properties** column.

## **List of Types**

### 1. **Type: `boolean`**
Represents a **Checkbox** component.

- Allows true, false values.
- **`disabled`** (boolean): Determines whether the checkbox is interactive.  
  - When `disabled` is set to `true`, users cannot change the checkbox value.
- Example: ``` { "type": "boolean", "required": true | false } ```

---

### 2. **Type: `select`**
Represents a **Select** component.
- Defines the lookup source for dropdown values in the column.
- Example: ``` { "type": "select", "required": true | false, lookup: 'scopetype' } ```

---

### 3. **Type: `string | number`**
Represents a **TextField** component.

- **`autoComplete`** (string):  
  - Helps users complete forms faster, particularly on mobile devices.  
  - Acts more as an autofill feature rather than traditional autocomplete.
- Minimum (min) and maximum (max) length constraints.
- Example: ``` { "type": "string | number", "min": 3, "max": 20, "required": true | false } ```

---

### 4. **Type: `password`**
Represents a **TextField** component with a hide/show password feature.

- Allows a default masked value (******).
- Requires at least 8 characters.
- Must include uppercase, lowercase, numbers, and special characters.
- Example: ``` { "type": "password", "required": true } ```

---

### 5. **Type: `date`**
Represents a **DatePicker** component.
- Accepts date values.
- Converts empty or null values to null.
- Requires a valid date format.
- This component is used for selecting a date only.
- Example: ``` { "type": "date", "required": true } ```

---

### 6. **Type: `dateTime`**
Represents a **DateTimePicker** component.
- Similar to date, but this component is used for selecting both **date** and **time**.
- Example: ``` { "type": "dateTime", "required": true } ```

---

### 7. **Type: `time`**
Represents a **TimePicker** component.
- This component is used for selecting **time**.
- Example: ``` { "type": "time", "required": true } ```

---

### 8. **Type: `oneToMany`**
Represents a **GridTransfer** component.
- This component is used to transfer columns between grids.
- The `relation` property is used to establish a connection between the parent entity and its associated child records. 
- Example: ``` { "type": "oneToMany", "relation": 'child grid' } ```

---

### 9. **Type: `radio`**
Represents a **RadioField** component.
- Defines the lookup source for dropdown values in the column.
- Example: ``` { "type": "radio", "lookup": 'Region' } ```

---

### 10. **Type: `autocomplete`**
Represents an **AutocompleteField** component.
- Defines the lookup source for dropdown values in the column.
- The **`Autocomplete`** component enhances text input by providing a dropdown list of suggested options while allowing free text entry. It is useful for search fields, selection lists, and filtering.
- Example: ``` { "type": "Autocomplete", "lookup": 'Region' } ```

---

### 11. **Type: `dayRadio`**
Represents a **DaySelection** component.

- The **DaySelection** component allows users to choose days in two ways:  
  🔹 **Predefined options** – **Weekends (Sat-Sun)** or **Weekdays (Mon-Fri)**.  
  🔹 **Custom selection** – Users manually pick specific days.
- Example: ``` { "type": "dayRadio" } ```

---

### 12. **Type: `email`**
Represents a **TextField** component used for email input.
- Must follow a valid email format.
- Example: ``` { "type": "email", "required": true | false } ```

---

### 13. **Type: `treeCheckbox`**
Represents a **SimpleTreeView** component.
- A simplified version of the Tree View component that receives its items as an array. This version is recommended for use with hardcoded items.
- Example: ``` { "type": "treeCheckbox" } ```

---

### 14. **Type: `document`**
Represents a **file upload document** component.
- Users can either enter an external document link or upload a file.  
- Dynamically switches between these options based on user selection.
- Example: ``` { "type": "document" } ```

---

### 15. **Type: `json`**
Represents a **JSON Field** component.
- This component dynamically generates input fields based on a JSON object stored in a Formik field. It allows users to edit key-value pairs within the JSON structure and automatically updates the Formik state with a debounced delay.
- Example: ``` { "type": "json" } ```

---
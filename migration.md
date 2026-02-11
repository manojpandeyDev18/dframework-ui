# Breaking changes

## Version 1.0.7 - StateProvider Consolidation & useState Refactor

### Major Architectural Changes

The framework has been restructured to consolidate all functionality into `StateProvider` and simplified to use `useState` instead of `useReducer`.

#### Breaking Changes:

1. **FrameworkProvider merged into StateProvider**
   - `FrameworkProvider` is now an alias for `StateProvider`
   - Single provider pattern - no need for nested providers
   - `SnackbarProvider` must wrap `StateProvider`

   ```js
   // New setup (recommended)
   import { SnackbarProvider, StateProvider } from "@durlabh/dframework-ui";
   
   <SnackbarProvider>
     <StateProvider apiEndpoints={{ default: 'http://localhost:3000/api' }}>
       {/* Your app */}
     </StateProvider>
   </SnackbarProvider>
   
   // Backward compatible (also works)
   <SnackbarProvider>
     <FrameworkProvider apiEndpoints={{ default: 'http://localhost:3000/api' }}>
       {/* Your app */}
     </FrameworkProvider>
   </SnackbarProvider>
   ```

2. **StateProvider State Restructured**
   - **Removed component-specific state** (now local to components):
     - `dataForm` (form mode) - now determined from URL pattern
     - `gridSettings` - managed locally in Grid
     - `preferences`, `currentPreference`, `totalPreferences` - managed in GridPreference
     - `filtersInHeader` - managed locally in Grid
     - `getLocal` - removed
   
   - **Renamed app-level state fields**:
     - `dataLocalization` → `locale`
     - `pageTitleDetails` → `pageTitle`
     - `getUserData` → `userData`

3. **Actions Replaced with Meaningful Method Names**
   - **Removed actions**:
     - `UPDATE_FORM_MODE` - form mode from URL
     - `UPDATE_DATE_TIME` → use `setDateTimeFormat()`
     - `UPDATE_LOCALIZATION` → use `setLocale()`
     - `PAGE_TITLE_DETAILS` → use `setPageTitle()`
     - `OPEN_MODAL` → use `setModal()`
     - `USER_DATA` → use `setUserData()`
     - `SET_GRID_SETTINGS` - managed locally
     - `UDPATE_PREFERENCES` - managed locally
     - `TOTAL_PREFERENCES` - managed locally
     - `SET_CURRENT_PREFERENCE_NAME` - managed locally
     - `PASS_FILTERS_TO_HEADER` - managed locally
   
   - **New methods**:
     - `setLocale(locale)` - Set application locale
     - `setDateTimeFormat(format)` - Set date/time format
     - `setPageTitle(title)` - Set page title
     - `setModal(modal)` - Set modal state
     - `setPageBackButton(button)` - Set back button
     - `setUserData(userData)` - Set user data
     - `setTimeZone(timeZone)` - Set timezone

4. **Form Mode Detection**
   - Form mode no longer uses global state
   - Copy mode detected from URL pattern: `/path/0-{sourceId}`
   - Normal edit mode: `/path/{id}`

5. **Loader Management**
   - Loader is now managed by CRUD helper functions (getList, getRecord, saveRecord, deleteRecord, getLookups)
   - Each CRUD function manages its own loader lifecycle using try/finally blocks
   - httpRequest is now a pure HTTP transport layer without loader management
   - No need to pass `showLoader`, `hideLoader`, or `dispatchData` to CRUD functions

6. **State Management**
   - Replaced useReducer with individual useState calls for simplicity
   - actions.js, stateReducer.js, and initialState.js files are retained for backward compatibility
   - dispatchData is provided for legacy code but new code should use setter methods (setPageTitle, setUserData, etc.)

#### Migration Guide:

**Step 1: Update Provider Setup**

```js
// Before
<SnackbarProvider>
  <FrameworkProvider>
    <StateProvider apiEndpoints={...}>
      <App />
    </StateProvider>
  </FrameworkProvider>
</SnackbarProvider>

// After
<SnackbarProvider>
  <StateProvider apiEndpoints={...}>
    <App />
  </StateProvider>
</SnackbarProvider>
```

**Step 2: Update State Access**

```js
// Before
const { stateData } = useStateContext();
const locale = stateData.dataLocalization;
const userData = stateData.getUserData;
const pageTitle = stateData.pageTitleDetails;

// After
const { stateData } = useStateContext();
const locale = stateData.locale;
const userData = stateData.userData;
const pageTitle = stateData.pageTitle;
```

**Step 3: Replace Dispatch Actions with Methods**

```js
// Before
dispatchData({ type: 'PAGE_TITLE_DETAILS', payload: { title: 'My Page' } });
dispatchData({ type: 'USER_DATA', payload: userData });
dispatchData({ type: 'UPDATE_LOCALIZATION', payload: 'es' });
dispatchData({ type: 'SET_TIMEZONE', payload: 'America/New_York' });

// After
const { setPageTitle, setUserData, setLocale, setTimeZone } = useStateContext();
setPageTitle({ title: 'My Page' });
setUserData(userData);
setLocale('es');
setTimeZone('America/New_York');
```

**Step 4: Update Hook Imports (Optional)**

```js
// Old (still works via alias)
import { useFramework } from "@durlabh/dframework-ui";
const { showLoader } = useFramework();

// New (recommended)
import { useStateContext } from "@durlabh/dframework-ui";
const { showLoader } = useStateContext();
```

#### Non-Breaking Changes:

- Grid and Form components work without changes
- `useFramework()` is an alias for `useStateContext()`
- `FrameworkProvider` is an alias for `StateProvider`
- All existing code continues to work with aliases

#### Internal Implementation Change (v1.0.7):

**Replaced `useReducer` with `useState`** for simpler implementation:
- No more Redux-style reducer pattern
- Each state field uses individual `useState`
- Removed `actions.js` and `stateReducer.js` boilerplate
- Better performance (no reducer overhead)
- Smaller bundle size (150.25 kB vs 151.43 kB)
- **Developer API unchanged** - all setter methods work identically

This is an internal change that doesn't affect how you use the library.

---

## Version 1.0.6 - FrameworkProvider Introduction

### Loader Management Refactoring

The loader management system was refactored to use automatic loader management at the point of API calls.

#### Key Changes:

1. **Automatic Loader Management**
   - Loader is now automatically managed by `httpRequest`
   - No need to pass `showLoader`, `hideLoader`, or `dispatchData`
   - Loader shows before request and hides in finally block

5. **getErrorMessage Utility**
   - Moved from `crud-helper.js` to `httpRequest.js`
   - Now exported from `httpRequest.js` for reuse
   
   ```js
   // Before
   // Only available in crud-helper (internal)
   
   // After
   import { getErrorMessage } from "@durlabh/dframework-ui/httpRequest";
   ```

#### Migration Guide:

**Step 1: Add FrameworkProvider with SnackbarProvider**

Wrap your app with providers in the correct order:

```js
import { SnackbarProvider, FrameworkProvider } from "@durlabh/dframework-ui";

function App() {
  return (
    <SnackbarProvider>
      <FrameworkProvider>
        {/* Existing providers and components */}
      </FrameworkProvider>
    </SnackbarProvider>
  );
}
```

**Step 2: Remove showLoader/hideLoader from HTTP Requests**

If you're using `httpRequest` directly, remove the loader parameters:

```js
// Before
import request from '@durlabh/dframework-ui/httpRequest';
import { useStateContext } from '@durlabh/dframework-ui';

const { dispatchData } = useStateContext();
await request({ url, params, dispatchData });

// After - Loader is automatic!
import request from '@durlabh/dframework-ui/httpRequest';

await request({ url, params });
```

**Step 3: Update Custom Loader Logic**

If you're manually controlling the loader:

```js
// Before
import { useStateContext } from '@durlabh/dframework-ui';
import actionsStateProvider from '@durlabh/dframework-ui/actions';

const { dispatchData } = useStateContext();
dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: true });
// ... do work
dispatchData({ type: actionsStateProvider.UPDATE_LOADER_STATE, payload: false });

// After
import { useFramework } from '@durlabh/dframework-ui';

const { showLoader, hideLoader } = useFramework();
showLoader();
// ... do work
hideLoader();
```

**Step 4: Update Loader State Checks**

If you're checking loader state:

```js
// Before
const { stateData } = useStateContext();
const isLoading = stateData.loaderOpen;

// After
const { isLoading } = useFramework();
```

#### Non-Breaking Changes:

- Grid and Form components automatically use the new loader system
- `StateProvider` continues to work as before (minus loader state)
- All other StateProvider functionality remains unchanged
- dayjs utilities in StateProvider remain for backward compatibility

---

## 1. Crud-helper

- In `getList` fucntion, pass project specific data using extra params. (removed orderStatusId, userTimezoneOffset)

## 2. grid/index.js

- In `updateFilters`, removed CoolR specifc code, `OrderSuggestionHistoryFields`
- In `onCellClickHandler`, removed custom code for isAcostaController
- In  `GridBase` removed custom code for `isOrderDetailModalOpen`.

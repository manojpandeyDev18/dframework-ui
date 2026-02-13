# Breaking changes

## Version 2.0.0 - Major Version Breaking Changes

### Removed Backward Compatibility

The framework has removed backward compatibility aliases and the dispatch pattern. This is a major version release with breaking changes.

#### Breaking Changes:

1. **Removed FrameworkProvider and useFramework aliases**
   - `FrameworkProvider` alias removed - use `StateProvider` directly
   - `useFramework` alias removed - use `useStateContext` directly
   - Single provider pattern required

   ```js
   // Required setup
   import { SnackbarProvider, StateProvider } from "@durlabh/dframework-ui";
   
   <SnackbarProvider>
     <StateProvider apiEndpoints={{ default: 'http://localhost:3000/api' }}>
       {/* Your app */}
     </StateProvider>
   </SnackbarProvider>
   ```

2. **Removed dispatchData**
   - `dispatchData` function removed from StateProvider
   - All components must use direct setter methods
   - No more Redux-style action dispatch

   **Migration:**
   ```js
   // Old (no longer works)
   const { dispatchData } = useStateContext();
   dispatchData({ type: 'PAGE_TITLE_DETAILS', payload: { title: 'My Page' } });
   dispatchData({ type: 'USER_DATA', payload: userData });
   dispatchData({ type: 'OPEN_MODAL', payload: { status: true } });
   
   // New (required)
   const { setPageTitle, setUserData, setModal } = useStateContext();
   setPageTitle({ title: 'My Page' });
   setUserData(userData);
   setModal({ status: true });
   ```

3. **Removed action aliases**
   - `OPEN_MODAL` action alias removed
   - `PAGE_TITLE_DETAILS` action alias removed  
   - `USER_DATA` action alias removed
   - Only new action names supported: `SET_MODAL`, `SET_PAGE_TITLE`, `SET_USER_DATA`

4. **StateProvider State Restructured**
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

5. **Meaningful Method Names** (No more dispatch actions)
   - **New direct setter methods**:
     - `setLocale(locale)` - Set application locale
     - `setDateTimeFormat(format)` - Set date/time format
     - `setPageTitle(title)` - Set page title
     - `setModal(modal)` - Set modal state
     - `setPageBackButton(button)` - Set back button
     - `setUserData(userData)` - Set user data
     - `setTimeZone(timeZone)` - Set timezone

6. **Form Mode Detection**
   - Form mode no longer uses global state
   - Copy mode detected from URL pattern: `/path/0-{sourceId}`
   - Normal edit mode: `/path/{id}`

7. **Loader Management**
   - **Simplified loader management** - no counter, simple on/off
   - Loader managed by CRUD helper functions (getList, getRecord, saveRecord, deleteRecord, getLookups)
   - Each CRUD function wraps operations in try/finally blocks to guarantee loader is hidden
   - httpRequest is a pure HTTP transport layer without loader management
   - **For custom operations**: Use showLoader() before async operations, hideLoader() in finally block
   
   ```js
   // CRUD functions handle loader automatically
   await getList({ model, gridColumns, setData, page, pageSize });
   
   // Custom operations - use try/finally pattern
   const { showLoader, hideLoader } = useStateContext();
   
   const myOperation = async () => {
     showLoader();
     try {
       await asyncOperation1();
       await asyncOperation2();
     } finally {
       hideLoader(); // Always hidden, even on errors
     }
   };
   ```

8. **State Management**
   - Uses individual useState calls for simplicity (no useReducer)
   - Direct setter methods only - no dispatch pattern

9. **API Endpoints Keys**
  - File upload and media now use `upload` and `media` keys in `apiEndpoints`
  - Remove legacy keys like `uploadApi` and `mediaApi`

#### Migration Guide:

**Step 1: Update Provider Setup**

```js
// Old
<SnackbarProvider>
  <FrameworkProvider>
    <StateProvider apiEndpoints={...}>
      <App />
    </StateProvider>
  </FrameworkProvider>
</SnackbarProvider>

// New (required)
<SnackbarProvider>
  <StateProvider apiEndpoints={...}>
    <App />
  </StateProvider>
</SnackbarProvider>
---
```

**Step 2: Update State Access**

```js
// Old
const { stateData } = useStateContext();
const locale = stateData.dataLocalization;
const userData = stateData.userData;
const pageTitle = stateData.pageTitleDetails;

// New (required)
const { stateData } = useStateContext();
const locale = stateData.locale;
const userData = stateData.userData;
const pageTitle = stateData.pageTitle;
```

**Step 3: Replace Dispatch Actions with Methods**

```js
// Old (no longer works)
const { dispatchData } = useStateContext();
dispatchData({ type: 'PAGE_TITLE_DETAILS', payload: { title: 'My Page' } });
dispatchData({ type: 'USER_DATA', payload: userData });
dispatchData({ type: 'OPEN_MODAL', payload: { status: true } });
dispatchData({ type: 'UPDATE_LOCALIZATION', payload: 'es' });
dispatchData({ type: 'SET_TIMEZONE', payload: 'America/New_York' });

// New (required)
const { setPageTitle, setUserData, setModal, setLocale, setTimeZone } = useStateContext();
setPageTitle({ title: 'My Page' });
setUserData(userData);
setModal({ status: true });
setLocale('es');
setTimeZone('America/New_York');
```

**Step 4: Update Hook Imports**

```js
// Old (no longer works)
import { useFramework } from "@durlabh/dframework-ui";
const { showLoader } = useFramework();

// New (required)
import { useStateContext } from "@durlabh/dframework-ui";
const { showLoader } = useStateContext();
```

#### Non-Breaking Changes:

- Grid and Form components work without changes if they only use the new StateProvider API

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
- Consolidated list/export request setup into `fetchData` to remove duplicate logic from `handleExport`.

---

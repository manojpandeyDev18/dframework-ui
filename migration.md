# Breaking changes

## Version 1.0.6 - FrameworkProvider Introduction (Updated)

### Loader Management Refactoring

The loader management system has been completely refactored to use automatic loader management at the point of API calls.

#### Breaking Changes:

1. **FrameworkProvider is now required**
   - Applications must wrap their components with `FrameworkProvider` to use Grid, Form, or loader functionality
   - `SnackbarProvider` must wrap `FrameworkProvider`

   ```js
   // Required setup
   import { SnackbarProvider, FrameworkProvider, StateProvider } from "@durlabh/dframework-ui";
   
   <SnackbarProvider>
     <FrameworkProvider>
       <StateProvider>
         {/* Your app */}
       </StateProvider>
     </FrameworkProvider>
   </SnackbarProvider>
   ```

2. **StateProvider Changes**
   - Removed `loaderOpen` from state
   - Removed `UPDATE_LOADER_STATE` action
   - Loader state is now managed by `FrameworkProvider`

3. **httpRequest API Changes - Automatic Loader Management**
   - Loader is now automatically managed by `httpRequest`
   - No need to pass `showLoader`, `hideLoader`, or `dispatchData`
   - Loader shows before request and hides in finally block
   
   ```js
   // Before
   const { dispatchData } = useStateContext();
   await request({ url, params, dispatchData });
   
   // After - No parameters needed!
   await request({ url, params });
   ```

4. **crud-helper API Changes**
   - All CRUD functions no longer require `showLoader`, `hideLoader`, or `dispatchData` parameters
   - Loader is managed automatically by `httpRequest`
   - Grid and Form components simplified - no parameter passing needed

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

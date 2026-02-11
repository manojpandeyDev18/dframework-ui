# Breaking changes

## Version 1.0.6 - FrameworkProvider Introduction

### Loader Management Refactoring

The loader management system has been completely refactored from a dispatch-based approach to a context-based approach using `FrameworkProvider`.

#### Breaking Changes:

1. **FrameworkProvider is now required**
   - Applications must wrap their components with `FrameworkProvider` to use Grid, Form, or loader functionality
   - Place `FrameworkProvider` as the outermost provider

   ```js
   // Required setup
   import { FrameworkProvider, StateProvider } from "@durlabh/dframework-ui";
   
   <FrameworkProvider>
     <StateProvider>
       {/* Your app */}
     </StateProvider>
   </FrameworkProvider>
   ```

2. **StateProvider Changes**
   - Removed `loaderOpen` from state
   - Removed `UPDATE_LOADER_STATE` action
   - Loader state is now managed by `FrameworkProvider`

3. **httpRequest API Changes**
   - `dispatchData` parameter is replaced with `showLoader` and `hideLoader`
   - If you're calling `httpRequest` directly, update your code:
   
   ```js
   // Before
   const { dispatchData } = useStateContext();
   await request({ url, params, dispatchData });
   
   // After
   const { showLoader, hideLoader } = useFramework();
   await request({ url, params, showLoader, hideLoader });
   ```

4. **crud-helper API Changes**
   - All CRUD functions (`getList`, `getRecord`, `saveRecord`) now accept `showLoader` and `hideLoader` instead of `dispatchData`
   - Grid and Form components handle this internally, so no changes needed for typical usage

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

**Step 1: Add FrameworkProvider**

Wrap your app with `FrameworkProvider`:

```js
import { FrameworkProvider } from "@durlabh/dframework-ui";

function App() {
  return (
    <FrameworkProvider>
      {/* Existing providers and components */}
    </FrameworkProvider>
  );
}
```

**Step 2: Update Custom HTTP Requests**

If you're using `httpRequest` directly:

```js
// Before
import request from '@durlabh/dframework-ui/httpRequest';
import { useStateContext } from '@durlabh/dframework-ui';

const { dispatchData } = useStateContext();
await request({ url, params, dispatchData });

// After
import request from '@durlabh/dframework-ui/httpRequest';
import { useFramework } from '@durlabh/dframework-ui';

const { showLoader, hideLoader } = useFramework();
await request({ url, params, showLoader, hideLoader });
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

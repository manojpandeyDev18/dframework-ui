# StateProvider Documentation

## Overview

`StateProvider` is a React Context-based state management solution that provides centralized application state, API endpoint management, and utility functions for date/time formatting and localization. It wraps your entire application and makes shared state and utilities available to all child components.

## Installation

```javascript
import { StateProvider, useStateContext } from './components/useRouter/StateProvider';
```

## Basic Setup

Wrap your application root with `StateProvider`:

```javascript
import React from 'react';
import { StateProvider } from './components/useRouter/StateProvider';
import App from './App';

function Root() {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  );
}

export default Root;
```

## Configuration

### API Endpoints Configuration

You can configure API endpoints during initialization:

```javascript
const apiEndpoints = {
  GridPreferenceManager: '/api/grid-preferences',
  UserService: '/api/users',
  ProductService: '/api/products',
  OrderService: '/api/orders'
};

<StateProvider apiEndpoints={apiEndpoints}>
  <App />
</StateProvider>
```

**Benefits:**
- ✅ Centralized endpoint configuration
- ✅ No need to call `setApiEndpoint` throughout the app
- ✅ Type-safe endpoint management
- ✅ Easy to maintain and update

## Using StateProvider in Components

### Accessing State and Utilities

Use the `useStateContext` hook to access all StateProvider features:

```javascript
import { useStateContext } from './components/useRouter/StateProvider';

function MyComponent() {
  const {
    stateData,           // Current application state (backward compat object)

    // Loader management
    isLoading,           // Current loader state (boolean)
    showLoader,          // Show/hide loader: showLoader(true) / showLoader(false)

    // Snackbar utilities
    showMessage,         // Show success message
    showError,           // Show error message

    // i18n utilities
    dayjs,               // dayjs instance with timezone support
    t,                   // i18next translation function
    i18n,                // i18next instance

    // Date/time utilities
    formatDate,          // Format dates with timezone support
    systemDateTimeFormat,// Get system date/time format string
    useLocalization,     // Get localization utilities

    // API utilities
    getApiEndpoint,      // Get API endpoint by key
    setApiEndpoint,      // Set/update API endpoint
    buildUrl,            // Build full URL using route relative to endpoint: buildUrl('/users', 'UserService')

    // State setters
    setLocale,           // Set app locale
    setPageTitle,        // Set page title/breadcrumbs
    setPageBackButton,   // Set back button config
    setUserData,         // Set user data
    setTimeZone,         // Set timezone
    setDateTimeFormat,   // Set date/time format
    setModal             // Set modal state
  } = useStateContext();

  // Your component logic
}
```

## API Reference

### State Management

#### `stateData`
Object containing the current application state (provided for backward compatibility).

**Available state properties:**
```javascript
{
  locale: 'en',                     // Current locale (en, es, fr, etc.)
  dateTime: 'MM/DD/YYYY hh:mm:ss A', // Date/time format
  pageTitle: null,                  // Page title information
  modal: null,                      // Modal state
  pageBackButton: null,             // Back button configuration
  userData: null,                   // Current user data
  timeZone: ""                      // User timezone
}
```

#### State Setters
Update application state using individual setter functions:

```javascript
const { setLocale, setDateTimeFormat, setUserData, showLoader } = useStateContext();

// Update localization
setLocale('es-ES');

// Update date/time format
setDateTimeFormat('DD-MM-YYYY hh:mm A');

// Set user data
setUserData({ name: 'John Doe', role: 'admin' });

// Show/hide loader
showLoader(true);   // show
showLoader(false);  // hide
```

**Available Setters:**

| Setter | Description |
|---|---|
| `setLocale(locale)` | Change app locale |
| `setDateTimeFormat(format)` | Change date/time format |
| `setPageTitle(title)` | Set page title/breadcrumbs |
| `setModal(modal)` | Control modal state |
| `setPageBackButton(config)` | Configure back button |
| `setUserData(data)` | Set user information |
| `setTimeZone(tz)` | Set user timezone |
| `showLoader(flag)` | Show/hide loader (`true`/`false`) |

### API Endpoint Management

#### `getApiEndpoint(key: string): string`
Retrieves an API endpoint by its key.

**Example:**
```javascript
const { getApiEndpoint } = useStateContext();

const userApiUrl = getApiEndpoint('UserService');
// Returns: '/api/users'

// Use in fetch/axios
fetch(userApiUrl)
  .then(response => response.json())
  .then(data => console.log(data));
```

#### `setApiEndpoint(key: string, endpoint: string): void`
Sets or updates an API endpoint.

**Example:**
```javascript
const { setApiEndpoint } = useStateContext();

// Set single endpoint
setApiEndpoint('AuthService', '/api/auth');

// Update existing endpoint
setApiEndpoint('UserService', '/api/v2/users');
```

**Use Cases:**
- Runtime endpoint configuration
- Environment-specific endpoints
- Dynamic API versioning
- Multi-tenant applications

### Date/Time Utilities

#### `formatDate(params): string`
Formats a date value with optional timezone support.

**Parameters:**
```javascript
{
  value: string | Date,          // Date to format (required)
  useSystemFormat: boolean,      // Use system format (required)
  showOnlyDate: boolean,         // Show only date part (optional, default: false)
  state: string,                 // Custom date format (optional)
  timeZone: string              // Timezone (optional, e.g., 'America/New_York')
}
```

**Examples:**
```javascript
const { formatDate } = useStateContext();

// Basic date formatting
const formatted = formatDate({
  value: new Date(),
  useSystemFormat: true
});
// Output: '01/14/2026 03:45:30 PM'

// Date only
const dateOnly = formatDate({
  value: '2026-01-14',
  useSystemFormat: true,
  showOnlyDate: true
});
// Output: '01/14/2026'

// With timezone
const withTz = formatDate({
  value: new Date(),
  useSystemFormat: false,
  state: 'DD-MM-YYYY HH:mm',
  timeZone: 'America/New_York'
});
// Output: '14-01-2026 15:45'

// Custom format
const custom = formatDate({
  value: '2026-01-14T15:30:00',
  useSystemFormat: false,
  state: 'YYYY-MM-DD'
});
// Output: '2026-01-14'
```

#### `systemDateTimeFormat(isDateFormatOnly, showOnlyDate, state): string`
Returns the system date/time format string.

**Parameters:**
- `isDateFormatOnly` (boolean): Return only date format
- `showOnlyDate` (boolean): Show only date part
- `state` (string): User-defined format string

**Examples:**
```javascript
const { systemDateTimeFormat } = useStateContext();

// Get full date/time format
const fullFormat = systemDateTimeFormat(false, false);
// Returns: 'DD-MM-YYYY hh:mm:ss A'

// Get date format only
const dateFormat = systemDateTimeFormat(true, false);
// Returns: 'DD-MM-YYYY'

// Custom format
const customFormat = systemDateTimeFormat(false, false, 'dd-mm-yyyy hh:mm A');
// Returns: 'DD-MM-YYYY hh:mm:ss A'
```

### Localization

#### `useLocalization(): { getLocalizedString }`
Provides localization utilities for the current locale.

**Example:**
```javascript
const { useLocalization } = useStateContext();
const { getLocalizedString } = useLocalization();

// Get localized string
const noRowsText = getLocalizedString('noRowsLabel');
// Returns localized version based on current locale

// Available locales: en-US, es-ES, fr-FR, de-DE, pt-PT, it-IT, tr-TR, da-DK, el-GR
```

## Complete Usage Example

```javascript
import React, { useEffect, useState } from 'react';
import { useStateContext } from './components/useRouter/StateProvider';

function UserProfile() {
  const {
    stateData,
    showLoader,
    setUserData,
    getApiEndpoint,
    formatDate,
    useLocalization
  } = useStateContext();

  const [user, setUser] = useState(null);
  const { getLocalizedString } = useLocalization();

  useEffect(() => {
    const fetchUser = async () => {
      showLoader(true);
      try {
        const userApi = getApiEndpoint('UserService');
        const res = await fetch(`${userApi}/profile`);
        const data = await res.json();
        setUser(data);
        setUserData(data);
      } finally {
        showLoader(false);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div>{getLocalizedString('loading')}</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        {getLocalizedString('joinedOn')}: {
          formatDate({
            value: user.createdAt,
            useSystemFormat: true,
            timeZone: stateData.timeZone
          })
        }
      </p>
      <p>Locale: {stateData.locale}</p>
    </div>
  );
}

export default UserProfile;
```

## Advanced Patterns

### Centralized API Configuration

Create a configuration file:

```javascript
// config/apiEndpoints.js
export const apiEndpoints = {
  // Authentication
  AuthService: '/api/auth',
  
  // User Management
  UserService: '/api/users',
  UserPreferences: '/api/users/preferences',
  
  // Business Logic
  ProductService: '/api/products',
  OrderService: '/api/orders',
  InventoryService: '/api/inventory',
  
  // Grid Management
  GridPreferenceManager: '/api/grid-preferences',
  
  // Reporting
  ReportService: '/api/reports',
  ExportService: '/api/exports'
};
```

Then use it in your app:

```javascript
// index.js
import { StateProvider } from './components/useRouter/StateProvider';
import { apiEndpoints } from './config/apiEndpoints';

<StateProvider apiEndpoints={apiEndpoints}>
  <App />
</StateProvider>
```

### Environment-Specific Configuration

```javascript
// config/environment.js
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000';

export const apiEndpoints = {
  UserService: `${API_BASE}/api/users`,
  ProductService: `${API_BASE}/api/products`,
  // ... other endpoints
};
```

### Dynamic Endpoint Updates

```javascript
function AdminPanel() {
  const { setApiEndpoint } = useStateContext();

  const switchToV2Api = () => {
    setApiEndpoint('UserService', '/api/v2/users');
    setApiEndpoint('ProductService', '/api/v2/products');
  };

  return (
    <button onClick={switchToV2Api}>
      Switch to API v2
    </button>
  );
}
```

### Multi-Tenant Configuration

```javascript
function TenantSwitcher({ tenantId }) {
  const { setApiEndpoint } = useStateContext();

  useEffect(() => {
    // Update all endpoints with tenant context
    setApiEndpoint('UserService', `/api/tenants/${tenantId}/users`);
    setApiEndpoint('ProductService', `/api/tenants/${tenantId}/products`);
  }, [tenantId]);

  return <div>Current Tenant: {tenantId}</div>;
}
```

## Best Practices

### 1. Initialize Endpoints Early
Configure all known API endpoints when wrapping your app:
```javascript
<StateProvider apiEndpoints={allEndpoints}>
  <App />
</StateProvider>
```

### 2. Use Consistent Keys
Use descriptive, consistent keys for API endpoints:
```javascript
// ✅ Good
getApiEndpoint('UserService')
getApiEndpoint('ProductService')

// ❌ Avoid
getApiEndpoint('users')
getApiEndpoint('product_api')
```

### 3. Centralize Date Formatting
Create utility functions for common date formats:
```javascript
// utils/dateHelpers.js
export const formatUserDate = (date, context) => {
  return context.formatDate({
    value: date,
    useSystemFormat: true,
    timeZone: context.stateData.timeZone
  });
};
```

### 4. Extract Localization Logic
Create a custom hook for localization:
```javascript
// hooks/useAppLocalization.js
export const useAppLocalization = () => {
  const { useLocalization } = useStateContext();
  const { getLocalizedString } = useLocalization();
  
  return {
    t: getLocalizedString, // Shorter alias
    getLocalizedString
  };
};
```

### 5. Type Safety (TypeScript)
Define types for your state and endpoints:
```typescript
interface ApiEndpoints {
  UserService: string;
  ProductService: string;
  OrderService: string;
}

interface AppState {
  locale: string;
  dateTime: string;
  pageTitle: object | null;
  modal: object | null;
  pageBackButton: object | null;
  userData: object | null;
  timeZone: string;
}
```

## Error Handling

### Missing Context
```javascript
try {
  const context = useStateContext();
} catch (error) {
  console.error('useStateContext must be used within StateProvider');
  // Handle error appropriately
}
```

### Missing Endpoint
```javascript
const endpoint = getApiEndpoint('SomeService');
if (!endpoint) {
  console.warn('SomeService endpoint not configured');
  // Fallback logic or show error to user
}
```

## Migration Guide

### From Manual Endpoint Management

**Before:**
```javascript
// Multiple files calling setApiEndpoint
useEffect(() => {
  const { setApiEndpoint } = useStateContext();
  setApiEndpoint('UserService', '/api/users');
}, []);
```

**After:**
```javascript
// Single configuration at app root
<StateProvider apiEndpoints={{
  UserService: '/api/users'
}}>
  <App />
</StateProvider>
```

## Related Hooks

- `useRouter()`: Access router context (if using RouterProvider)
- `useStateContext()`: Access full StateProvider context (primary hook)

## Support

For issues or questions, please refer to the main project documentation or create an issue in the project repository.

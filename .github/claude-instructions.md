# DFramework UI - Claude AI Assistant Instructions

## Purpose
This file provides specific guidance for Claude (Anthropic's AI assistant) when working on the DFramework UI library codebase. Follow these instructions to ensure consistent, high-quality contributions that align with project standards.

## Project Context

**DFramework UI** (`@durlabh/dframework-ui`) is a mature, production-ready React component library built on Material-UI. It serves enterprise applications with advanced data grids, forms, state management, and internationalization.

### Critical Principles

1. **🎯 Surgical Changes Only**: This is a stable library in production use. Make minimal, targeted changes. Avoid refactoring working code.

2. **🔒 Dependency Stability**: All dependencies are peer dependencies. Never add, remove, or modify dependencies without explicit approval.

3. **📚 Library vs Application**: Remember this is a library, not an application. Changes affect all consuming applications.

4. **🧪 No Automated Tests**: There are no automated tests. You must manually verify changes by running `npm run dev` and testing in the browser.

## Technology Stack Summary

- **React**: 19.2.3 (peer dependency)
- **Material-UI**: v7.3.6 (complete MUI ecosystem)
- **Formik & Yup**: Form management and validation
- **Vite**: Build tooling (outputs ES modules only)
- **i18next**: Internationalization (9 languages supported)

## File Structure Quick Reference

```
src/lib/
├── index.js                          # MAIN EXPORT FILE - update when adding exports
├── components/
│   ├── Grid/                         # Most complex component - handle with care
│   │   ├── index.js                  # Main grid component
│   │   ├── ui-models.js              # Grid model definitions
│   │   ├── crud-helper.js            # CRUD operations
│   │   └── httpRequest.js            # HTTP utilities
│   ├── Form/                         # Form builder (NOT exported)
│   │   ├── Form.js                   
│   │   ├── field-mapper.js           
│   │   └── fields/                   # 15+ field types
│   ├── SnackBar/                     # Global notifications
│   ├── Dialog/                       # Modal dialogs
│   ├── useRouter/                    # State management
│   │   ├── StateProvider.js          # Main state provider
│   │   ├── stateReducer.js           
│   │   └── actions.js                
│   └── mui/locale/                   # i18n locale files
└── hooks/                            # Custom React hooks
    ├── useCascadingLookup.js
    └── useDebounce.js
```

## Before Making Any Changes

### ✅ Pre-Work Checklist

1. **Read Relevant Documentation**:
   - `docs/StateProvider.md` for state management changes
   - `docs/defaultPreferenceEnums.md` for preference-related work
   - `migration.md` for understanding breaking changes

2. **Check Existing Patterns**: Look at similar components/functions before creating new ones

3. **Verify Exports**: Check `src/lib/index.js` to see what's currently exported

4. **Review Recent Changes**: Check git history for recent modifications to understand context

### 🔍 Analysis Before Coding

When asked to implement a feature:

1. **Ask Clarifying Questions** if requirements are ambiguous
2. **Identify Impact**: Which components are affected? Is this a breaking change?
3. **Check Consistency**: Does this follow existing patterns?
4. **Consider Localization**: Does this need i18n support?

## Coding Standards

### Component Development

```javascript
// ✅ GOOD - Functional component with hooks
import React, { useState, useEffect, memo } from 'react';
import { Box, Button } from '@mui/material';

const MyComponent = memo(({ value, onChange }) => {
  const [localState, setLocalState] = useState('');
  
  return (
    <Box sx={{ padding: 2 }}>
      {/* Component content */}
    </Box>
  );
});

export default MyComponent;

// ❌ BAD - Class components, inline styles, missing memo
class MyComponent extends React.Component { ... }  // Don't use classes
<div style={{ padding: '16px' }}>  // Don't use inline styles
```

### Import Organization

```javascript
// ✅ CORRECT ORDER
// 1. External libraries
import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Formik } from 'formik';

// 2. Internal components (use @ alias)
import { useStateContext } from '@/lib/components/useRouter/StateProvider';
import GridBase from '@/lib/components/Grid';

// 3. Utilities
import { formatDate } from '@/lib/components/utils';
```

### Styling Approach

```javascript
// ✅ PREFERRED - MUI sx prop
<Box sx={{ 
  padding: 2, 
  marginTop: 1,
  backgroundColor: 'primary.main',
  '&:hover': { opacity: 0.8 }
}}>

// ✅ ACCEPTABLE - styled() for reusable components
import { styled } from '@mui/material/styles';
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  ...
}));

// ❌ AVOID - Inline styles (only for truly dynamic values)
<div style={{ padding: '16px' }}>
```

### State Management

```javascript
// ✅ CORRECT - Use appropriate state management
import { useStateContext } from '@/lib/components/useRouter/StateProvider';
import { useSnackbar } from '@/lib/components/SnackBar';

function MyComponent() {
  // Global state
  const { stateData, dispatchData } = useStateContext();
  
  // Notifications
  const snackbar = useSnackbar();
  
  // Local component state
  const [isOpen, setIsOpen] = useState(false);
  
  // Side effects
  useEffect(() => {
    // Cleanup logic
    return () => {};
  }, []);
}
```

## Critical Components - Special Care Required

### Grid Component (Most Complex)

Located: `src/lib/components/Grid/`

**Why it's critical:**
- Used in virtually all consuming applications
- Handles CRUD operations, filtering, sorting, pagination
- Manages user preferences and state persistence
- Has many interconnected features

**Before modifying:**
1. Understand the UiModel system (`ui-models.js`)
2. Check crud-helper and httpRequest dependencies
3. Test with actual data, not just mock data
4. Verify all CRUD operations (Create, Read, Update, Delete)
5. Test filtering, sorting, and pagination
6. Check preference persistence

### Form Component (Internal Use)

Located: `src/lib/components/Form/`

**Important notes:**
- **NOT exported** from library (used internally)
- Supports 17 field types via `field-mapper.js`
- Uses Formik for state, Yup for validation
- Handles complex relationships via `relations.js`

**Field types:**
string, number, date, dateTime, time, boolean, select, autocomplete, email, password, radio, chipInput, jsonInput, fileUpload, treeCheckBox, dayRadio, oneToMany

### StateProvider (Global State)

Located: `src/lib/components/useRouter/`

**Provides:**
- Centralized application state
- API endpoint configuration
- Date/time formatting utilities
- Localization helpers

**Usage pattern:**
```javascript
const {
  stateData,              // Current state
  dispatchData,           // Update state
  getApiEndpoint,         // Get API endpoint
  setApiEndpoint,         // Set API endpoint
  formatDate,             // Format with timezone
  useLocalization,        // i18n utilities
} = useStateContext();
```

## Common Tasks - Step-by-Step

### Adding a New Component

1. **Create component file** in appropriate directory
   ```bash
   src/lib/components/NewComponent/index.js
   ```

2. **Follow existing patterns** - copy structure from similar component

3. **Add localization support** if component has user-facing text
   ```javascript
   import { useTranslation } from 'react-i18next';
   const { t } = useTranslation();
   ```

4. **Export from index.js**:
   ```javascript
   // In src/lib/index.js
   import NewComponent from './components/NewComponent';
   export { NewComponent };
   ```

5. **Test thoroughly**:
   ```bash
   npm run dev
   # Test in browser at localhost:3000
   ```

6. **Build and verify**:
   ```bash
   npm run build
   # Check that build succeeds and dist/ is created
   ```

### Modifying Existing Component

1. **Read the component thoroughly** - understand what it does

2. **Check for dependencies** - search codebase for imports of this component

3. **Make minimal changes** - only modify what's necessary

4. **Preserve existing behavior** - avoid breaking changes

5. **Test all use cases**:
   - Component renders correctly
   - Props work as expected
   - No console errors
   - Responsive design intact

6. **Check for side effects**:
   - Does this affect other components?
   - Are there cascading changes needed?

### Adding Internationalization

1. **Identify text strings** that need translation

2. **Use useTranslation hook**:
   ```javascript
   import { useTranslation } from 'react-i18next';
   
   function MyComponent() {
     const { t } = useTranslation();
     return <div>{t('myKey')}</div>;
   }
   ```

3. **Add translations** to locale files (if managing translations in library):
   ```javascript
   // src/lib/components/mui/locale/data-grid/enUS.js
   export const enUSGrid = {
     myKey: 'My English Text',
     ...
   };
   ```

4. **Test multiple languages**:
   - en-US (default)
   - es-ES, fr-FR, de-DE, it-IT, pt-PT, el-GR, tr-TR, da-DK

### Working with Grid/CRUD Operations

1. **Understand UiModel**:
   ```javascript
   const model = new UiModel({
     title: "My Grid",
     api: "MyApi",           // API endpoint key
     idProperty: "id",       // Primary key field
     defaultSort: "name ASC",
     columns: [
       { field: "id", type: "number", gridLabel: "ID" },
       { field: "name", type: "string", gridLabel: "Name", required: true }
     ]
   });
   ```

2. **Configure API endpoints** in StateProvider:
   ```javascript
   <StateProvider apiEndpoints={{ MyApi: '/api/my-resource' }}>
   ```

3. **CRUD operations** are handled automatically by GridBase:
   - Create: Opens form dialog
   - Read: Fetches data via httpRequest
   - Update: Inline editing or form dialog
   - Delete: Confirmation dialog then API call

4. **Test CRUD cycle**:
   - Create new record
   - View list
   - Edit record
   - Delete record
   - Check error handling

## Build and Deployment

### Local Development

```bash
# Start dev server (port 3000)
npm run dev

# Build library
npm run build

# Preview built library
npm run preview
```

### Build Output

- **Format**: ES modules only (no CommonJS)
- **Output directory**: `dist/`
- **Source maps**: Enabled
- **Bundle analyzer**: `stats.html` (set `VISUALIZER_OPEN=true` to auto-open)

### Deployment Process

1. **Version bump** in `package.json`
2. **Create git tag**: `v1.0.X`
3. **Push tag**: `git push origin v1.0.X`
4. **GitHub Action** builds and deploys to `dist-release` branch
5. **Consuming apps** can reference the git branch

### Pre-Commit Verification

```bash
# 1. Build successfully
npm run build

# 2. Check git status
git status

# 3. Review changes
git diff

# 4. Ensure no unintended files added
# Look for: dist/, node_modules/, lock files

# 5. Verify externalized dependencies
# Check vite.config.js external list matches peer dependencies
```

## Troubleshooting Guide

### Build Issues

**Symptom**: "Peer dependency missing" warnings
- ✅ **Normal**: These are expected. Peer dependencies provided by consuming apps.

**Symptom**: "Cannot find module" error
- ❌ **Problem**: Import path incorrect or dependency not externalized
- **Fix**: Check import paths use `@/` alias or relative paths correctly

**Symptom**: Bundle size too large
- ❌ **Problem**: Dependencies not properly externalized
- **Fix**: Check `vite.config.js` external function

### Development Issues

**Symptom**: Changes not reflecting in browser
- **Fix**: Clear Vite cache: `rm -rf node_modules/.vite`

**Symptom**: Port 3000 already in use
- **Fix**: Kill process on port 3000 or change port in `vite.config.js`

**Symptom**: JSX syntax errors in .js files
- ✅ **Normal**: All `.js` files in `src/` are treated as JSX automatically

### Component Issues

**Symptom**: Grid not loading data
- **Check**: API endpoint configured in StateProvider?
- **Check**: Network tab shows API requests?
- **Check**: CORS issues?

**Symptom**: Form validation not working
- **Check**: Yup schema correctly defined in UiModel?
- **Check**: Field types match data types?

**Symptom**: Snackbar not showing
- **Check**: App wrapped in `<SnackbarProvider>`?
- **Check**: Using `useSnackbar()` hook correctly?

**Symptom**: Translations not working
- **Check**: i18next initialized?
- **Check**: Locale files imported correctly?
- **Check**: Using `useTranslation()` hook?

## Communication Guidelines

### When Asking for Clarification

- ✅ Ask specific questions about requirements
- ✅ Provide context about why you need clarification
- ✅ Offer suggestions/alternatives if applicable
- ❌ Don't make assumptions about user intent
- ❌ Don't proceed with guesses if requirements are unclear

### When Proposing Changes

- ✅ Explain what you'll change and why
- ✅ Mention potential side effects or risks
- ✅ Indicate if testing is needed
- ✅ Note if this might be a breaking change
- ❌ Don't make breaking changes without approval
- ❌ Don't refactor code that's working fine

### When Reporting Issues

- ✅ Describe what you found
- ✅ Explain the impact
- ✅ Suggest potential fixes
- ✅ Indicate urgency/severity
- ❌ Don't just say "there's a problem"
- ❌ Don't fix issues without discussing first

## Anti-Patterns to Avoid

### ❌ Don't Do These Things

1. **Don't refactor working code** "just because"
   - If it works and follows existing patterns, leave it alone

2. **Don't add dependencies** without explicit approval
   - This is a library with peer dependencies only

3. **Don't create breaking changes** casually
   - Document in `migration.md` if unavoidable

4. **Don't ignore existing patterns**
   - Follow the conventions already in the codebase

5. **Don't skip manual testing**
   - There are no automated tests; you must test manually

6. **Don't commit without building**
   - Always run `npm run build` before committing

7. **Don't modify peer dependency versions**
   - These are locked for compatibility reasons

8. **Don't remove or rename exports** without discussion
   - Breaking changes affect all consuming applications

9. **Don't use class components**
   - Use functional components with hooks

10. **Don't commit commented-out code**
    - Remove it or explain why it's there

## Best Practices for Claude

### Read First, Code Later

1. When given a task, first read relevant files completely
2. Understand the existing patterns and structure
3. Identify dependencies and impact
4. Plan the changes mentally
5. Then implement

### Be Thorough

1. Read error messages completely
2. Check multiple files if needed to understand context
3. Don't assume - verify by reading code
4. Test edge cases mentally before coding

### Communicate Clearly

1. Explain what you're doing and why
2. Mention any concerns or risks upfront
3. Ask questions if anything is unclear
4. Provide context for your decisions

### Stay Organized

1. Work on one logical task at a time
2. Complete each task fully before moving to the next
3. Keep changes minimal and focused
4. Group related changes together

### Verify Your Work

1. Review your changes before submitting
2. Check for typos and syntax errors
3. Verify imports and exports
4. Ensure consistent formatting

## Quick Reference - Common Imports

```javascript
// Components
import { GridBase, UiModel } from '@durlabh/dframework-ui';
import { DialogComponent } from '@durlabh/dframework-ui';
import { HelpModal } from '@durlabh/dframework-ui';
import { PageTitle } from '@durlabh/dframework-ui';
import { MuiTypography } from '@durlabh/dframework-ui';

// State Management
import { StateProvider, useStateContext, useRouter } from '@durlabh/dframework-ui';

// Notifications
import { SnackbarProvider, useSnackbar } from '@durlabh/dframework-ui';

// Utilities
import { httpRequest, crudHelper } from '@durlabh/dframework-ui';
import { useMobile } from '@durlabh/dframework-ui';

// Localization
import { locales } from '@durlabh/dframework-ui';
```

## Quick Reference - File Naming

```
✅ CORRECT                          ❌ INCORRECT
MyComponent.js                      MyComponent.jsx
index.js                            Index.js
crud-helper.js                      crudHelper.js
StateProvider.js                    state-provider.js
```

## Quick Reference - Common Commands

```bash
# Development
npm run dev              # Start dev server (port 3000, auto-open)
npm run start            # Alias for dev

# Building
npm run build            # Build for production (outputs to dist/)

# Preview
npm run preview          # Preview production build

# Bundle Analysis
VISUALIZER_OPEN=true npm run build  # Build and auto-open bundle analyzer

# Cleanup
rm -rf node_modules/.vite           # Clear Vite cache
rm -rf dist                         # Remove build output
rm -rf node_modules                 # Remove dependencies
```

## Documentation References

- **StateProvider**: See `docs/StateProvider.md`
- **Preferences**: See `docs/defaultPreferenceEnums.md`
- **Breaking Changes**: See `migration.md`
- **Usage Examples**: See `README.md`
- **Planned Work**: See `TODO.md`

## Final Reminders

1. **This is a stable library** - make surgical changes only
2. **Test manually** - there are no automated tests
3. **Build before committing** - ensure `npm run build` succeeds
4. **Follow existing patterns** - consistency is key
5. **Ask questions** - don't guess when uncertain
6. **Document breaking changes** - in `migration.md`
7. **Keep exports consistent** - check `src/lib/index.js`
8. **Support all locales** - test i18n when adding UI text
9. **Think about consumers** - your changes affect all apps using this library
10. **Enjoy the work** - this is a well-structured, quality codebase!

---

**When in doubt, ask. When certain, verify. Always build before committing.**

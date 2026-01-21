# DFramework UI - Copilot Instructions

## Project Overview

**DFramework UI** (`@durlabh/dframework-ui`) is a React-based UI component library built on top of Material-UI (MUI). It provides a comprehensive set of reusable components for building enterprise applications with features like advanced data grids, forms, dialogs, and state management.

### Key Features
- Advanced data grid with CRUD operations (based on MUI X Data Grid Premium)
- Form builder with validation (using Formik and Yup)
- Snackbar notifications system
- Dialog components
- State management with React Context
- Internationalization (i18next)
- Router integration

## Technology Stack

### Core Dependencies (Peer Dependencies)
- **React**: 19.2.3
- **Material-UI (MUI)**: v7.3.6
  - `@mui/material` - Core components
  - `@mui/icons-material` - Icons
  - `@mui/x-data-grid-premium` - Advanced data grid
  - `@mui/x-date-pickers` - Date/time pickers
  - `@mui/x-tree-view` - Tree view components
- **Emotion**: For CSS-in-JS styling
- **Formik**: v2.4.9 - Form management
- **Yup**: v1.7.1 - Schema validation
- **React Router DOM**: v7.11.0 - Routing
- **i18next**: v25.7.3 - Internationalization
- **Day.js**: v1.11.19 - Date manipulation

### Build Tools
- **Vite**: v7.3.0 - Build tool and dev server
- **Rollup**: For library bundling
- **Visualizer**: For bundle analysis

## Project Structure

```
dframework-ui/
├── .github/                    # GitHub workflows and configurations
│   └── workflows/
│       └── dist-branch.yml     # Auto-deploy to dist-release on version tags
├── docs/                       # Documentation
│   ├── StateProvider.md        # State management documentation
│   └── defaultPreferenceEnums.md
├── src/
│   └── lib/                    # Library source code
│       ├── assets/             # Static assets
│       ├── components/         # React components
│       │   ├── Dialog/         # Dialog components
│       │   ├── Form/           # Form components and field types
│       │   │   └── fields/     # Form field components (date, autocomplete, select, etc.)
│       │   ├── Grid/           # Data grid components and utilities
│       │   ├── HelpModal/      # Help modal component
│       │   ├── PageTitle/      # Page title component
│       │   ├── SnackBar/       # Notification system
│       │   ├── Typography/     # Typography component
│       │   ├── mui/            # MUI customizations and localization
│       │   │   └── locale/     # Locale files for data grid
│       │   ├── useRouter/      # Router state management
│       │   ├── useMobile.js    # Mobile detection hook
│       │   └── utils.js        # Utility functions
│       ├── hooks/              # Custom React hooks
│       └── index.js            # Main export file
├── vite.config.js              # Vite configuration
├── package.json                # Package configuration
├── migration.md                # Migration guide for breaking changes
└── TODO.md                     # Project todos and planned features
```

## Main Components

### 1. Grid (Data Grid)
- **Location**: `src/lib/components/Grid/`
- **Main Files**:
  - `index.js` - Main grid component
  - `ui-models.js` - Grid model definitions
  - `crud-helper.js` - CRUD operations
  - `httpRequest.js` - HTTP request utilities
  - `GridPreference.js` - User preferences management
  - `footer.js` - Grid footer component
  - `helper.js` - Helper functions
  - `template.js` - Grid templates
  - `CustomDropdownMenu.js` - Custom dropdown menu component
  - `LocalizedDatePicker.js` - Localized date picker component
- **Features**: CRUD operations, filtering, sorting, pagination, column management, preferences, localization

### 2. Form
- **Location**: `src/lib/components/Form/`
- **Main Files**:
  - `Form.js` - Main form component
  - `field-mapper.js` - Field type mapping
  - `relations.js` - Relationship handling
  - `fields/` - Individual field components
- **Common Field Types** (see `field-mapper.js` for full list): string, email, number, date, dateTime, time, boolean, select, autocomplete, password, radio, chipInput, jsonInput, fileUpload, treeCheckBox, dayRadio, oneToMany
- **Uses**: Formik for form state, Yup for validation

### 3. SnackBar (Notifications)
- **Location**: `src/lib/components/SnackBar/`
- **Usage**: Wrap app with `<SnackbarProvider>`, use `useSnackbar()` hook
- **Features**: Global notification system with customizable duration

### 4. Dialog
- **Location**: `src/lib/components/Dialog/`
- **Component**: `DialogComponent`
- **Features**: Reusable dialog/modal with confirm/cancel actions

### 5. StateProvider (State Management)
- **Location**: `src/lib/components/useRouter/`
- **Files**: `StateProvider.js`, `initialState.js`, `stateReducer.js`, `actions.js`
- **Purpose**: Centralized state management, API endpoint configuration, router utilities
- **Documentation**: See `docs/StateProvider.md`

### 6. Custom Hooks
- **Location**: `src/lib/hooks/`
- **Available Hooks**:
  - `useCascadingLookup.js` - Handle cascading dropdown dependencies
  - `useDebounce.js` - Debounce input values
- **Additional Hooks**: `useMobile.js` (in components/) - Detect mobile devices

## Build and Development

### Scripts
```bash
npm run dev      # Start development server on port 3000
npm run start    # Alias for dev
npm run build    # Build library for production (outputs to dist/)
npm run preview  # Preview production build
```

### Build Configuration
- **Entry Point**: `src/lib/index.js`
- **Output**: `dist/` directory
- **Format**: ES modules only
- **Source Maps**: Enabled
- **Bundle Analyzer**: Stats available in `stats.html` (set `VISUALIZER_OPEN=true` to auto-open)

### Development Server
- **Port**: 3000
- **Auto-open**: Enabled
- **Alias**: `@` points to `./src`

### File Processing
- All `.js` files in `src/` are treated as JSX (using esbuild transform)
- Assets from `src/lib/assets` are copied to `dist/` during build

## Deployment

### Version Tagging
- Tags starting with `v*` (e.g., `v1.0.5`) trigger the dist-branch workflow
- Workflow builds the library and deploys to `dist-release` branch
- Creates a dist tag like `dist-v1.0.5`

### NPM Package
- Package is scoped: `@durlabh/dframework-ui`
- Current version: 1.0.5
- Main entry: `./index.js`
- Package is marked as private in package.json (not published to npm, distributed via git)
- Distribution: Built library is deployed to `dist-release` branch for consumption

## Coding Conventions

### File Extensions
- Use `.js` for all component files (not `.jsx`)
- Files are automatically processed as JSX by Vite

### Component Structure
- Use functional components with hooks
- Prefer named exports for utilities, default exports for components
- Use memo() for performance optimization where appropriate

### Imports
- Use absolute imports with `@/` alias for src directory
- Group imports: external libraries first, then internal components

### State Management
- Use `useStateContext()` for global state
- Use `useRouter()` for routing utilities
- Use `useSnackbar()` for notifications
- Use `useState`/`useEffect` for local component state

### Styling
- Use MUI's `sx` prop for component styling
- Use `styled()` from `@mui/material/styles` for custom styled components
- Avoid inline styles except for dynamic values

### Localization
- Use `useTranslation()` hook from react-i18next
- Locale files are in `src/lib/components/mui/locale/`
- Supported languages: en-US, es-ES, fr-FR, de-DE, it-IT, pt-PT, el-GR, tr-TR, da-DK

## External Dependencies

### Peer Dependencies
All MUI packages, React, Formik, Yup, i18next, react-router-dom, and dayjs are peer dependencies. They must be installed by the consuming application.

### Externalized Packages
The following packages are externalized in the build and not bundled:
- react, react-dom
- @emotion/react, @emotion/styled
- @mui/* (all MUI packages and sub-paths)
- @base-ui/react
- dayjs, formik, yup
- i18next, i18next-browser-languagedetector, react-i18next
- react-router-dom

## Common Patterns

### Exported Components and Utilities
The following are exported from the library (see `src/lib/index.js`):
- Components: `GridBase`, `DialogComponent`, `HelpModal`, `PageTitle`, `MuiTypography`
- Models: `UiModel`
- State Management: `StateProvider`, `RouterProvider`, `useStateContext`, `useRouter`
- Notifications: `SnackbarProvider`, `SnackbarContext`, `useSnackbar`
- Utilities: `httpRequest`, `crudHelper`, `useMobile`
- Localization: `locales`, `daDKGrid`, `deDEGrid`, `elGRGrid`, `esESGrid`, `frFRGrid`, `itITGrid`, `ptPT`, `trTRGrid`

**Note**: `Form` component is NOT currently exported. Grid and other components handle form functionality internally.

### CRUD Operations
```javascript
import { httpRequest, crudHelper } from '@durlabh/dframework-ui';
```
- Use crud-helper functions for consistent API interactions
- Functions handle error handling and response formatting
- These utilities are primarily used internally by Grid and Form components

### Grid Usage
```javascript
import { GridBase, UiModel } from '@durlabh/dframework-ui';

const model = new UiModel({
  title: "My Grid",
  api: "MyApi",
  columns: [
    { field: "id", type: "number", gridLabel: "ID" },
    { field: "name", type: "string", gridLabel: "Name" }
  ]
});

<GridBase model={model} />
```

### Snackbar Usage
```javascript
import { SnackbarProvider, useSnackbar } from '@durlabh/dframework-ui';

// In app root
<SnackbarProvider>
  <App />
</SnackbarProvider>

// In component
const snackbar = useSnackbar();
snackbar.showMessage("Success!");
```

## Important Notes

### Migration Guide
See `migration.md` for breaking changes and migration steps from previous versions.

### Git Configuration
- Lock files (`package-lock.json`, `yarn.lock`) are ignored
- Build output (`dist/`, `stats.html`) is ignored
- Standard node_modules and IDE files are ignored

### File Organization
- Keep components self-contained in their directories
- Shared utilities go in `components/utils.js` or dedicated utility files
- Localization files follow MUI's structure

### Performance Considerations
- Grid uses DataGridPremium for advanced features
- Components use React.memo() for performance
- Large datasets are handled with server-side pagination
- Default page size is 50 records

## Testing and Validation

### Pre-commit Checks
Before committing changes:
1. Run `npm run build` to ensure build succeeds
2. Check that no new files are unintentionally added to git
3. Verify that all peer dependencies are properly externalized
4. Test components in a consuming application if making breaking changes

### Code Quality
- Follow existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components focused and single-purpose

## Tips for AI Agents

1. **Minimal Changes**: This is a stable library. Make minimal, surgical changes. Don't refactor working code.

2. **Dependencies**: Never modify peer dependencies or add new dependencies without careful consideration. This is a library, not an application.

3. **Breaking Changes**: Avoid breaking changes. If necessary, document them in `migration.md`.

4. **Component Patterns**: Follow the existing component patterns. Look at similar components for reference.

5. **Exports**: When adding new components, update `src/lib/index.js` to export them. Check existing exports to ensure consistency.

6. **Localization**: If adding user-facing text, consider adding i18next support.

7. **Documentation**: Update README.md or add docs/ files when adding major features.

8. **Testing**: Test components by running `npm run dev` and verifying in the browser. There's no automated test suite currently.

9. **Build Verification**: Always run `npm run build` before committing to ensure the library builds correctly.

10. **Grid and Form**: These are the most complex components. Be very careful when modifying them. They have many interconnected features.

## Common Issues and Solutions

### Build Issues
- **Missing peer dependency errors**: These are expected warnings during build. Peer dependencies are provided by the consuming application.
- **JSX transform issues**: All `.js` files in `src/` are automatically treated as JSX.

### Development Issues
- **Port 3000 already in use**: Change the port in `vite.config.js` or kill the process using port 3000.
- **Changes not reflecting**: Clear Vite cache: `rm -rf node_modules/.vite`

### Component Issues
- **Grid not loading data**: Check API endpoint configuration in StateProvider
- **Form validation not working**: Verify Yup schema is correctly defined in model
- **Snackbar not showing**: Ensure SnackbarProvider wraps your app

## Contact and Support

For questions or issues specific to this library, refer to:
- README.md for usage examples
- docs/ directory for detailed documentation
- migration.md for breaking changes
- Component source code for implementation details

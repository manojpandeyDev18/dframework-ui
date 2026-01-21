# dframework-ui TODO List

> **Comprehensive list of improvements, issues, and technical debt**  
> Last Updated: January 14, 2026

---

## 🔴 **Critical Issues (High Priority)**

### Type Safety & Validation

- [ ] **Add TypeScript support** or PropTypes for runtime type checking
  - No type definitions exist for any component
  - Components accept arbitrary props without validation
  - Hard to catch prop-related bugs during development
  - Priority: Add PropTypes to Grid, Form, UiModel, Dialog, PageTitle
  - Consider migrating to TypeScript for better DX

- [ ] **Add input validation in Form components**
  - FileUpload: No file type validation (security risk)
  - JSONInput: No JSON schema validation
  - Number field: Min/max can be bypassed with direct input
  - ChipInput: No validation on chip values

### Security

- [ ] **Sanitize user inputs in Form fields**
  - String/Text fields: No XSS protection
  - FileUpload: No MIME type checking
  - JSONInput: Direct JSON parsing without sanitization

- [ ] **Improve error message handling**
  - Error messages can expose stack traces (security leak)
  - Need sanitization before displaying to users
  - See: `crud-helper.js` - handleCommonErrors function

- [ ] **Validate URL parameters**
  - Grid component: `id` from URL not validated (can be non-numeric)
  - Form component: `baseData` URL param parsed without validation
  - Potential for injection attacks

### Performance

- [ ] **Grid: Implement request cancellation**
  - Multiple fetchData calls can run simultaneously
  - No AbortController usage
  - Can cause race conditions and stale data
  - File: `src/lib/components/Grid/index.js`

- [ ] **Optimize Grid column memoization**
  - `gridColumns` useMemo has too many dependencies
  - Recreates columns on minor model changes
  - Consider splitting into smaller memos
  - File: `src/lib/components/Grid/index.js` (line ~430)

---

## ⚠️ **Major Issues (Medium Priority)**

### Code Quality

- [ ] **Extract constants to separate files**
  - Grid has inline constants object (100+ lines)
  - actionTypes, constants, auditColumnMappings should be separate
  - Better for testing and reusability
  - Files: `Grid/index.js`, `Grid/ui-models.js`, `Form/Form.js`

- [ ] **Remove magic numbers**
  - `actions.length * 50` (Grid actions column width)
  - `recordCounts = 60000` (export limit)
  - `MB = 1024 * 1024` (FileUpload)
  - `timeInterval = 200` (redirect delay)
  - Use named constants with explanatory comments

- [ ] **Inconsistent naming conventions**
  - Mix of camelCase and PascalCase for functions
  - `getList` vs `GetList` inconsistency
  - Some files use default export, others named
  - Standardize across the codebase

- [ ] **Dead code removal**
  - `showRowsSelected` variable defined but not used properly
  - Unused imports in multiple files
  - Run ESLint with dead code detection

### Error Handling

- [ ] **Standardize error handling patterns**
  - Some functions use try-catch, others don't
  - Inconsistent error propagation
  - FileUpload: Errors caught but not reported to user
  - Create centralized error handler utility

- [ ] **Add fallback UI for error states**
  - Grid: No error boundary
  - Form: Shows alert but doesn't prevent continued interaction
  - Add ErrorBoundary component wrapper

- [ ] **Better error messages**
  - Generic "An error occurred" messages
  - Don't guide users on how to fix issues
  - Add i18n support for error messages

### Accessibility (a11y)

- [ ] **Add ARIA labels and roles**
  - Grid: Missing row/cell ARIA labels
  - Form: Fields missing aria-describedby for errors
  - Dialog: Missing aria-labelledby
  - CustomCheckBox: No accessible name

- [ ] **Keyboard navigation improvements**
  - Grid: Tab navigation between cells not intuitive
  - Form: Multi-step forms need keyboard shortcuts
  - Dialog: Escape key doesn't always work

- [ ] **Focus management**
  - Dialog: Focus not trapped inside modal
  - Form: Focus not moved to first error field on submit
  - Grid: No focus indicator on action buttons

### Testing

- [ ] **Add unit tests**
  - Zero test coverage currently
  - Start with utility functions (utils.js, helper.js)
  - Add tests for crud-helper functions
  - Mock HTTP requests for API calls

- [ ] **Add integration tests**
  - Grid + Form workflow
  - StateProvider context usage
  - Router integration

- [ ] **Add E2E tests**
  - Complete CRUD operations
  - Multi-step form submission
  - Grid filtering and sorting

---

## 📊 **Performance Optimizations**

### Grid Component

- [ ] **Virtualization for large datasets**
  - Consider windowing for 1000+ records
  - DataGridPremium supports it but not configured
  - File: `Grid/index.js`

- [ ] **Debounce filter updates**
  - updateFilters called on every keystroke
  - Add 300ms debounce
  - File: `Grid/index.js` (~920)

- [ ] **Lazy load lookup data**
  - All lookups fetched upfront
  - Load on-demand when dropdown opens
  - File: `Grid/crud-helper.js`

- [ ] **Optimize dateColumns processing**
  - Processes every record on every render
  - Memoize date formatting functions
  - File: `Grid/crud-helper.js`

### Form Component

- [ ] **Lazy load field components**
  - All field types imported upfront
  - Use React.lazy for code splitting
  - File: `Form/field-mapper.js`

- [ ] **Optimize cascading lookup hook**
  - useCascadingLookup can cause multiple re-renders
  - Add better memoization
  - File: `hooks/useCascadingLookup.js`

- [ ] **Debounce expensive field calculations**
  - Number field: Min/max resolution on every keystroke
  - JSONInput: State updates on every change
  - Add useDebounce consistently

### Bundle Size

- [ ] **Tree-shaking optimization**
  - Check if MUI components are tree-shakeable
  - Use named imports everywhere
  - Analyze bundle with rollup-plugin-visualizer

- [ ] **Code splitting**
  - Split Grid and Form into separate chunks
  - Lazy load locale files
  - Dynamic imports for heavy dependencies

- [ ] **Reduce peer dependencies size**
  - MUI X Data Grid Premium is heavy (~500KB)
  - Consider offering Community version option
  - Document bundle size implications

---

## 🏗️ **Architecture & Maintainability**

### Component Structure

- [ ] **Split large components**
  - Grid component: 1200+ lines (too large)
  - Split into: GridToolbar, GridBody, GridFilters, GridPreferences
  - Form component: 390+ lines
  - Split into: FormLayout, FormValidation, FormSubmit

- [ ] **Extract business logic from components**
  - Grid: fetchData logic should be in service layer
  - Form: validation schema generation should be separate
  - Create `/services` folder for API calls

- [ ] **Create custom hooks**
  - `useGridData` - encapsulate data fetching
  - `useFormValidation` - validation logic
  - `usePermissions` - permission checking
  - `useLocalization` - i18n wrapper

### State Management

- [ ] **Review StateProvider complexity**
  - Growing number of action types (15+)
  - Consider splitting into multiple contexts:
    - AuthContext (userData, permissions)
    - UIContext (loader, pageTitle)
    - LocalizationContext (locale, timezone)
  - File: `useRouter/StateProvider.js`

- [ ] **Move API state out of components**
  - Consider React Query or SWR for server state
  - Separate client state from server state
  - Better cache invalidation

- [ ] **Standardize state updates**
  - Some use setState directly, others use dispatch
  - Document when to use which approach
  - Add state update utilities

### Documentation

- [ ] **Add JSDoc comments**
  - Most functions lack documentation
  - Add param types and return types
  - Include usage examples

- [ ] **Create component API docs**
  - Document all props for each component
  - Add "when to use" guidelines
  - Include common patterns and recipes

- [ ] **Add migration guides**
  - How to upgrade between versions
  - Breaking changes documentation
  - Deprecation warnings

- [ ] **Improve README.md**
  - Add getting started guide
  - Include troubleshooting section
  - Add FAQ section
  - Current README is 860 lines (too long)

### Build & Dev Experience

- [ ] **Add ESLint configuration**
  - Currently no linting
  - Add rules for React best practices
  - Enable hooks plugin

- [ ] **Add Prettier configuration**
  - Inconsistent formatting
  - Add pre-commit hook with Husky
  - Configure line length, quotes, etc.

- [ ] **Add conventional commits**
  - Setup commitlint
  - Add commit message templates
  - Helps with changelog generation

- [ ] **Setup CI/CD pipeline**
  - Automated testing on PR
  - Build verification
  - Bundle size checks
  - Version bumping

---

## 🐛 **Bug Fixes**

### Grid

- [ ] **Fix baseFilters mutation** ✅ **DONE**
  - ~~Was mutating prop array~~
  - ~~Now creates copy before modification~~

- [ ] **selectedSet state management** ✅ **DONE**
  - ~~Was using ref causing stale closures~~
  - ~~Now uses proper state~~

- [ ] **Export with all columns hidden**
  - Shows message but should disable export button
  - File: `Grid/index.js` (~925)

- [ ] **Pagination reset on filter**
  - Should reset to page 0 when filters change
  - Currently stays on current page

- [ ] **Column reordering not persisted**
  - Grid preferences save visibility but not order
  - File: `Grid/GridPreference.js`

### Form

- [ ] **Multi-step form validation**
  - Validates all steps even if on step 1
  - Should validate only current step
  - File: `Form/field-mapper.js`

- [ ] **Date field timezone issues**
  - Inconsistent UTC/local time handling
  - keepLocal flag not working correctly
  - Files: `Form/fields/date.js`, `Form/fields/dateTime.js`

- [ ] **Cascading selects clearing incorrectly**
  - When parent changes, child should clear
  - Currently retains invalid value
  - File: `hooks/useCascadingLookup.js`

- [ ] **FileUpload progress not shown**
  - Shows loader but no progress percentage
  - File: `Form/fields/fileUpload.js`

### StateProvider

- [ ] **Memory leak in formatDate**
  - Creates new dayjs instance on every call
  - Should cache formatted values
  - File: `useRouter/StateProvider.js`

- [ ] **Duplicate apiEndpoints ref**
  - Using ref but could use state
  - Makes React DevTools harder to debug
  - File: `useRouter/StateProvider.js`

---

## 🎨 **UI/UX Improvements**

### Grid

- [ ] **Add loading skeleton**
  - Currently shows spinner only
  - Add skeleton rows for better UX
  - Reduces perceived loading time

- [ ] **Empty state improvements**
  - Generic "No data" message
  - Add illustrations and helpful text
  - Suggest actions user can take

- [ ] **Better mobile responsiveness**
  - Grid columns don't stack well on mobile
  - Add horizontal scroll indicator
  - Consider mobile-specific view

- [ ] **Inline editing support**
  - Currently requires navigating to form
  - Add double-click to edit cell
  - Quick edit mode for single fields

### Form

- [ ] **Add field hints/tooltips**
  - Help text for complex fields
  - Validation rules preview
  - Example values

- [ ] **Improve error display**
  - Errors appear only on submit
  - Add inline validation as user types
  - Visual error summary at top of form

- [ ] **Add form progress indicator**
  - Show completion percentage
  - Required vs optional fields count
  - Especially useful for long forms

- [ ] **Better date picker UX**
  - Add quick date selections (Today, Tomorrow, etc.)
  - Calendar view improvements
  - Time zone indicator

### General

- [ ] **Dark mode support**
  - Add theme toggle
  - Persist preference
  - Update all components

- [ ] **Add loading states**
  - Skeleton loaders
  - Progress bars
  - Optimistic updates

- [ ] **Improve animation/transitions**
  - Dialog entrance/exit
  - Form field focus
  - Grid row hover

---

## 🌐 **Internationalization (i18n)**

- [ ] **Complete translation coverage**
  - Grid: Some strings hardcoded in English
  - Form: Validation messages not translated
  - Add translation keys for all user-facing text

- [ ] **RTL language support**
  - Layout breaks for Arabic/Hebrew
  - Add RTL CSS variants
  - Test with rtl-css-js

- [ ] **Date/Number localization**
  - Use Intl API for formatting
  - Respect user's locale preference
  - Currency formatting for number fields

- [ ] **Dynamic locale loading**
  - Currently loads all locales upfront
  - Lazy load locale files
  - Reduce initial bundle size

---

## 📦 **Package & Distribution**

- [ ] **Separate Form component**
  - Form is independent, could be separate package
  - `@durlabh/dframework-form`
  - Reduces bundle for grid-only users

- [ ] **Create lite version**
  - Grid without Premium features
  - Smaller bundle size
  - Lower peer dependency cost

- [ ] **Add CJS build**
  - Currently ESM only
  - Some projects need CommonJS
  - Add dual build support

- [ ] **Improve peer dependencies**
  - Mark more as optional
  - Add peerDependenciesMeta
  - Document minimum versions

- [ ] **Add source maps**
  - Better debugging experience
  - Separate .map files
  - Configure in vite.config.js

---

## 📝 **Technical Debt**

### Code Cleanup

- [ ] **Remove commented code**
  - Multiple files have commented blocks
  - Remove or uncomment with explanation
  - Use git history instead

- [ ] **Fix console.log statements**
  - Remove debug logs in production
  - Use proper logging library
  - Add log levels

- [ ] **Standardize import order**
  - React imports first
  - External libraries
  - Internal imports
  - Styles last

- [ ] **Fix file naming inconsistency**
  - Some files PascalCase, others camelCase
  - StateProvider.js vs stateReducer.js
  - Standardize across project

### Dependencies

- [ ] **Audit and update dependencies**
  - Check for security vulnerabilities
  - Update to latest stable versions
  - Remove unused dependencies

- [ ] **Replace moment with dayjs everywhere**
  - Already using dayjs in some places
  - Ensure no moment imports remain
  - Smaller bundle size

- [ ] **Review Material-UI usage**
  - Using v7 (latest)
  - Check if all components used efficiently
  - Remove unused imports

---

## 🚀 **Feature Requests**

### Grid

- [ ] **Export to Excel with formatting**
  - Currently basic CSV/JSON
  - Add XLSX with cell formatting
  - Include formulas

- [ ] **Advanced filtering UI**
  - Filter builder interface
  - Save filter presets
  - Share filters via URL

- [ ] **Bulk operations**
  - Select multiple rows
  - Bulk edit/delete
  - Bulk export selected

- [ ] **Column grouping**
  - Group by column value
  - Aggregate functions
  - Expandable groups

### Form

- [ ] **Conditional fields**
  - Show/hide based on other field values
  - Already partially implemented with `skip` prop
  - Make more declarative

- [ ] **Field dependencies**
  - Auto-fill based on other fields
  - Calculation fields
  - Linked validations

- [ ] **Draft saving**
  - Auto-save form progress
  - Restore on page reload
  - Warn on navigation

- [ ] **Form templates**
  - Save form configurations
  - Reuse across models
  - Template marketplace

### General

- [ ] **Audit logging**
  - Track all CRUD operations
  - User action history
  - Export audit trail

- [ ] **Offline support**
  - Service worker integration
  - IndexedDB caching
  - Sync when online

- [ ] **Real-time updates**
  - WebSocket support
  - Live data updates
  - Collaborative editing

---

## 🔧 **Refactoring Opportunities**

### High Impact, Low Effort

1. **Extract Grid constants** (2 hours)
2. **Add PropTypes to top 5 components** (4 hours)
3. **Remove console.log statements** (1 hour)
4. **Add ESLint + Prettier** (2 hours)
5. **Fix magic numbers** (2 hours)

### High Impact, Medium Effort

1. **Split Grid component** (8 hours)
2. **Implement request cancellation** (4 hours)
3. **Add error boundaries** (4 hours)
4. **Create custom hooks** (8 hours)
5. **Add unit tests for utilities** (16 hours)

### High Impact, High Effort

1. **TypeScript migration** (40 hours)
2. **Add comprehensive test suite** (40 hours)
3. **Implement React Query** (24 hours)
4. **Create separate packages** (16 hours)
5. **Complete accessibility audit** (24 hours)

---

## 📋 **Priority Matrix**

### Do First (High Impact + Low Effort)
- Add PropTypes/TypeScript
- Extract constants
- Add ESLint/Prettier
- Fix security issues
- Add error boundaries

### Schedule (High Impact + High Effort)
- Comprehensive testing
- Component splitting
- Performance optimizations
- Accessibility improvements

### Quick Wins (Low Impact + Low Effort)
- Remove dead code
- Fix console.logs
- Standardize naming
- Improve comments

### Consider Later (Low Impact + High Effort)
- Complete i18n
- Dark mode
- Advanced features
- Real-time updates

---

## 📖 **Changelog Template**

For future releases, maintain a CHANGELOG.md with format:

```markdown
## [1.1.0] - 2026-XX-XX

### Added
- Feature descriptions

### Changed
- Breaking changes (major version)
- Non-breaking changes

### Fixed
- Bug fixes

### Deprecated
- Features to be removed

### Security
- Security patches
```

---

## 🎯 **Version 2.0 Roadmap**

**Breaking Changes for v2.0:**
1. TypeScript migration
2. Remove deprecated props
3. Restructure package exports
4. Update peer dependencies
5. Change StateProvider API

**Timeline:** Q3 2026

**Migration Guide:** Create before release

---

## 📞 **Support & Contribution**

- Add CONTRIBUTING.md
- Add CODE_OF_CONDUCT.md
- Setup GitHub issues templates
- Add PR template
- Setup discussions

---

**Total Items:** 150+  
**Estimated Effort:** 400+ hours  
**Recommended Team:** 2-3 developers  
**Timeline:** 6-12 months for complete overhaul

---

*Note: This is a living document. Update as items are completed or priorities change.*

"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.every.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.find.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _StateProvider = require("../../useRouter/StateProvider");
var _httpRequest = require("../../Grid/httpRequest");
const _excluded = ["column", "field", "formik", "lookups", "dependsOn", "fieldConfigs", "mode", "api"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const consts = {
  limitTags: 5
};
const Field = /*#__PURE__*/React.memo(_ref => {
  let {
      column,
      field,
      formik,
      lookups,
      dependsOn,
      fieldConfigs = {},
      mode,
      api
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  const {
    stateData
  } = (0, _StateProvider.useStateContext)();
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // Memoize current field value to avoid dependency on entire formik.values
  const currentFieldValue = React.useMemo(() => formik.values[field], [formik.values, field]);

  // Memoize input value processing to avoid recalculation on each render
  const inputValue = React.useMemo(() => {
    var _currentFieldValue$sp;
    return (currentFieldValue === null || currentFieldValue === void 0 || (_currentFieldValue$sp = currentFieldValue.split(", ")) === null || _currentFieldValue$sp === void 0 ? void 0 : _currentFieldValue$sp.map(Number)) || [];
  }, [currentFieldValue]);

  // Memoize dependency values to prevent unnecessary re-renders
  const dependencyValues = React.useMemo(() => {
    const toReturn = {};
    if (!dependsOn || !Array.isArray(dependsOn)) return toReturn;
    for (const dependency of dependsOn) {
      toReturn[dependency] = formik.values[dependency];
    }
    return toReturn;
  }, [dependsOn, ...(dependsOn || []).map(field => formik.values[field])]);

  // Check if this field has dependencies
  const hasDependencies = React.useMemo(() => dependsOn && Array.isArray(dependsOn) && dependsOn.length, [dependsOn]);
  const initialOptions = React.useMemo(() => {
    if (hasDependencies) {
      return []; // Start empty for cascading combos
    }
    return lookups ? lookups[column.lookup] : [];
  }, [lookups, column.lookup, hasDependencies]);

  // Fetch cascading combo options
  const fetchCascadingOptions = React.useCallback(async () => {
    if (!hasDependencies || !column.lookup) return;
    setLoading(true);
    try {
      // Only fetch if all dependencies have values
      const allDependenciesHaveValues = Object.values(dependencyValues).every(value => value !== null && value !== undefined && value !== '');
      if (!allDependenciesHaveValues) {
        setOptions([]);
        return;
      }
      const requestBody = [{
        lookup: column.lookup,
        where: dependencyValues
      }];
      const response = await (0, _httpRequest.transport)({
        url: "".concat(api, "/combo"),
        data: requestBody,
        method: 'POST'
      });
      if (response.data && response.data.success && response.data.lookups) {
        const fetchedOptions = response.data.lookups[column.lookup] || [];
        setOptions(fetchedOptions);

        // Clear current value if selected options are not in the new options
        const validValues = inputValue.filter(val => fetchedOptions.find(opt => opt.value === val));
        if (validValues.length !== inputValue.length) {
          formik.setFieldValue(field, validValues.length > 0 ? validValues.join(', ') : '');
        }
      }
    } catch (error) {
      console.error('Error fetching cascading options:', error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  }, [hasDependencies, column.lookup, dependencyValues, field, api, inputValue, formik.setFieldValue]);

  // Initialize options
  React.useEffect(() => {
    if (hasDependencies) {
      fetchCascadingOptions();
    } else {
      setOptions(initialOptions);
    }
  }, [hasDependencies, fetchCascadingOptions, initialOptions]);

  // Memoize filtered options to avoid recalculation on each render
  const filteredOptions = React.useMemo(() => {
    let processedOptions = [...options];
    const {
      filter
    } = column;
    if (typeof filter === "function" && processedOptions.length) {
      processedOptions = filter({
        options: processedOptions,
        stateData
      }) || processedOptions;
    }
    return processedOptions;
  }, [options, column.filter, stateData]);

  // Memoize filtered combos to avoid recalculation on each render
  const filteredCombos = React.useMemo(() => filteredOptions.filter(option => inputValue.includes(option.value)) || [], [filteredOptions, inputValue]);

  // Memoize disabled state
  const isDisabled = React.useMemo(() => mode !== 'copy' && fieldConfigs.disabled, [mode, fieldConfigs.disabled]);

  // Memoize event handler to prevent unnecessary re-renders
  const handleAutoCompleteChange = React.useCallback((_, newValue) => {
    formik === null || formik === void 0 || formik.setFieldValue(field, newValue ? newValue.map(val => val.value).join(', ') : '');
  }, [formik === null || formik === void 0 ? void 0 : formik.setFieldValue, field]);
  return /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    variant: "standard",
    error: formik.touched[field] && Boolean(formik.errors[field])
  }, /*#__PURE__*/React.createElement(_Autocomplete.default, _extends({}, otherProps, {
    multiple: true,
    id: field,
    limitTags: column.limitTags || consts.limitTags,
    options: filteredOptions || [],
    getOptionLabel: option => option.label || '',
    defaultValue: filteredCombos,
    renderInput: params => /*#__PURE__*/React.createElement(_TextField.default, _extends({}, params, {
      variant: "standard"
    })),
    onChange: handleAutoCompleteChange,
    value: filteredCombos,
    size: "small",
    disabled: isDisabled || loading,
    loading: loading
  })), formik.touched[field] && formik.errors[field] && /*#__PURE__*/React.createElement(_material.FormHelperText, null, formik.errors[field]));
});
var _default = exports.default = Field;
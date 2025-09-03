"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.every.js");
require("core-js/modules/esnext.iterator.find.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _KeyboardArrowDown = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowDown"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _httpRequest = require("../../Grid/httpRequest");
const _excluded = ["column", "field", "formik", "lookups", "dependsOn", "api"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const SelectField = /*#__PURE__*/_react.default.memo(_ref => {
  let {
      column,
      field,
      formik,
      lookups,
      dependsOn = [],
      api
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  const userSelected = _react.default.useRef(false);
  const {
    placeHolder
  } = column;
  const [options, setOptions] = _react.default.useState([]);

  // Memoize dependency values to prevent unnecessary re-renders
  const dependencyValues = (0, _react.useMemo)(() => {
    const toReturn = {};
    if (!dependsOn.length) return toReturn;
    for (const dependency of dependsOn) {
      toReturn[dependency] = formik.values[dependency];
    }
    return toReturn;
  }, [dependsOn, ...dependsOn.map(dependency => formik.values[dependency])]);
  const initialOptions = (0, _react.useMemo)(() => {
    if (dependsOn.length) {
      return []; // Start empty for cascading combos
    }
    const options = typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
    return options;
  }, [column.lookup, lookups, dependsOn]);

  // Fetch cascading combo options
  const fetchCascadingOptions = async () => {
    if (!dependsOn.length || !column.lookup) return;
    try {
      // Only fetch if all dependencies have values
      const allDependenciesHaveValues = Object.values(dependencyValues).every(value => ![null, undefined, ''].includes(value));
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

        // Clear current value if it's not in the new options
        if (formik.values[field] && !fetchedOptions.find(opt => opt.value === formik.values[field])) {
          formik.setFieldValue(field, '');
        }
      }
    } catch (error) {
      setOptions([]);
    }
  };

  // Single effect to manage options - reduces redundant effects
  (0, _react.useEffect)(() => {
    if (dependsOn.length) {
      fetchCascadingOptions();
    } else if (!userSelected.current) {
      setOptions(initialOptions);
    }
  }, [dependencyValues, initialOptions]);

  // Memoize input value processing to avoid recalculation on each render
  const inputValue = (0, _react.useMemo)(() => {
    let value = formik.values[field];

    // Handle default value selection
    if (options !== null && options !== void 0 && options.length && !value && !column.multiSelect && "IsDefault" in options[0]) {
      const isDefaultOption = options.find(e => e.IsDefault);
      if (isDefaultOption) {
        value = isDefaultOption.value;
        formik.setFieldValue(field, isDefaultOption.value);
      }
    }

    // Handle multi-select values
    if (column.multiSelect) {
      if (!value || value.length === 0) {
        value = [];
      } else if (!Array.isArray(value)) {
        value = value.split(',').map(e => parseInt(e));
      }
    }
    return value;
  }, [formik.values[field], options, column.multiSelect, field, formik.setFieldValue]);

  // Memoize event handlers to prevent unnecessary re-renders of child components
  const handleChange = (0, _react.useCallback)(event => {
    formik.handleChange(event);
    userSelected.current = true;
  }, [formik.handleChange]);

  // Memoize styles to prevent object recreation
  const selectStyles = (0, _react.useMemo)(() => ({
    backgroundColor: column.readOnly ? '#dfdede' : ''
  }), [column.readOnly]);
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    error: formik.touched[field] && formik.errors[field],
    variant: "standard"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, placeHolder ? placeHolder : ""), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
    IconComponent: _KeyboardArrowDown.default
  }, otherProps, {
    name: field,
    multiple: column.multiSelect === true,
    readOnly: column.readOnly === true,
    value: "".concat(inputValue),
    onChange: handleChange,
    onBlur: formik.handleBlur,
    sx: selectStyles
  }), Array.isArray(options) && options.map(option => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: option.value,
    value: option.value,
    disabled: option.isDisabled
  }, option.label))), /*#__PURE__*/_react.default.createElement(_material.FormHelperText, null, formik.touched[field] && formik.errors[field]));
});
var _default = exports.default = SelectField;
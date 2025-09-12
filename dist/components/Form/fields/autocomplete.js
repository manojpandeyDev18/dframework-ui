"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _StateProvider = require("../../useRouter/StateProvider");
var _useCascadingLookup = _interopRequireDefault(require("../../../hooks/useCascadingLookup"));
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
  var _formik$values$field;
  let {
      column,
      field,
      formik,
      lookups,
      dependsOn = [],
      fieldConfigs = {},
      mode,
      api
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  const options = (0, _useCascadingLookup.default)({
    column,
    formik,
    lookups,
    dependsOn,
    api,
    isAutoComplete: true
  });
  const inputValue = ((_formik$values$field = formik.values[field]) === null || _formik$values$field === void 0 || (_formik$values$field = _formik$values$field.split(", ")) === null || _formik$values$field === void 0 ? void 0 : _formik$values$field.map(Number)) || [];
  const filteredCombos = options.filter(option => inputValue.includes(option.value)) || [];
  const isDisabled = mode !== 'copy' && fieldConfigs.disabled;
  const handleAutoCompleteChange = (_, newValue) => {
    formik === null || formik === void 0 || formik.setFieldValue(field, newValue ? newValue.map(val => val.value).join(', ') : '');
  };
  return /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    variant: "standard",
    error: formik.touched[field] && Boolean(formik.errors[field])
  }, /*#__PURE__*/React.createElement(_Autocomplete.default, _extends({}, otherProps, {
    multiple: true,
    id: field,
    limitTags: column.limitTags || consts.limitTags,
    options: options || [],
    getOptionLabel: option => option.label || '',
    defaultValue: filteredCombos,
    renderInput: params => /*#__PURE__*/React.createElement(_TextField.default, _extends({}, params, {
      variant: "standard"
    })),
    onChange: handleAutoCompleteChange,
    value: filteredCombos,
    size: "small",
    disabled: isDisabled
  })), formik.touched[field] && formik.errors[field] && /*#__PURE__*/React.createElement(_material.FormHelperText, null, formik.errors[field]));
});
var _default = exports.default = Field;
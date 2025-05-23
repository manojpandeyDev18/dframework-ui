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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Field = _ref => {
  var _formik$values$field, _options;
  let {
    column,
    field,
    formik,
    lookups,
    data,
    otherProps,
    model,
    fieldConfigs,
    mode
  } = _ref;
  let inputValue = ((_formik$values$field = formik.values[field]) === null || _formik$values$field === void 0 || (_formik$values$field = _formik$values$field.split(", ")) === null || _formik$values$field === void 0 ? void 0 : _formik$values$field.map(Number)) || [];
  let options = lookups ? lookups[column === null || column === void 0 ? void 0 : column.lookup] : [];
  const {
    filter
  } = column;
  if (filter) {
    options = filter({
      options
    });
  }
  let filteredCombos = ((_options = options) === null || _options === void 0 ? void 0 : _options.filter(option => inputValue.includes(option.value))) || [];
  let isDisabled;
  if (mode !== 'copy') {
    isDisabled = fieldConfigs === null || fieldConfigs === void 0 ? void 0 : fieldConfigs.disabled;
  }
  const handleAutoCompleteChange = (event, newValue) => {
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
    limitTags: column.limitTags || 5,
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
};
var _default = exports.default = Field;
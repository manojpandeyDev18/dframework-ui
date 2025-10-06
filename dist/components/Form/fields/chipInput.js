"use strict";

require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _material = require("@mui/material");
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _utils = _interopRequireDefault(require("../../utils"));
const _excluded = ["key"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Field = _ref => {
  var _formik$values$field, _fieldConfigs$disable;
  let {
    isAdd,
    column,
    field,
    formik,
    otherProps,
    fieldConfigs = {},
    mode
  } = _ref;
  const inputValue = (_formik$values$field = formik.values[field]) !== null && _formik$values$field !== void 0 && _formik$values$field.length ? column.dataFormat === _utils.default.filterFieldDataTypes.String ? formik.values[field].split(",") : formik.values[field] : [];
  const isDisabled = mode === 'copy' || (((_fieldConfigs$disable = fieldConfigs.disabled) !== null && _fieldConfigs$disable !== void 0 ? _fieldConfigs$disable : typeof column.disabled === "function") ? column.disabled(window.location.pathname) : column.disabled || false);
  const fixedOptions = column.hasDefault && !isAdd ? [inputValue[0]] : [];
  const handleAutoCompleteChange = (0, _react.useCallback)(function (e, newValue, action) {
    var _newValue$pop, _newValue;
    let item = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    const lastElement = (_newValue$pop = newValue.pop()) === null || _newValue$pop === void 0 ? void 0 : _newValue$pop.trim();
    if (!newValue.includes(lastElement)) {
      newValue.push(lastElement);
    }
    if (fixedOptions && fixedOptions.includes(item.option) && action === "removeOption") {
      newValue = [item.option];
    }
    formik.setFieldValue(field, column.dataFormat === _utils.default.filterFieldDataTypes.String ? ((_newValue = newValue) === null || _newValue === void 0 ? void 0 : _newValue.join(',')) || '' : newValue);
  }, [formik, field]);
  return /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    variant: "standard",
    error: formik.touched[field] && Boolean(formik.errors[field])
  }, /*#__PURE__*/React.createElement(_Autocomplete.default, _extends({}, otherProps, {
    multiple: true,
    id: field,
    freeSolo: true,
    value: inputValue,
    options: [],
    renderInput: params => {
      var _params$InputProps;
      return /*#__PURE__*/React.createElement(_TextField.default, _extends({}, params, {
        variant: "standard",
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          sx: _objectSpread(_objectSpread({}, (_params$InputProps = params.InputProps) === null || _params$InputProps === void 0 ? void 0 : _params$InputProps.sx), isDisabled && {
            backgroundColor: '#dfdede'
          })
        })
      }));
    },
    onChange: handleAutoCompleteChange,
    size: "small",
    renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => {
      const _getTagProps = getTagProps({
          index
        }),
        {
          key
        } = _getTagProps,
        tagProps = _objectWithoutProperties(_getTagProps, _excluded);
      return /*#__PURE__*/React.createElement(_Chip.default, _extends({
        key: key,
        label: option
      }, tagProps, {
        disabled: fixedOptions.includes(option)
      }));
    }),
    disabled: isDisabled
  })), formik.touched[field] && formik.errors[field] && /*#__PURE__*/React.createElement(_material.FormHelperText, null, formik.errors[field]));
};
var _default = exports.default = Field;
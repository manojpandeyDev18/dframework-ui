"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));
var _material = require("@mui/material");
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
const _excluded = ["column", "field", "formik"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const Field = _ref => {
  let {
      column,
      field,
      formik
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  const handleChange = event => {
    formik.setFieldValue(field, event.target.checked);
  };
  const checked = (0, _react.useMemo)(() => {
    var _formik$values$field;
    return (_formik$values$field = formik.values[field]) !== null && _formik$values$field !== void 0 ? _formik$values$field : !!column.defaultValue;
  }, [formik, column]);
  const isDisabled = typeof column.readOnly === 'function' ? column.readOnly(formik) : column.readOnly;
  return /*#__PURE__*/_react.default.createElement("div", {
    key: field
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({}, otherProps, {
      name: field,
      disabled: isDisabled || column.disabled === true,
      checked: checked,
      onChange: handleChange,
      onBlur: formik.handleBlur
    }))
  }), /*#__PURE__*/_react.default.createElement(_material.FormHelperText, {
    error: formik.touched[field] && Boolean(formik.errors[field])
  }, formik.touched[field] && formik.errors[field]));
};
var _default = exports.default = Field;
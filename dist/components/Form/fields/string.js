"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _react = _interopRequireDefault(require("react"));
const _excluded = ["column", "field", "formik", "label"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const field = _ref => {
  let {
      column,
      field,
      formik,
      label
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  const rows = column.rows || (column.multiline ? 5 : 1);
  console.log("Other props are ", otherProps);
  return /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
    type: "text",
    variant: column.variant || "standard",
    InputProps: {
      readOnly: column.readOnly === true,
      sx: column.readOnly ? {
        backgroundColor: '#dfdede'
      } // Light grey background for read-only inputs
      : undefined
    },
    key: field,
    required: column.required,
    multiline: column.multiline,
    rows: rows,
    label: "",
    fullWidth: true,
    name: field,
    value: formik.values[field],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched[field] && Boolean(formik.errors[field]),
    helperText: formik.touched[field] && formik.errors[field],
    autoComplete: column.autoComplete
  }, otherProps, {
    defaultValue: column.defaultValue
  }));
};
var _default = exports.default = field;
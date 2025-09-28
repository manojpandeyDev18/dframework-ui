"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _DateTimePicker = require("@mui/x-date-pickers/DateTimePicker");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _StateProvider = require("../../useRouter/StateProvider");
const _excluded = ["column", "field", "formik"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  const {
    systemDateTimeFormat,
    stateData
  } = (0, _StateProvider.useStateContext)();
  return /*#__PURE__*/_react.default.createElement(_DateTimePicker.DateTimePicker, _extends({}, otherProps, {
    variant: "standard",
    readOnly: (column === null || column === void 0 ? void 0 : column.readOnly) === true,
    key: field,
    fullWidth: true,
    format: systemDateTimeFormat(false, false, stateData.dateTime),
    name: field,
    value: (0, _dayjs.default)(formik.values[field]),
    onChange: value => formik.setFieldValue(field, value),
    onBlur: formik.handleBlur,
    helperText: formik.touched[field] && formik.errors[field],
    minDateTime: column.min ? (0, _dayjs.default)(column.min) : null,
    maxDateTime: column.max ? (0, _dayjs.default)(column.max) : null,
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: formik.errors[field],
        variant: "standard"
      }
    }
  }));
};
var _default = exports.default = Field;
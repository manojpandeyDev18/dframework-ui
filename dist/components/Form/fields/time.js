"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireDefault(require("react"));
var _TimePicker = require("@mui/x-date-pickers/TimePicker");
var _dayjs = _interopRequireDefault(require("dayjs"));
const _excluded = ["column", "field", "formik"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const field = _ref => {
  let {
      column,
      field,
      formik
    } = _ref,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  let inputValue = formik.values[field];
  if (column.isUtc) {
    inputValue = _dayjs.default.utc(inputValue).utcOffset((0, _dayjs.default)().utcOffset(), true).format();
  }
  return /*#__PURE__*/_react.default.createElement(_TimePicker.TimePicker, _extends({}, otherProps, {
    variant: "standard",
    readOnly: column.readOnly === true,
    key: field,
    fullWidth: true,
    name: field,
    value: (0, _dayjs.default)(inputValue),
    onChange: value => {
      if (column.isUtc) {
        value = value && value.isValid() ? value.format('YYYY-MM-DDTHH:mm:ss') + '.000Z' : null;
      }
      return formik.setFieldValue(field, value);
    },
    onBlur: formik.handleBlur,
    helperText: formik.touched[field] && formik.errors[field],
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: formik.errors[field],
        variant: "standard"
      }
    }
  }));
};
var _default = exports.default = field;
"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SelectField = _ref => {
  let {
    column,
    field,
    label,
    formik,
    activeRecord,
    lookups,
    otherProps,
    classes,
    onChange,
    getRecordAndLookups
  } = _ref;
  const userSelected = _react.default.useRef(false);
  const {
    filter
  } = column;
  const initialOptions = (0, _react.useMemo)(() => {
    let options = typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
    if (filter) {
      return filter({
        options,
        currentValue: formik.values[field],
        state: formik.values
      });
    }
    return options;
  }, [column.lookup, filter, lookups, field, formik.values]);
  const [options, setOptions] = _react.default.useState(initialOptions);
  (0, _react.useEffect)(() => {
    if (!userSelected.current) {
      setOptions(initialOptions);
    }
  }, [initialOptions, userSelected.current]);
  const setActiveRecord = lookups => {
    const {
      State
    } = lookups;
    if (!State) return;
    if (!userSelected.current) {
      setOptions(State);
    }
  };
  const onOpen = () => {
    if (!column.parentComboField) return;
    const valueField = column.parentComboField;
    if (!formik.values[valueField]) return;
    getRecordAndLookups({
      scopeId: formik.values[valueField],
      lookups: column.lookup,
      customSetIsLoading: () => {},
      customSetActiveRecord: setActiveRecord
    });
  };
  (0, _react.useEffect)(() => {
    onOpen();
  }, [formik.values[column.parentComboField]]);
  let inputValue = formik.values[field];
  if (options !== null && options !== void 0 && options.length && !inputValue && !column.multiSelect && "IsDefault" in options[0]) {
    const isDefaultOption = options.find(e => e.IsDefault);
    if (isDefaultOption) {
      inputValue = isDefaultOption.value;
      formik.setFieldValue(field, isDefaultOption.value);
    }
  }
  if (column.multiSelect) {
    if (!inputValue || inputValue.length === 0) {
      inputValue = [];
    } else {
      if (!Array.isArray(inputValue)) {
        inputValue = inputValue.split(',').map(e => parseInt(e));
      }
    }
  }
  const handleChange = event => {
    formik.handleChange(event); // Update formik's state
    userSelected.current = true;
  };
  return /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    error: formik.touched[field] && formik.errors[field],
    variant: "standard"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, null, label), /*#__PURE__*/_react.default.createElement(_Select.default, _extends({
    IconComponent: _KeyboardArrowDown.default
  }, otherProps, {
    name: field,
    onOpen: onOpen,
    multiple: column.multiSelect === true,
    readOnly: column.readOnly === true,
    value: "".concat(inputValue),
    onChange: handleChange,
    onBlur: formik.handleBlur,
    MenuProps: {
      classes: {
        // list: classes.select
      }
    }
  }), Array.isArray(options) && options.map(option => /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    key: option.value,
    value: option.value,
    disabled: option.isDisabled
  }, option.label))), /*#__PURE__*/_react.default.createElement(_material.FormHelperText, null, formik.touched[field] && formik.errors[field]));
};
var _default = exports.default = SelectField;
"use strict";

require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.json.stringify.js");
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Field = _ref => {
  var _formik$values$field;
  let {
    column,
    field,
    fieldLabel,
    formik,
    lookups,
    data,
    otherProps,
    model,
    fieldConfigs,
    mode
  } = _ref;
  // const inputJSON = JSON.parse(formik.values[field]);
  const [state, setState] = React.useState({});
  console.log(state);
  let inputValue = ((_formik$values$field = formik.values[field]) === null || _formik$values$field === void 0 || (_formik$values$field = _formik$values$field.split(", ")) === null || _formik$values$field === void 0 ? void 0 : _formik$values$field.map(Number)) || [];
  const options = lookups ? lookups[column === null || column === void 0 ? void 0 : column.lookup] : [];
  let filteredCombos = (options === null || options === void 0 ? void 0 : options.filter(option => inputValue.includes(option.value))) || [];
  let isDisabled;
  if (mode !== 'copy') {
    isDisabled = fieldConfigs === null || fieldConfigs === void 0 ? void 0 : fieldConfigs.disabled;
  }
  const handleAutoCompleteChange = (event, newValue) => {
    formik === null || formik === void 0 || formik.setFieldValue(field, newValue ? newValue.map(val => val.value).join(', ') : '');
  };
  React.useEffect(() => {
    if (!formik.values[field]) return;
    const inputJSON = JSON.parse(formik.values[field]);
    setState(inputJSON);
  }, [formik.values[field]]);
  return /*#__PURE__*/React.createElement(_FormControl.default, {
    fullWidth: true,
    key: field,
    variant: "standard",
    error: formik.touched[field] && Boolean(formik.errors[field])
  }, Object.keys(state).map((key, index) => /*#__PURE__*/React.createElement(_TextField.default, {
    key: key,
    label: key,
    name: key,
    value: state[key],
    onChange: e => {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        [key]: e.target.value
      }));
      formik.setFieldValue(field, JSON.stringify(state));
    }
  })));
};
var _default = exports.default = Field;
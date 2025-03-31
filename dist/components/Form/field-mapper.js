"use strict";

require("core-js/modules/es.error.cause.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/esnext.iterator.filter.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BooleanField", {
  enumerable: true,
  get: function get() {
    return _boolean.default;
  }
});
Object.defineProperty(exports, "DateField", {
  enumerable: true,
  get: function get() {
    return _date.default;
  }
});
Object.defineProperty(exports, "GridTransfer", {
  enumerable: true,
  get: function get() {
    return _gridTransfer.default;
  }
});
Object.defineProperty(exports, "NumberField", {
  enumerable: true,
  get: function get() {
    return _number.default;
  }
});
Object.defineProperty(exports, "PasswordField", {
  enumerable: true,
  get: function get() {
    return _password.default;
  }
});
Object.defineProperty(exports, "SelectField", {
  enumerable: true,
  get: function get() {
    return _select.default;
  }
});
Object.defineProperty(exports, "StringField", {
  enumerable: true,
  get: function get() {
    return _string.default;
  }
});
Object.defineProperty(exports, "TimeField", {
  enumerable: true,
  get: function get() {
    return _time.default;
  }
});
exports.fieldMappers = exports.default = void 0;
require("core-js/modules/es.array.push.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/esnext.set.difference.v2.js");
require("core-js/modules/esnext.set.intersection.v2.js");
require("core-js/modules/esnext.set.is-disjoint-from.v2.js");
require("core-js/modules/esnext.set.is-subset-of.v2.js");
require("core-js/modules/esnext.set.is-superset-of.v2.js");
require("core-js/modules/esnext.set.symmetric-difference.v2.js");
require("core-js/modules/esnext.set.union.v2.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url-search-params.js");
require("core-js/modules/web.url-search-params.delete.js");
require("core-js/modules/web.url-search-params.has.js");
require("core-js/modules/web.url-search-params.size.js");
var React = _interopRequireWildcard(require("react"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _boolean = _interopRequireDefault(require("./fields/boolean"));
var _string = _interopRequireDefault(require("./fields/string"));
var _number = _interopRequireDefault(require("./fields/number"));
var _password = _interopRequireDefault(require("./fields/password"));
var _date = _interopRequireDefault(require("./fields/date"));
var _dateTime = _interopRequireDefault(require("./fields/dateTime"));
var _time = _interopRequireDefault(require("./fields/time"));
var _select = _interopRequireDefault(require("./fields/select"));
var _gridTransfer = _interopRequireDefault(require("./fields/grid-transfer"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _radio = _interopRequireDefault(require("./fields/radio"));
var _autocomplete = _interopRequireDefault(require("./fields/autocomplete"));
var _Stepper = _interopRequireDefault(require("@mui/material/Stepper"));
var _Step = _interopRequireDefault(require("@mui/material/Step"));
var _StepLabel = _interopRequireDefault(require("@mui/material/StepLabel"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _dayRadio = _interopRequireDefault(require("./fields/dayRadio"));
var _core = require("@material-ui/core");
var _material = require("@mui/material");
var _Form = require("./Form");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _chipInput = _interopRequireDefault(require("./fields/chipInput"));
var _treeCheckBox = _interopRequireDefault(require("./fields/treeCheckBox"));
var _fileUpload = _interopRequireDefault(require("./fields/fileUpload"));
var _jsonInput = _interopRequireDefault(require("./fields/jsonInput"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
const fieldMappers = exports.fieldMappers = {
  "boolean": _boolean.default,
  "select": _select.default,
  "string": _string.default,
  "number": _number.default,
  "password": _password.default,
  "date": _date.default,
  "dateTime": _dateTime.default,
  "time": _time.default,
  "oneToMany": _gridTransfer.default,
  "radio": _radio.default,
  "autocomplete": _autocomplete.default,
  "dayRadio": _dayRadio.default,
  "email": _string.default,
  "chipInput": _chipInput.default,
  "treeCheckbox": _treeCheckBox.default,
  "fileUpload": _fileUpload.default,
  "json": _jsonInput.default
};
const useStyles = (0, _core.makeStyles)({
  root: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  childStyles: {
    paddingTop: "2.5px",
    paddingBottom: "2.5px"
  },
  stepLabel: {
    fontSize: "20px !important"
  },
  stepperMain: {
    marginBottom: "20px"
  },
  renderSteps: {
    marginTop: "20px"
  }
});
const RenderSteps = _ref => {
  let {
    tabColumns,
    model,
    formik,
    data,
    onChange,
    combos,
    lookups,
    fieldConfigs,
    mode,
    handleSubmit
  } = _ref;
  const [skipped, setSkipped] = React.useState(new Set());
  const {
    activeStep,
    setActiveStep
  } = React.useContext(_Form.ActiveStepContext);
  const classes = useStyles();
  let skipSteps = {};
  for (let index = 0, len = model.columns.length; index < len; index++) {
    const {
      field,
      skip
    } = model.columns[index];
    if (skip) {
      skipSteps[skip.step] = formik.values[field];
    }
  }
  const isStepSkipped = step => {
    return skipped.has(step) || skipSteps[step];
  };
  const isLastStep = () => {
    for (let nextStep = activeStep + 1; nextStep < tabColumns.length; nextStep++) {
      if (!isStepSkipped(nextStep)) {
        return false;
      }
    }
    return true;
  };
  const handleNext = () => {
    let nextStep = activeStep + 1;
    while (skipSteps[nextStep]) {
      nextStep++;
    }
    setSkipped(prevSkipped => new Set(prevSkipped).add(activeStep));
    if (nextStep >= tabColumns.length || isLastStep()) {
      handleSubmit();
    } else {
      setActiveStep(nextStep);
    }
  };
  const handleBack = () => {
    let prevStep = activeStep - 1;
    while (skipSteps[prevStep] && prevStep > 0) {
      prevStep--;
    }
    setActiveStep(prevStep);
  };
  if (!(tabColumns !== null && tabColumns !== void 0 && tabColumns.length)) {
    return null;
  }
  const currentStep = tabColumns[activeStep];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Stepper.default, {
    activeStep: activeStep,
    className: classes.stepperMain
  }, tabColumns.map((_ref2, index) => {
    let {
      title,
      key
    } = _ref2;
    return /*#__PURE__*/React.createElement(_Step.default, {
      key: key,
      completed: isStepSkipped(index)
    }, /*#__PURE__*/React.createElement(_StepLabel.default, null, /*#__PURE__*/React.createElement(_material.Typography, {
      className: classes.stepLabel
    }, title)));
  })), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RenderColumns, {
    formElements: currentStep.items,
    model: model,
    formik: formik,
    data: data,
    onChange: onChange,
    combos: combos,
    lookups: lookups,
    fieldConfigs: fieldConfigs,
    mode: mode
  }), /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      pt: 2,
      mr: 2
    }
  }, activeStep !== 0 ? /*#__PURE__*/React.createElement(_Button.default, {
    color: "inherit",
    disabled: activeStep === 0,
    onClick: handleBack,
    variant: "contained",
    sx: {
      mr: 2
    }
  }, " ", 'Back') : null, /*#__PURE__*/React.createElement(_Button.default, {
    onClick: handleNext,
    variant: "contained"
  }, isLastStep() ? "Finish" : "Next"))));
};
const RenderColumns = _ref3 => {
  let {
    formElements,
    model,
    formik,
    data,
    onChange,
    combos,
    lookups,
    fieldConfigs,
    mode,
    getRecordAndLookups = () => {},
    isAdd
  } = _ref3;
  const classes = useStyles();
  if (!(formElements !== null && formElements !== void 0 && formElements.length)) {
    return null;
  }
  const ImportantSpan = _styled.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral([" color: red !important; "]))); // * Style Css

  return /*#__PURE__*/React.createElement(React.Fragment, null, formElements.map((_ref4, key) => {
    let {
      Component,
      column,
      field,
      label,
      otherProps
    } = _ref4;
    let isGridComponent = typeof column.relation === 'function';
    return /*#__PURE__*/React.createElement(_Grid.default, {
      container: true,
      spacing: 2,
      key: key,
      className: classes.root,
      alignItems: isGridComponent ? "flex-start" : "center"
    }, (column === null || column === void 0 ? void 0 : column.showLabel) !== false ? /*#__PURE__*/React.createElement(_Grid.default, {
      item: true,
      xs: 3,
      className: classes.childStyles
    }, /*#__PURE__*/React.createElement(_material.Typography, {
      sx: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    }, column.label || field, ": ", column.required && /*#__PURE__*/React.createElement(ImportantSpan, null, "*"))) : null, /*#__PURE__*/React.createElement(_Grid.default, {
      item: true,
      xs: isGridComponent ? 12 : 9,
      className: classes.childStyles
    }, /*#__PURE__*/React.createElement(Component, _extends({
      isAdd: isAdd,
      model: model,
      fieldConfigs: fieldConfigs[field],
      mode: mode,
      column: column,
      field: field,
      label: label,
      formik: formik,
      data: data,
      onChange: onChange,
      combos: combos,
      lookups: lookups,
      getRecordAndLookups: getRecordAndLookups
    }, otherProps))));
  }));
};
const getFormConfig = function getFormConfig(_ref5) {
  let {
    columns,
    tabs = {},
    getRecordAndLookups,
    id,
    searchParams
  } = _ref5;
  const formElements = [],
    tabColumns = {};
  for (const tab in tabs) {
    tabColumns[tab] = [];
  }
  for (const column of columns) {
    let fieldType = column.type;
    if (column.label === null) {
      /* If the field should not be shown in form mode, specify label as null */
      continue;
    }
    const {
      field,
      label,
      tab
    } = column;
    const otherProps = {};
    if (column.options) {
      otherProps.options = column.options;
    }
    const Component = fieldMappers[fieldType];
    if (!Component || column.hideInAddGrid && id === '0') {
      continue;
    }
    const target = tab && tabs[tab] ? tabColumns[tab] : formElements;
    target.push({
      Component,
      field,
      label,
      column: _objectSpread(_objectSpread({}, column), {}, {
        readOnly: searchParams.has('showRelation') || column.readOnly
      }),
      otherProps
    });
  }
  const tabsData = [];
  for (const tabColumn in tabColumns) {
    tabsData.push({
      key: tabColumn,
      title: tabs[tabColumn],
      items: tabColumns[tabColumn]
    });
  }
  return {
    formElements,
    tabColumns: tabsData
  };
};
const FormLayout = _ref6 => {
  let {
    model,
    formik,
    data,
    combos,
    onChange,
    lookups,
    id: displayId,
    fieldConfigs,
    mode,
    handleSubmit,
    getRecordAndLookups = () => {}
  } = _ref6;
  const classes = useStyles();
  const {
    formElements,
    tabColumns,
    showTabs
  } = React.useMemo(() => {
    var _model$formConfig;
    let showTabs = model === null || model === void 0 || (_model$formConfig = model.formConfig) === null || _model$formConfig === void 0 ? void 0 : _model$formConfig.showTabbed;
    const searchParams = new URLSearchParams(window.location.search);
    const {
      formElements,
      tabColumns
    } = getFormConfig({
      columns: model.columns,
      tabs: showTabs ? model.tabs : {},
      getRecordAndLookups,
      id: displayId,
      searchParams
    });
    return {
      formElements,
      tabColumns,
      showTabs: showTabs && tabColumns.length > 0
    };
  }, [model]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RenderColumns, {
    isAdd: displayId == 0,
    getRecordAndLookups: getRecordAndLookups,
    formElements: formElements,
    model: model,
    formik: formik,
    data: data,
    onChange: onChange,
    combos: combos,
    lookups: lookups,
    fieldConfigs: fieldConfigs,
    mode: mode
  }), /*#__PURE__*/React.createElement("div", {
    className: classes.renderSteps
  }, /*#__PURE__*/React.createElement(RenderSteps, {
    tabColumns: tabColumns,
    model: model,
    formik: formik,
    data: data,
    onChange: onChange,
    combos: combos,
    lookups: lookups,
    fieldConfigs: fieldConfigs,
    mode: mode,
    handleSubmit: handleSubmit
  })));
};
var _default = exports.default = FormLayout;
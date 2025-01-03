"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _material = require("@mui/material");
var _crudHelper = require("../Grid/crud-helper");
var _SnackBar = require("../SnackBar");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AliasModal = _ref => {
  let {
    openModal,
    toggleAliasModal,
    data,
    api,
    model
  } = _ref;
  const value = (0, _react.useRef)('');
  const handleClose = () => {
    toggleAliasModal();
  };
  const snackbar = (0, _SnackBar.useSnackbar)();
  const [loading, setIsLoading] = (0, _react.useState)(false);
  const [record, setRecord] = (0, _react.useState)('');
  const setActiveRecord = function setActiveRecord(_ref2) {
    let {
      id,
      title,
      record,
      lookups
    } = _ref2;
    setRecord(record);
  };
  const pathName = window.location.pathname;
  const parts = pathName.split("/");
  const extractedId = parts[2];
  const BootstrapDialog = (0, _styles.styled)(_Dialog.default)(_ref3 => {
    let {
      theme
    } = _ref3;
    return {
      '& .MuiDialogContent-root': {
        padding: theme.spacing(2)
      },
      '& .MuiDialogActions-root': {
        padding: theme.spacing(1)
      }
    };
  });
  const handleSubmit = () => {
    console.log("Data is ", data);
    const reqValue = {
      ScopeModelAlias: value.current,
      ScopeModelId: extractedId
    };
    try {
      console.log("API is ", api);
      (0, _crudHelper.saveRecord)({
        id: "0",
        api: "".concat(api),
        values: reqValue,
        setIsLoading,
        setError: snackbar.showError
      });
    } catch (err) {
      console.log("Error is ", err);
    }
  };
  const handleChange = e => {
    value.current = e.target.value;
  };
  (0, _react.useEffect)(() => {
    (0, _crudHelper.getRecord)({
      api: api,
      modelConfig: model,
      setError: snackbar.showError,
      id: extractedId,
      setIsLoading,
      setActiveRecord
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement(BootstrapDialog, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: openModal
  }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
    sx: {
      m: 0,
      p: 2
    },
    id: "customized-dialog-title"
  }, "Alias"), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "close",
    onClick: handleClose,
    sx: theme => ({
      position: 'absolute',
      right: 8,
      top: 8,
      color: theme.palette.grey[500]
    })
  }, /*#__PURE__*/_react.default.createElement(_Close.default, null)), /*#__PURE__*/_react.default.createElement(_DialogContent.default, {
    dividers: true
  }, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    type: "text",
    variant: "standard",
    label: "Alias",
    fullWidth: true,
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    autoFocus: true,
    onClick: handleSubmit
  }, "Save")));
};
var _default = exports.default = AliasModal;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/esnext.iterator.map.js");
var _react = _interopRequireDefault(require("react"));
var _reactHelmetAsync = require("react-helmet-async");
var _reactI18next = require("react-i18next");
var _material = require("@mui/material");
var _Help = _interopRequireDefault(require("@mui/icons-material/Help"));
var _HelpModal = _interopRequireDefault(require("../HelpModal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const titleClass = "text-theme-blue text-max-width";
function PageTitle(_ref) {
  let {
    title = "",
    showBreadcrumbs,
    breadcrumbs = [],
    nestedGrid = false,
    breadcrumbColor
  } = _ref;
  const breadcrumbsLasIndex = breadcrumbs.length - 1;
  const needToShowBreadcrumbs = showBreadcrumbs && breadcrumbs.length;
  const handleBack = () => {
    window.history.back(); // Navigate to the previous page when clicked
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmetAsync.Helmet, null, /*#__PURE__*/_react.default.createElement("title", null, title)), needToShowBreadcrumbs && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement(_material.Card, {
    sx: {
      mb: 3
    }
  }, /*#__PURE__*/_react.default.createElement(_material.CardContent, {
    sx: {
      backgroundColor: breadcrumbColor || '#fff'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    sx: {
      display: 'flex',
      alignItems: 'center',
      flex: 1
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Breadcrumbs, {
    variant: "h5",
    "aria-label": "breadcrumb",
    separator: ">",
    className: "".concat(titleClass, " breadcrumbs-text-title text-max-width")
  }, breadcrumbs.map((breadcrumb, index) => index < breadcrumbsLasIndex ? /*#__PURE__*/_react.default.createElement(_material.Link, {
    onClick: handleBack,
    key: breadcrumb.text,
    className: "".concat(titleClass, " breadcrumbs-text-title text-max-width"),
    variant: "inherit",
    sx: {
      textDecoration: 'none',
      color: '#1976d2'
    }
  }, breadcrumb.text) : /*#__PURE__*/_react.default.createElement(_material.Typography, {
    key: breadcrumb.text,
    className: "".concat(titleClass, " breadcrumbs-text-title text-max-width"),
    variant: "inherit"
  }, breadcrumb.text)))), (breadcrumbs.length > 1 || nestedGrid) && /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    onClick: handleBack
  }, "Back")), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    color: "primary",
    title: "Help",
    size: "large"
  }, /*#__PURE__*/_react.default.createElement(_Help.default, {
    fontSize: "inherit"
  })))))), /*#__PURE__*/_react.default.createElement(_HelpModal.default, null)));
}
var _default = exports.default = (0, _reactI18next.withTranslation)()(PageTitle);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useCascadingLookup;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.every.js");
require("core-js/modules/esnext.iterator.map.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _httpRequest = _interopRequireDefault(require("../components/Grid/httpRequest"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const emptyValues = [null, undefined, ''];
function useCascadingLookup(_ref) {
  let {
    column,
    formik,
    lookups,
    dependsOn = [],
    api
  } = _ref;
  const [options, setOptions] = (0, _react.useState)([]);

  // Memoize dependency values
  const dependencyValues = (0, _react.useMemo)(() => {
    const toReturn = {};
    if (!dependsOn.length) return toReturn;
    for (const dependency of dependsOn) {
      toReturn[dependency] = formik.values[dependency];
    }
    return toReturn;
  }, [...dependsOn.map(dep => formik.values[dep])]);

  // Initial options for non-cascading
  const initialOptions = (0, _react.useMemo)(() => {
    if (dependsOn.length) return [];
    return typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
  }, [column.lookup, lookups, dependsOn]);

  // Fetch cascading options
  (0, _react.useEffect)(() => {
    const fetchOptions = async () => {
      if (!dependsOn.length || !column.lookup) return;
      let newOptions = [];
      // Only fetch if all dependencies have values
      const allDependenciesHaveValues = Object.values(dependencyValues).every(value => !emptyValues.includes(value));
      if (!allDependenciesHaveValues) {
        newOptions = [];
        return;
      }
      const requestBody = {
        lookups: [{
          lookup: column.lookup,
          where: dependencyValues
        }]
      };
      try {
        const response = await (0, _httpRequest.default)({
          url: "".concat(api, "/combo"),
          params: requestBody,
          disableLoader: true,
          jsonPayload: true
        });
        if (response && response.success && response.lookups) {
          const fetchedOptions = response.lookups[column.lookup] || [];
          newOptions = fetchedOptions;
        } else {
          newOptions = [];
        }
      } catch (_unused) {
        newOptions = [];
      } finally {
        setOptions(newOptions);
      }
    };
    if (dependsOn.length) {
      fetchOptions();
    } else {
      setOptions(initialOptions);
    }
  }, [dependencyValues, initialOptions, api, column.lookup]);
  return options;
}
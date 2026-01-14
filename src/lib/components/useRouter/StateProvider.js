import React, { createContext, useReducer, useContext, useRef } from 'react';
import stateReducer from './stateReducer';
import initialState from './initialState';
import { locales } from '../mui/locale/localization';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Extend dayjs with the plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const StateContext = createContext();
const RouterContext = createContext(null);

const StateProvider = ({ children, apiEndpoints: initialApiEndpoints = {} }) => {

  const [stateData, dispatchData] = useReducer(stateReducer, initialState);

  // Initialize with provided endpoints or empty object
  const apiEndpoints = useRef(initialApiEndpoints);

  function setApiEndpoint(key, endpoint) {
    apiEndpoints.current[key] = endpoint;
  }

  function getApiEndpoint(key) {
    return apiEndpoints.current[key];
  }

  function buildUrl(controllerType, url) {
    const baseUrl = apiEndpoints.current[controllerType || "default"] || '';
    return `${baseUrl}${url}`;
  }

  /**
   * Returns the system date and/or time format string based on user preferences and options.
   *
   * @param {boolean} isDateFormatOnly - If true, returns only the date format; otherwise, returns date and time format.
   * @param {boolean} showOnlyDate - If true and isDateFormatOnly is false, returns only the date part in uppercase.
   * @param {string|null|undefined} state - The user-defined date/time format string (e.g., "dd-mm-yyyy hh:mm A").
   * @returns {string} The formatted date/time format string.
   */
  function systemDateTimeFormat(isDateFormatOnly, showOnlyDate, state) {
    if (state !== undefined && state !== null) {
      const userData = state; // Access 'state' 
      let userDateFormat = isDateFormatOnly ? 'DD-MM-YYYY' : 'DD-MM-YYYY hh:mm:ss A';
      if (userData) {
        userDateFormat = userData.split(' ');
        userDateFormat[0] = userDateFormat[0].toUpperCase();
        if (!isDateFormatOnly) {
          if (showOnlyDate) {
            userDateFormat = userDateFormat[0].toUpperCase();
          } else {
            userDateFormat[1] += !userDateFormat[1].includes(':ss') ? ':ss' : '';
            userDateFormat = userDateFormat.join(" ");
          }
        } else {
          userDateFormat = userDateFormat[0];
        }
      };
      return userDateFormat;
    }
    return isDateFormatOnly ? 'DD-MM-YYYY' : 'DD-MM-YYYY hh:mm:ss A';
  }

  /**
   * Formats a date value using the system or user-defined format and optional timezone.
   *
   * @param {Object} params - The parameters object.
   * @param {string|Date} params.value - The date value to format.
   * @param {boolean} params.useSystemFormat - Whether to use the system date format.
   * @param {boolean} [params.showOnlyDate=false] - Whether to show only the date part.
   * @param {string|null|undefined} params.state - The user-defined date/time format string.
   * @param {string} [params.timeZone] - The timezone to use for formatting.
   * @returns {string} The formatted date string or '-' if value is falsy.
   */
  function formatDate({ value, useSystemFormat, showOnlyDate = false, state, timeZone }) {
    if (!value) return '-';
    const format = systemDateTimeFormat(useSystemFormat, showOnlyDate, state); // Pass 'state' as an argument
    if (!timeZone) {
      return dayjs(value).format(format);
    }
    return dayjs(value).tz(timeZone).format(format);
  }

  /**
   * Provides localization utilities for the current locale.
   *
   * @returns {Object} An object with a getLocalizedString function.
   */
  function useLocalization() {
    const currentLocaleData = stateData.dataLocalization;
    const localeData = locales[currentLocaleData];
    function getLocalizedString(key) {
      return currentLocaleData === 'pt-PT' || currentLocaleData === 'ptPT' ? localeData.components.MuiDataGrid.defaultProps.localeText[key] || key : localeData[key] || key;
    }
    return { getLocalizedString };
  }

  return (
    <StateContext.Provider value={{ stateData, dispatchData, systemDateTimeFormat, formatDate, useLocalization, getApiEndpoint, setApiEndpoint, buildUrl }}>
      {children}
    </StateContext.Provider>
  );
};

const RouterProvider = RouterContext.Provider;

const useRouter = () => {
  return useContext(RouterContext);
};

const useStateContext = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};

export { StateProvider, useStateContext, useRouter, RouterProvider };

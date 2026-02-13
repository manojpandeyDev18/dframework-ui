import React, { createContext, useContext, useRef, useState, useCallback, useMemo } from 'react';
import { locales } from '../mui/locale/localization';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '../SnackBar';

// Extend dayjs with the plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const StateContext = createContext();
const RouterContext = createContext(null);

// Fallback functions for missing SnackbarProvider
const snackbarWarning = () => console.warn('SnackbarProvider not found. Wrap StateProvider with SnackbarProvider.');

const StateProvider = ({ children, apiEndpoints: initialApiEndpoints = {} }) => {

  // App-level state - using individual useState for simplicity
  const [locale, setLocaleState] = useState('en');
  const [dateTime, setDateTimeState] = useState('MM/DD/YYYY hh:mm:ss A');
  const [pageTitle, setPageTitleState] = useState(null);
  const [modal, setModalState] = useState(null);
  const [pageBackButton, setPageBackButtonState] = useState(null);
  const [userData, setUserDataState] = useState(null);
  const [timeZone, setTimeZoneState] = useState('');
  
  // Framework functionality - loader management (simple on/off, no counter)
  const [isLoading, setIsLoading] = useState(false);
  
  // Framework functionality - i18n
  const { t, i18n } = useTranslation();
  
  // Framework functionality - snackbar
  const snackbar = useSnackbar();

  // Initialize with provided endpoints or empty object
  const apiEndpoints = useRef(initialApiEndpoints);

  function setApiEndpoint(key, endpoint) {
    apiEndpoints.current[key] = endpoint;
  }

  function getApiEndpoint(key) {
    return apiEndpoints.current[key || "default"] || '';
  }

  function buildUrl(url, endpoint) {
    const baseUrl = apiEndpoints.current[endpoint || "default"] || '';
    return `${baseUrl}${url}`;
  }

  /**
   * Show loader - simple boolean toggle
   * Calling methods should wrap all async operations in try/finally blocks
   */
  const showLoader = useCallback((flag = true) => {
    setIsLoading(flag);
  }, []);


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
    const currentLocaleData = locale;
    const localeData = locales[currentLocaleData];
    function getLocalizedString(key) {
      return currentLocaleData === 'pt-PT' || currentLocaleData === 'ptPT' ? localeData.components.MuiDataGrid.defaultProps.localeText[key] || key : localeData[key] || key;
    }
    return { getLocalizedString };
  }

  /**
   * Set the application locale
   */
  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale);
  }, []);

  /**
   * Set page title details
   */
  const setPageTitle = useCallback((title) => {
    setPageTitleState(title);
  }, []);

  /**
   * Set page back button configuration
   */
  const setPageBackButton = useCallback((backButton) => {
    setPageBackButtonState(backButton);
  }, []);

  /**
   * Set user data
   */
  const setUserData = useCallback((newUserData) => {
    setUserDataState(newUserData);
  }, []);

  /**
   * Set timezone
   */
  const setTimeZone = useCallback((newTimeZone) => {
    setTimeZoneState(newTimeZone);
  }, []);

  /**
   * Set date/time format
   */
  const setDateTimeFormat = useCallback((format) => {
    setDateTimeState(format);
  }, []);

  /**
   * Open/close modal
   */
  const setModal = useCallback((newModal) => {
    setModalState(newModal);
  }, []);

  // Create stateData object for backward compatibility
  const stateData = useMemo(() => ({
    locale,
    dateTime,
    pageTitle,
    modal,
    pageBackButton,
    userData,
    timeZone
  }), [locale, dateTime, pageTitle, modal, pageBackButton, userData, timeZone]);

  const contextValue = useMemo(() => ({
    // State data
    stateData,
    
    // Loader management
    isLoading,
    showLoader,
    
    // Snackbar utilities
    showMessage: snackbar?.showMessage || snackbarWarning,
    showError: snackbar?.showError || snackbarWarning,
    
    // i18n utilities
    dayjs,
    t,
    i18n,
    
    // Date/time utilities
    systemDateTimeFormat,
    formatDate,
    useLocalization,
    
    // API utilities
    getApiEndpoint,
    setApiEndpoint,
    buildUrl,
    
    // App-level state setters with meaningful names
    setLocale,
    setPageTitle,
    setPageBackButton,
    setUserData,
    setTimeZone,
    setDateTimeFormat,
    setModal
  }), [stateData, isLoading, showLoader, t, i18n, snackbar, 
       setLocale, setPageTitle, setPageBackButton, setUserData, setTimeZone, setDateTimeFormat, setModal]);

  return (
    <StateContext.Provider value={contextValue}>
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

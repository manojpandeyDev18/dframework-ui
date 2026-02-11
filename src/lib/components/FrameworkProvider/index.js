import React, { createContext, useContext, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from '../SnackBar';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const FrameworkContext = createContext(null);

/**
 * FrameworkProvider - Centralized context for framework-wide utilities
 * 
 * Provides:
 * - Loader management (show/hide loader with concurrent request tracking)
 * - dayjs instance with plugins
 * - i18n utilities (t, i18n)
 * - Snackbar utilities (showMessage, showError)
 * 
 * Usage:
 * <SnackbarProvider>
 *   <FrameworkProvider>
 *     <YourApp />
 *   </FrameworkProvider>
 * </SnackbarProvider>
 * 
 * Access via:
 * const { showLoader, hideLoader, dayjs, t, i18n, showMessage, showError } = useFramework();
 */
const FrameworkProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingCountRef = useRef(0);
  const { t, i18n } = useTranslation();
  const snackbar = useSnackbar();

  const showLoader = useCallback(() => {
    loadingCountRef.current += 1;
    setIsLoading(true);
  }, []);

  const hideLoader = useCallback(() => {
    loadingCountRef.current = Math.max(0, loadingCountRef.current - 1);
    if (loadingCountRef.current === 0) {
      setIsLoading(false);
    }
  }, []);

  const contextValue = useMemo(() => {
    const value = {
      // Loader state and controls
      isLoading,
      showLoader,
      hideLoader,
      // dayjs utilities
      dayjs,
      // i18n utilities
      t,
      i18n,
      // Snackbar utilities - ensure they're functions or undefined
      showMessage: snackbar?.showMessage || (() => console.warn('SnackbarProvider not found. Wrap FrameworkProvider with SnackbarProvider.')),
      showError: snackbar?.showError || (() => console.warn('SnackbarProvider not found. Wrap FrameworkProvider with SnackbarProvider.'))
    };
    
    // Store instance for non-React functions
    setFrameworkInstance(value);
    
    return value;
  }, [isLoading, showLoader, hideLoader, t, i18n, snackbar]);

  // Cleanup on unmount
  useEffect(() => {
    return () => setFrameworkInstance(null);
  }, []);

  return (
    <FrameworkContext.Provider value={contextValue}>
      {children}
    </FrameworkContext.Provider>
  );
};

/**
 * useFramework - Hook to access FrameworkContext
 * 
 * @returns {Object} Framework utilities
 * @returns {boolean} isLoading - Current loading state
 * @returns {Function} showLoader - Show the loader
 * @returns {Function} hideLoader - Hide the loader
 * @returns {Object} dayjs - dayjs instance with utc and timezone plugins
 * @returns {Function} t - Translation function from i18next
 * @returns {Object} i18n - i18n instance from react-i18next
 * @returns {Function} showMessage - Show a snackbar message
 * @returns {Function} showError - Show an error snackbar
 * 
 * @throws {Error} If used outside FrameworkProvider
 */
const useFramework = () => {
  const context = useContext(FrameworkContext);
  if (context === null || context === undefined) {
    throw new Error('useFramework must be used within a FrameworkProvider');
  }
  return context;
};

// Store framework context instance for use in non-React functions
let frameworkContextInstance = null;

/**
 * Internal function to set framework context instance
 * Called automatically by FrameworkProvider
 */
export const setFrameworkInstance = (instance) => {
  frameworkContextInstance = instance;
};

/**
 * Get framework context instance for use in non-React functions
 * This allows httpRequest and other utility functions to access framework features
 */
export const getFrameworkInstance = () => {
  return frameworkContextInstance;
};

export { FrameworkProvider, useFramework };

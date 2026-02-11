import React, { createContext, useContext, useState, useCallback, useMemo, useRef } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useTranslation } from 'react-i18next';

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);

const FrameworkContext = createContext(undefined);

/**
 * FrameworkProvider - Centralized context for framework-wide utilities
 * 
 * Provides:
 * - Loader management (show/hide loader with concurrent request tracking)
 * - dayjs instance with plugins
 * - i18n utilities (t, i18n)
 * 
 * Usage:
 * <FrameworkProvider>
 *   <YourApp />
 * </FrameworkProvider>
 * 
 * Access via:
 * const { showLoader, hideLoader, dayjs, t, i18n } = useFramework();
 */
const FrameworkProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const loadingCountRef = useRef(0);
  const { t, i18n } = useTranslation();

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

  const contextValue = useMemo(() => ({
    // Loader state and controls
    isLoading,
    showLoader,
    hideLoader,
    // dayjs utilities
    dayjs,
    // i18n utilities
    t,
    i18n
  }), [isLoading]);

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
 * 
 * @throws {Error} If used outside FrameworkProvider
 */
const useFramework = () => {
  const context = useContext(FrameworkContext);
  if (context === undefined) {
    throw new Error('useFramework must be used within a FrameworkProvider');
  }
  return context;
};

export { FrameworkProvider, useFramework };

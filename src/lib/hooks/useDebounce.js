import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timer to update the debounced value
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to cancel the timer if the value changes again before the delay
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]); // Rerun effect only if value or delay changes

    return debouncedValue;
}

export default useDebounce;

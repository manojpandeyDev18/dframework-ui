import { useEffect, useMemo, useState } from 'react';
import request from "../components/Grid/httpRequest";

const emptyValues = [null, undefined, ''];

export default function useCascadingLookup({ column, formik, lookups, dependsOn = [], api, isAutoComplete = false, userSelected }) {
    const [options, setOptions] = useState([]);

    // Memoize dependency values
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn.length) return toReturn;
        for (const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, [...dependsOn.map(dep => formik.values[dep])]);

    // Initial options for non-cascading
    const initialOptions = useMemo(() => {
        if (dependsOn.length) return [];
        return typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
    }, [column.lookup, lookups, dependsOn]);

            const fetchOptions = async () => {
            if (!dependsOn.length || !column.lookup) return;
            // Only fetch if all dependencies have values
            const allDependenciesHaveValues = Object.values(dependencyValues).every(
                value => !emptyValues.includes(value)
            );
            if (!allDependenciesHaveValues) {
                setOptions([]);
                return;
            }
            let newOptions = [];
            const requestBody = {
                lookups: [{ lookup: column.lookup, where: dependencyValues }]
            };
            try {
                const response = await request({ url: `${api}/combo`, params: requestBody, disableLoader: true, jsonPayload: true});
                if (response && response.success && response.lookups) {
                    const fetchedOptions = response.lookups[column.lookup] || [];
                    newOptions = fetchedOptions;
                } else {
                    newOptions = [];
                }
            } catch {
                newOptions = [];
            } finally {
                setOptions(newOptions);
            }
        };

    // Fetch cascading options
    useEffect(() => {
        if (dependsOn.length) {
            fetchOptions();
        } else if (isAutoComplete || !userSelected.current) {
            setOptions(initialOptions);
        }
    }, [dependencyValues, initialOptions, api, column.lookup]);

    return options;
}

import { useEffect, useMemo, useState } from 'react';
import { useStateContext } from "../components/useRouter/StateProvider";
import { getLookups } from "../components/Grid/crud-helper.js";
import { useSnackbar } from "../components/SnackBar/index.js";

const emptyValues = [null, undefined, ''];

export default function useCascadingLookup({ column, formik, lookups, dependsOn = [], isAutoComplete = false, userSelected, model }) {
    const [options, setOptions] = useState([]);
    const { buildUrl } = useStateContext();
    const snackbar = useSnackbar();
    const api = buildUrl(model.api);
    // Memoize dependency values
    const dependencyValues = useMemo(() => {
        const toReturn = {};
        if (!dependsOn.length) return toReturn;
        for (const dependency of dependsOn) {
            toReturn[dependency] = formik.values[dependency];
        }
        return toReturn;
    }, dependsOn.map(dep => formik.values[dep]));

    // Initial options for non-cascading
    const initialOptions = useMemo(() => {
        if (dependsOn.length) return [];
        return typeof column.lookup === 'string' ? lookups[column.lookup] : column.lookup;
    }, [column.lookup, lookups, dependsOn]);

    const fetchOptions = async () => {
        if (!column.lookup) return;
        // Only fetch if all dependencies have values
        const allDependenciesHaveValues = Object.values(dependencyValues).every(
            value => !emptyValues.includes(value)
        );
        if (!allDependenciesHaveValues) {
            setOptions([]);
            return;
        }
        try {
            const data = await getLookups({
                api,
                model,
                lookups,
                reqData: {
                    params: { lookups: [{ lookup: column.lookup, where: dependencyValues }] }
                }
            });
            setOptions(data);
        } catch (error) {
            snackbar.showError('Could not load lookups', error.message);
        }
    };

    // Fetch cascading options
    useEffect(() => {
        if (dependsOn.length) {
            fetchOptions();
        } else if (isAutoComplete || !userSelected.current) {
            setOptions(initialOptions || []);
        }
    }, [dependencyValues, initialOptions, lookups, api, column.lookup]);

    return options;
}

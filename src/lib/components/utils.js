const utils = {
    filterFieldDataTypes: {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean'
    },
    fixedFilterFormat: {
        date: "YYYY-MM-DD",
        datetime: "YYYY-MM-DD hh:mm:ss a",
        dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
        OverrideDateFormat: "DD-MMM-YYYY"
    },
    errorMapping: {
        413: "Upload failed: The file exceeds the 30 MB size limit. Please select a smaller file."
    },
    permissionsMapper: {
        add: "Permission2",
        edit: "Permission3",
        delete: "Permission4"
    },
    emptyIdValues: [null, undefined, '', '0', 0],
    /**
	 * Transforms filter criteria into Content Server API payload format.
	 * Converts filter objects into nested array structure expected by CS endpoints.
	 * @param {Array} where - Array of filter objects with field, type, value, operator properties
	 * @param {Object} filterParams - Target object to populate with transformed filters
	 * @returns {Object} The populated filterParams object with CS-compatible filter structure
	 */
	createCSPayload: function (where, filterParams = {}) {
		const numberTypes = ['number', 'numeric', 'int', 'integer', 'decimal', 'float', 'double'];
        const lookupTypes = ['lookup', 'select', 'singleSelect'];
		if (!where || !where.length) return {};
		where.forEach((ele, index) => {
			if (numberTypes.includes(ele.type)) {
				ele.type = 'numeric';
			}
			if (lookupTypes.includes(ele.type)) {
				ele.type = 'list';
			}
			if ((Array.isArray(ele.value) && ele.value?.length) || (!Array.isArray(ele.value) && ele.value) || typeof ele.value === "boolean") {
				const filterKeyName = `filter[${index}][field]`;
				filterParams[filterKeyName] = ele.field;

				const typeKeyName = `filter[${index}][data][type]`;
				filterParams[typeKeyName] = lookupTypes.includes(ele.type) ? 'list' : ele.type || 'string';

				const valueKeyName = `filter[${index}][data][value]`;
				filterParams[valueKeyName] = ele?.operator === 'contains' ? `%${ele.value}` : ele.value;

				if (numberTypes.includes(ele.type)) {
					const typeKeyName = `filter[${index}][data][comparison]`;
					filterParams[typeKeyName] = ele?.operator === '=' ? 'eq' : ele?.operator || 'eq';
					ele.type = 'numeric';
				}

			}
		});
	}
}
export const getPermissions = ({ userData = {}, model, userDefinedPermissions }) => {
    const { permissions = [] } = userData;
    userDefinedPermissions = userDefinedPermissions || { add: true, edit: true, delete: true };
    const userPermissions = permissions.find(item => item.Module === model.module);
    if (!userPermissions) {
        return { canAdd: userDefinedPermissions.add, canEdit: userDefinedPermissions.edit, canDelete: userDefinedPermissions.delete };
    }
    return {
        canAdd: userDefinedPermissions.add && Boolean(userPermissions[utils.permissionsMapper.add]),
        canEdit: userDefinedPermissions.edit && Boolean(userPermissions[utils.permissionsMapper.edit]),
        canDelete: userDefinedPermissions.delete && Boolean(userPermissions[[utils.permissionsMapper.delete]])
    };
};
export default utils;
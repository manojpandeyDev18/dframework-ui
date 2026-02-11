import actionsStateProvider from "./actions";
const stateReducer = (state, action) => {
    switch (action.type) {
        case actionsStateProvider.SET_LOCALE:
            return { ...state, locale: action.payload };
        case actionsStateProvider.SET_DATETIME_FORMAT:
            return { ...state, dateTime: action.payload };
        case actionsStateProvider.SET_PAGE_TITLE:
            return { ...state, pageTitle: action.payload };
        case actionsStateProvider.SET_MODAL:
            return { ...state, modal: action.payload };
        case actionsStateProvider.SET_PAGE_BACK_BUTTON:
            return { ...state, pageBackButton: action.payload };
        case actionsStateProvider.SET_USER_DATA:
            return { ...state, userData: action.payload };
        case actionsStateProvider.SET_TIMEZONE:
            return { ...state, timeZone: action.payload };
        default:
            return state;
    }
};
export default stateReducer;
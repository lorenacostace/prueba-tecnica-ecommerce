// Actions
export const actions = {
    setSelectors: (selectors) => {
        return{
            type: "SET_SELECTORS",
            payload: selectors
        }
    },
};

// Reducers
export const selectorsReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_SELECTORS":
            return {
                ...state,
                selectors: action.payload
            };
        default:
            return state;
    }
}

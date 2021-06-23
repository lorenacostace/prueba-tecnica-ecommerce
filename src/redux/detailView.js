// Actions
export const actions = {
    setSelectors: (selectors) => {
        return{
            type: "SET_SELECTORS",
            payload: selectors
        }
    },
    setAddButton: (bool) => {
        return {
            type: "SET_ADDBUTTON",
            payload: bool
        };
    }
};

// Reducers
export const selectorsReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_SELECTORS":
            return {
                ...state,
                selectors: action.payload
            };
        case "SET_ADDBUTTON":
            return {
                ...state,
                enableAddButton: action.payload
            }
        default:
            return state;
    }
}

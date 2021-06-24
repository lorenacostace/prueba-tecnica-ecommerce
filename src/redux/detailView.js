// Initial state
export const initialStateDetailView = {
    selectors: [],
        enableAddButton: false,
};

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
    },
    reset: () => {
        return {
            type: "RESET",
        };
    }
};

// Reducers
export const detailViewReducer = (state = {}, action) => {
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
        case "RESET":
            return {
                ...initialStateDetailView,
            }
        default:
            return state;
    }
}

// Actions
export const actions = {
    filteredProducts: (products) => {
        return{
            type: "FILTERED_PRODUCTS",
            payload: products
        }
    },
};

// Reducers
export const filteredReducer = (state = {}, action) => {
    switch (action.type) {
        case "FILTERED_PRODUCTS":
            return{
                ...state,
                filteredProducts: action.payload
            };
        default:
            return state;
    }
}

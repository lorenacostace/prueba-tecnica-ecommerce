// Actions
export const actions = {
    setProduct: (product) => {
        return{
            type: "SET_PRODUCT",
            payload: product
        }
    },
};

// Reducers
export const productReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...action.payload
            };
        default:
            return state;
    }
}

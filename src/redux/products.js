// Actions
export const actions = {
    setProducts: (products) => {
        return{
            type: "SET_PRODUCTS",
            payload: products
        }
    },
};

// Reducers
export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return [
                ...action.payload
        ];
        default:
            return state;
    }
}

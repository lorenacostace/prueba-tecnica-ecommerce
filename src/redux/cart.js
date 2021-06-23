// Actions
export const actions = {
    setCart: (cart) => {
        return{
            type: "SET_CART",
            payload: cart
        }
    },
};

// Reducers
export const cartReducer = (state = 0, action) => {
    switch (action.type) {
        case "SET_CART":
            return action.payload;
        default:
            return state;
    }
}

import { createStore, combineReducers } from 'redux';
import { productsReducer as products } from "./products";
import { filteredReducer as dashboard} from "./dashboard";
import { productReducer as product } from "./product";
import { detailViewReducer as detailView, initialStateDetailView } from "./detailView";
import { cartReducer as cart } from "./cart";

const initialState = {
    products: [],
    dashboard:{
         filteredProducts: []
    },
    product: {},
    detailView: initialStateDetailView,
    cart: 0,
};

const reducers = combineReducers({
    products, dashboard, product, detailView, cart
})

const store = createStore(reducers, initialState);

export default store;

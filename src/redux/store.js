import { createStore, combineReducers } from 'redux';
import { productsReducer as products } from "./products";
import { filteredReducer as dashboard} from "./dashboard";
import { productReducer as product } from "./product";
import { selectorsReducer as detailView } from "./detailView";

const initialState = {
    products: [],
    dashboard:{
         filteredProducts: []
    },
    product: {},
    detailView: {
        selectors: []
    },
};

const reducers = combineReducers({
    products, dashboard, product, detailView
})

const store = createStore(reducers, initialState);

export default store;

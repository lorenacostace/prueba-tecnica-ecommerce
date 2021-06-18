
import { createStore, combineReducers } from 'redux';
import { productsReducer as products } from "./products";
import { filteredReducer as dashboard} from "./dashboard";

const initialState = {
    products: [],
    dashboard:{
         filteredProducts: []
    }
};

const reducers = combineReducers({
    products, dashboard,
})

const store = createStore(reducers, initialState);

export default store;

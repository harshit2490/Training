import { combineReducers } from "redux"; 
import { productReducer, selectedProductReducer } from './productReducer';

// combining all the reducers in index.js file...
const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
});

export default reducers;
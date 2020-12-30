import { combineReducers } from 'redux';
import filters from './filters'
import pizzas from './pizzas'
import showPopup from './showPopup'
import cart from './cart'

const rootReducer = combineReducers({
    filters,
    pizzas,
    showPopup,
    cart
});

export default rootReducer;

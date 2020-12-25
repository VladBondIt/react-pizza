import { combineReducers } from 'redux';
import filters from './filters'
import pizzas from './pizzas'
import showPopup from './showPopup'

const rootReducer = combineReducers({
    filters,
    pizzas,
    showPopup
});

export default rootReducer;

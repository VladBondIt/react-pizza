import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

//compose объект импортируется из редакса для того,
//что бы использовать можества мидолваров-вспомогательных фич.
//Синтаксис const composeEnchancer = < MiddleWare > || compose
//Все дополнительные миддл вары компонуются в функцию Енчансер
//И вызывается вторым параметром в креат сторе
//Импортируем applayMidlleware из редаксадля и передаем его в качестве параметра в Енчасер того,
//что бы привязать определенный миддлвар для вызова на каждом акшоне

const store = createStore(
    rootReducer,
    // composeEnchancer()
    applyMiddleware(thunk)
);

export default store;
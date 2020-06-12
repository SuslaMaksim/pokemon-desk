import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainReducer from './reducer';

let RootReducers = combineReducers({
    mainData: MainReducer
})

let store = createStore(RootReducers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store
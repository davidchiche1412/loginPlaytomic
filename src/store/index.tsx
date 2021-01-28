import {createStore, combineReducers} from 'redux';
import { viewsReducer} from './reducers/reducers';

const reducer = combineReducers({actualView: viewsReducer});

const initialState = {
    actualView: {name: "Dashboard"},
};

const store = createStore(reducer, initialState);

export default store;
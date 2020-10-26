import { createStore, combineReducers } from 'redux';
import { formsReducer } from '../reducer'

const rootReducer = combineReducers({formsReducer})
const store = createStore(rootReducer);

export default store;
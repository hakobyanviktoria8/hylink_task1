import { combineReducers, createStore } from 'redux';
import {reducerCount} from './reducer/reducerCount';
import { reducerUsers } from './reducer/reducerUser';

const rootReducer = combineReducers({
    count: reducerCount,
    dataUsers: reducerUsers
})

export const store = createStore(rootReducer)

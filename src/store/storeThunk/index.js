import { createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from './todo/todoReducer'; 

const rootReducer = combineReducers({
  todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

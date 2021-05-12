import { createStore, applyMiddleware } from "redux"
import { rootReduser } from "./rootReduser"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

export const Store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
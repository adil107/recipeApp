import { combineReducers } from "redux"
import { loginReducer } from "./login/LoginReducer"
import { recipeReduser } from "./recipe/Reduser"

export const rootReduser = combineReducers({
    recipe: recipeReduser,
    login: loginReducer
})
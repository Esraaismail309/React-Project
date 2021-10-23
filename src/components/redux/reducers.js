import { toDoReducer } from "./todo"
import { counterReducer } from "./count"
import { combineReducers } from "redux"

const rootReducers = combineReducers({
    toDoReducer,
    counterReducer
})
export default rootReducers
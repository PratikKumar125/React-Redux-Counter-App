import { combineReducers } from "redux";
import { counting, authmanage } from "./reducers";
const reducers = combineReducers({
    incdec : counting,
    auth : authmanage
})

export default reducers;
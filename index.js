import { combineReducers } from "redux";
import transactionReducers from "./transactionReduser";

export default combineReducers({
    transaction : transactionReducers,
});

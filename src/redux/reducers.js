import { combineReducers } from "redux";
import { authSlice } from "./slices/authSlice";

const reducers = combineReducers({
    auth: authSlice.reducer
})

export default reducers
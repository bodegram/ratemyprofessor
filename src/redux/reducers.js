import { combineReducers } from "redux";
import { authSlice } from "./slices/authSlice";
import profileSlice from "./slices/profileSlice";
import collegeSlice from "./slices/collegeSlice";

const reducers = combineReducers({
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
    college: collegeSlice.reducer
})

export default reducers
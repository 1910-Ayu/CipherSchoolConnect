import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { postReducer } from "./post";
import { alertReducer } from "./alert";
import { profileReducer } from "./profile";

export default combineReducers({
    auth:authReducer,
    post:postReducer,
    alert:alertReducer,
    profile:profileReducer
});
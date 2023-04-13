import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from "./reducers";

const initialLoginState = localStorage.getItem("auth")
? JSON.parse(localStorage.getItem("auth"))
:{
    isAuthenticated:false,
    loading:false,
};

const middlewares = [thunk];

export const store = createStore(
    reducers,
    {
        auth:initialLoginState
    },
 composeWithDevTools(applyMiddleware(...middlewares))
);
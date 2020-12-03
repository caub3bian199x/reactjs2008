import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import jwt from 'jsonwebtoken';

import store from "./store";
import { getToken } from "./utils/localStorageHandler";

var token = getToken();
if (token) {
    console.log("token: ", token);
    const data = jwt.decode(token);
    console.log("data: ", data)
    // window.location = "/login";
    const now = new Date().getTime() /1000; //convert timestamp in seconds
    if(data.exp > now) {
        store.dispatch({
            type: "LOGGIN_SUCCESS",
            payload: { token, username: data.username },
        });
    }
    
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

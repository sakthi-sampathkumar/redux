import { Provider } from "react-redux";
import allreducers from "./Reducer";
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom/client';
import { createStore } from "redux";

const store=createStore(allreducers)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
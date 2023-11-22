import React from "react";
import { createStore } from "react-redux";
import allreducer from "./Create";
import { Provider } from "react-redux";
import App from "../App";


const store = createStore(allreducer)

const root=ReactDOM.createRoot( document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
reportWebVitals();
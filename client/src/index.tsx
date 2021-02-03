import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import {store} from './reducer';
import {AuthProvider} from "./context/AuthProvider";
import {BrowserRouter} from "react-router-dom";
import App from "./appClient/App";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AuthProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

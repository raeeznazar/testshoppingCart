// import ReactDOM from "react-dom/client";

// import App from "./App.jsx";
// import "./index.css";

// const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}></Route>
            </Routes>

        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

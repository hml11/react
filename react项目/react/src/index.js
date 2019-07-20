import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App';
import 'antd-mobile/dist/antd-mobile.css';
import {BrowserRouter,Route} from "react-router-dom";
import './utils/axios';
import store from './store';
import {Provider} from 'react-redux'
let local= localStorage.getItem('react_user')?JSON.parse(localStorage.getItem('react_user')):null;
if(local) store.dispatch({type:'UPDATE_USER',payload:local})
else store.dispatch({type:'UPDATE_USER',payload:{err:1}})
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

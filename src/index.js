import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'appliaction/json';

// var requestInterceptor = axios.interceptors.request.use(request => {
axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// var responseInterceptor = axios.interceptors.response.use(response => {
axios.interceptors.response.use(response => {
    console.log(response);
    //Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

//Removing interceptors 
// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';



// // Axios baseURL and interceptors can be placed in index.js. Better practice to wrap around components. See burger project for reference

// // Set as base URL so that base url is not repeated
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// // Interceptor cuts in between the HTTP req/res to the client. "Middleware" for HTTP client

// // Request interceptor
// axios.interceptors.request.use(request=>{
//   console.log(request);
//   // Edit request config here
//   return request;
// }, error => {
//   console.log(error); // this line can be replaced to log into your log file
//   return Promise.reject(error); // forward back to your axios request
// });

// // Response intercepter
// axios.interceptors.response.use(response=>{
//   console.log(response);
//   // Edit request config here
//   return response;
// }, error => {
//   console.log(error); // this line can be replaced to log into your log file
//   return Promise.reject(error); // forward back to your axios request
// });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

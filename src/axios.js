// This script here is not used. But you can use it by just importing this module. Using it is same as using axios when imported.
// Set all configuration to this axios instance here

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';


axiosInstance.interceptors.request.use(request=>{
    console.log(request);
    // Edit request config here
    return request;
  }, error => {
    console.log(error); // this line can be replaced to log into your log file
    return Promise.reject(error); // forward back to your axios request
  });
  
  // Response intercepter
axiosInstance.interceptors.response.use(response=>{
    console.log(response);
    // Edit request config here
    return response;
  }, error => {
    console.log(error); // this line can be replaced to log into your log file
    return Promise.reject(error); // forward back to your axios request
  });


export default axiosInstance
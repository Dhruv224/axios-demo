/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// // global interceptor

// // request interceptor
// axios.interceptors.request.use((request) =>{
//   // request.params={
//   //   id : 1
//   // }
//   console.log(`global: request type : ${request.method}`);
//   return request;
// }, 
// (error)=>{
//   console.log(error);
//   return Promise.reject(error)
// })

// // response interceptor
// axios.interceptors.response.use((response) =>{
//   console.log('global :gettng response');
//   return response;
// }, 
// (error)=>{
//   console.log(error);
//   return Promise.reject(error)
// })

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

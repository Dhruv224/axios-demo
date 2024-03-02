import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

// interceptor for instance
// request interceptor
API.interceptors.request.use(
  (request) => {
    // request.params={
    //   id : 1
    // }
    console.log(`request type : ${request.method}`);
    console.log(request);
    return request;
  },
  (error) => {
    console.log("request failed...");
    console.log(error);
    return Promise.reject(error);
  }
);

// response interceptor
API.interceptors.response.use(
  (response) => {
    console.log("gettng response..");
    console.log(response);
    return response;
  },
  (error) => {
    console.log("response failed..");
    console.log(error);
    const status = error.response ? error.response.status : null;
    if (status === 404) {
      console.log("URL not found..");
    }
    return Promise.reject(error);
  }
);

export default API;

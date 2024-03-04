import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3000'; // set a base URL for all requests
// axios.defaults.headers.common['Content-Type'] = 'application/json'; // set default content type
// axios.defaults.headers.common['Accept'] = 'application/json'; // set default Accept header -- common => headers that will includes in all the request(GET, POST, etc..)
// axios.defaults.headers.POST['Content-Type'] = 'application/json'; // header will automatically be set when making the POST request

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // timeout: 1,
  timeout: 3000,
});

export default API;

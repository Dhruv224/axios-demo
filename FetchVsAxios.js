// const data={
//     name:'mansi',
//     age:20
// }
// 1. transformation of req and res
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// axios({
//   url: "http://api.com",
//   method: "POST",
//   header: {
//     "Content-Type": "application/json",
//   },
//   data: { name: "Sabesan", age: 25 },
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));


// 2. Error Handling
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//      console.log("fetch response object:", response);

//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('data object : ')
//     console.log(data)})
//   .catch((error) => console.log(error));

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => console.log(response))
//   .catch((error) => {
//     console.log(error.message);
// });


//3 interceptor:

// 4 Response Timeout
//response timeout refers to the duration of time the library waits for a response from a server before considering the request as failed due to lack of response.

// const controller = new AbortController();
// const signal = controller.signal;
// const options = {
//     method: "POST",
//     signal: signal,
//     body: JSON.stringify({
//         firstName: "Sabesan",
//         lastName: "Sathananthan",
//     }),
// };
// const promise = fetch("/login", options);
// const timeoutId = setTimeout(() => controller.abort(), 5000);
// promise
//     .then((response) => {
//         /* handle the response */
//     })
//     .catch((error) => console.error("timeout exceeded"));

// axios({
//     method: "post",
//     url: "/login",
//     timeout: 5000, // 5 seconds timeout
//     data: {
//         firstName: "Sabesan",
//         lastName: "Sathananthan",
//     },
// })
//     .then((response) => {
//        console.log(response);
//     })
//     .catch((error) => {
//     if (error.code === "ECONNABORTED") {
//         console.log("server not responded within time limit...");
//       }
// });
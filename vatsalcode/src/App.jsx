import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const endpoints = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
  ];

  async function single_calls() {
    await axios
      .get(endpoints[0])
      .then((res) => {
        console.log("result 0");
        console.log(res);
      })
      .catch((err) => console.log(err.message));

      await  axios
      .get(endpoints[1])
      .then((res) => {
        console.log("result 1");
        console.log(res);
      })
      .catch((err) => console.log(err.message));

      await axios
      .get(endpoints[2])
      .then((res) => {
        console.log("result 2");
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }

   function multiple_calls_Promise_axios() {


//============================================================USING PROMISE.ALL AND FETCH    
Promise.all(endpoints.map((u) => fetch(u)))
.then((responses) => {
  console.log("promise calls using fetch");

  responses.forEach(async (response, index) => {
    try {
      const data = await response.json();
      console.log(`result ${index}`);
      console.log(data);
    } catch (error) {
      console.log("error in parsing", error.message);
    }
  });
})
.catch((err) => {
  console.log("ERROR FROM PROMISE.ALL FETCH");
  console.log(err.message);
});


//============================================================USING PROMISE.ALL AND AXIOS.GET
Promise.all(endpoints.map((u) => axios.get(u)))
.then((responses) => {
  console.log("promise calls using axios.get");

  responses.forEach((response, index) => {
    try {
      console.log(`result ${index}`);
      console.log(response.data); 
    } catch (error) {
      console.log("error in parsing", error.message);
    }
  });
})
.catch((err) => {
  console.log("ERROR FROM PROMISE.ALL AXIOS.GET");
  console.log(err.message);
});

//============================================================USING AXIOS.ALL      
axios.all(endpoints.map((u) => axios.get(u)))
.then(axios.spread((...responses) => {
  console.log("axios.all calls ");
  
  responses.forEach((response, index) => {
    console.log(`result ${index}`);
    console.log(response.data); 
  });
}))
.catch((err) => {
  console.log("ERROR FROM AXIOS.ALL");
  console.log(err.message);
});
}


  function promise_allsettled() {
    Promise.allSettled(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((responses) => {
        console.log("promise all settled calls");
        const arr = [...responses];
        console.log(arr);
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <>
      <button onClick={single_calls}>single calls</button>

      <button onClick={multiple_calls_Promise_axios}>
        multiple calls made using promise and axios
      </button>

      <button onClick={promise_allsettled}>promise all seattled calls</button>

      
    </>
  );
}

export default App;

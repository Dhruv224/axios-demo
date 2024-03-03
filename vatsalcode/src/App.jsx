import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const endpoints = ['https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3']




async function single_calls(){

  await axios.get(`${endpoints[0]}`)
  .then(res=>{
    console.log("result 0");
    console.log(res)})
  .catch(err=>console.log(err.message))
  
  await axios.get(`${endpoints[1]}`)
  .then(res=>{
    console.log("result 1");
    console.log(res)})
  .catch(err=>console.log(err.message))
  
  await axios.get(`${endpoints[2]}`)
  .then(res=>{
    console.log("result 2");
    console.log(res)})
  .catch(err=>console.log(err.message))
  
}


function multiple_calls_Promise_axios(){

 
Promise.all(endpoints)
.then(res=>{
  console.log("promise calls")
res.forEach(

(call,index)=>{
  console.log(`result ${index}`)
  console.log(call)
}

)
})
.catch(err=>console.log(err.message))

 
axios.all(endpoints)
.then(res=>{

  console.log("axios calls")
res.forEach(

(call,index)=>{

  console.log(`result ${index}`)
  console.log(call)
}

)
})
.catch(err=>console.log(err.message))



}
 



function promise_allsettled () {

Promise.allSettled(endpoints.map((endpoint) => axios.get(endpoint)))
.then((responses) => {
  console.log("promise all settled calls");
  const arr = [...responses]
  console.log(arr)
  
})
.catch(e=>console.log(e.message))

;


}






  	
  
  



  return (
    <>
    
<button  onClick={single_calls}>single calls</button>

<button onClick={multiple_calls_Promise_axios}>multiple calls made using promise and axios</button>

<button onClick={promise_allsettled}>promise all seattled calls</button>

    {/* <button onClick={click}>click me to post</button> */}
    
    </>
   );
}

export default App;

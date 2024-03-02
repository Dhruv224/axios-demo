/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   async function abc() {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     console.log(data);
  //   }
  //   abc();
  // }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

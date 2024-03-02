import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
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

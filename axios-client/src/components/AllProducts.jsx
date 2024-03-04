import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../HTTP";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const fetchDataUsingFetch = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");

      // Explicitly handling error in Fetch request
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataWithoutAxiosInstance = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataWithAxiosInstance = async () => {
    try {
      const res = await API.get("/products");
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`updateproduct/${id}`);
  };

  const handleDeleteFetch = async (id) => {
    const deleteOrNot = confirm(
      `Are you sure want to delete product with product id ${id} ??`
    );

    if (deleteOrNot) {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        console.log(data);
        fetchDataWithAxiosInstance();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDeleteAxios = async (id) => {
    const deleteOrNot = confirm(
      `Are you sure want to delete product with product id ${id} ??`
    );
    if (deleteOrNot) {
      try {
        const res = await API.delete(`/products/${id}`);
        console.log(res.data);
        fetchDataWithAxiosInstance();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    // using fetch
    // fetchDataUsingFetch();

    // without axios.create Instanse
    // fetchDataWithoutAxiosInstance();

    //with axios.create Instance
    fetchDataWithAxiosInstance();
  }, []);

  return (
    <>
      <div className="product-wrapper">
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              handleUpdate={handleUpdate}
              //   handleDelete={handleDeleteFetch}
              handleDelete={handleDeleteAxios}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;

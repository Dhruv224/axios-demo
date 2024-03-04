import React, { useEffect, useState } from "react";
import API from "../HTTP";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    // image:
    //   "https://blog.openreplay.com/images/integrating-axios-with-react-hooks/images/hero.png",
    available_quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmitFetch = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitAxios = async (e) => {
    e.preventDefault();

    try {
      // Put method replaces the prev obj with the obj which we are passing in the payload

      // const res = await API.put(`/products/${id}`, productData);

      // Patch method does the partial updation, it will change the property which are passed in payload obj and the remaining peoperties are copid from previous obj
      const res = await API.patch(`/products/${id}`, productData);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductData = async (id) => {
    const { data } = await API.get(`/products/${id}`);

    setProductData(prev => ({
      ...prev,
        id: data.id,
        name: data.name,
        price: data.price,
        description: data.description,
        available_quantity: data.available_quantity,
    }));
  };

  useEffect(() => {
    fetchProductData(id);
  }, []);

  return (
    <form className="product-form" onSubmit={handleSubmitAxios}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={productData.name}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        min="1"
        required
        value={productData.price}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        required
        value={productData.description}
        onChange={handleChange}
      />

      <label htmlFor="availableQuantity">Available Quantity:</label>
      <input
        type="number"
        id="available_quantity"
        name="available_quantity"
        min="1"
        required
        value={productData.available_quantity}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateProduct;

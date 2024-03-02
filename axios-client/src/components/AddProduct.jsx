import React, { useState } from "react";
import API from "../HTTP";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image:
      "https://blog.openreplay.com/images/integrating-axios-with-react-hooks/images/hero.png",
    available_quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFetch = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/products", {
        method: "GET", 
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      const addedProduct = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id: (parseInt(data[data.length - 1].id) + 1).toString(),
        })
      })

      if (!addedProduct.ok) {
        throw new Error("Something went wrong");
      }

      const addedProductData = await addedProduct.json();
      console.log(addedProductData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitAxios = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.get("/products");

      const { addedProduct } = await API.post("/products", {
        ...formData,
        id: (parseInt(data[data.length - 1].id) + 1).toString(),
      });
      console.log(addedProduct);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmitFetch}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        min="1"
        required
        value={formData.price}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        required
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="availableQuantity">Available Quantity:</label>
      <input
        type="number"
        id="available_quantity"
        name="available_quantity"
        min="1"
        required
        value={formData.available_quantity}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;

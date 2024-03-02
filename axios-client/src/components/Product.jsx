import React, { useEffect } from "react";

const Product = ({ product, handleUpdate, handleDelete }) => {
  const { id, name, price, description, image, available_quantity } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h2>{name}</h2>
        <br />
        <p className="price">Rs. {price}/-</p>
        <br />
        <p>{description}</p>
        <br />
        <p>Available Quantity: {available_quantity}</p>
      </div>
      <div className="button-wrapper">
        <button className="update-btn" onClick={() => handleUpdate(id)}>
          Update Delete
        </button>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete Delete
        </button>
      </div>
    </div>
  );
};

export default Product;

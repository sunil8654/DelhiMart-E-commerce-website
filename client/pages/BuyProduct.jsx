import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./buy.css"
import axios from 'axios';
// import { Link } from "react-router-dom";

const BuyProduct = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    navigate("/Payment"); // Navigate to the payment page after form submission
  };

  return (
    <div className="container-buy">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required // Field is required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Field is required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            className="form-control"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required // Field is required
          />
        </div>
        <div className="form-group1">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required // Field is required
          ></textarea>
        </div>
        {/* Add more fields for payment information, etc. */}
        <button type="submit" className="btn btn-primary"> {/* Use button type submit */}
          Complete Purchase
        </button>
      </form>
    </div>
  );
};

export default BuyProduct;

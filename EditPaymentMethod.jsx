import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const EditPaymentMethod = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    zip: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/payment-methods", formData);
      setMessage("Payment method saved successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
        zip: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Failed to save payment method.");
    }
  };

  return (
    <div className="pt-24 px-6 text-gray-800 font-sans overflow-y-auto h-screen">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-6 px-8 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Planova Logo" className="h-10" />
          <span className="text-xl font-bold text-purple-700">PLANOVA</span>
        </div>
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="text-purple-600 hover:text-purple-800">Home</Link>
          <Link to="/about" className="hover:text-purple-800">About Us</Link>
          <Link to="/services" className="hover:text-purple-800">Services</Link>
          <Link to="/gallery" className="hover:text-purple-800">Gallery</Link>
          <Link to="/contact" className="hover:text-purple-800">Contact Us</Link>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
          Log in
        </button>
      </header>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* Form */}
      <main className="flex justify-center items-center py-16 px-4">
        <div className="bg-[#FDDCF8] w-full max-w-3xl p-8 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-[#7C1C6C] mb-4">Edit Payment Method</h2>
          <button className="border border-purple-600 text-purple-600 px-4 py-1 text-sm font-semibold rounded mb-6 hover:bg-purple-50 transition-colors">
            SECURE
          </button>

          {message && <p className="mb-4 font-semibold text-sm text-purple-700">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="**** **** **** 2468"
                className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Expire Date</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">CVC</label>
                <input
                  type="password"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleChange}
                  placeholder="***"
                  className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="00-123"
                  className="w-full px-4 py-2 border rounded bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-purple-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7C1C6C] text-white font-semibold py-3 rounded mt-6 hover:bg-[#5e1452] transition-colors"
            >
              Save & Confirm
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditPaymentMethod;

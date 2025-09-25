import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
    setMessage("Password must be at least 8 characters long");
    setError(true);
    return;
  }

  if (form.password !== form.password_confirmation) {
    setMessage("Passwords do not match");
    setError(true);
    return;
  }

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
      setError(false);

      setTimeout(() => {
        navigate("/verify-notification");
      }, 2000);
    } else {
      setMessage(data.message || "Registration failed");
      setError(true);
    }
  };

  return (
    <div className="relative">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Create an Account
        </h2>

        <div className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white font-medium p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>

      {/* Popup message */}
      {message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg text-white ${
            error ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Register;

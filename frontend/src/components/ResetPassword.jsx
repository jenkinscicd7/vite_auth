import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: form.password,
          confirm_password: form.confirmPassword,
        }),
      });

      if (response.ok) {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login"); // redirect after 2s
        }, 2000);
      } else {
        setMessage("Error: Could not reset password.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">New Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter new password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 border rounded mb-4"
            placeholder="Confirm new password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default ResetPassword;

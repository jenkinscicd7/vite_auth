import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResetPassword() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password: form.password,
          password_confirmation: form.confirmPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Password reset successful. You can now log in.");
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Network error. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 text-lg rounded-xl border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 text-lg rounded-xl border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg rounded-xl transition duration-200"
          >
            Reset Password
          </button>
        </form>

        {message && (
          <p
            className={`mt-6 text-center text-base ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;



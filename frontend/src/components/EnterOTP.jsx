import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EnterOTP() {
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(" ");
  const navigate = useNavigate();

  const location = useLocation();
   useEffect(() => {
   if (location.state?.email) {
    setEmail(location.state.email);
  }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email,otp }),
      });
 
      if (response.ok) {
        setMessage("OTP verified. You can now reset your password.");
    
         navigate("/reset-password", {state: {email}});
      } else {
        setMessage("Invalid or expired OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">6-Digit Code</label>
          <input
            type="text"
            maxLength={6}
            className="w-full p-2 border rounded mb-4 tracking-widest text-center text-lg"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Verify OTP
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}

export default EnterOTP;

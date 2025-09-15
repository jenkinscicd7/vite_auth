import React, { useState } from "react";

function VerificationNotification() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/email/verification-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message || "Verification email resent!");
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Verify Your Email</h2>
      <p className="mb-4">
        A verification link has been sent to your email. Please check your inbox
        and click the link to verify your account.
      </p>

      <button
        onClick={handleResend}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Resending..." : "Resend Verification Email"}
      </button>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}

export default VerificationNotification;
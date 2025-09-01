import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {

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
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) {
        navigate("/verify-notification");
      } else {
        
        alert(data.message || "Registration failed");
      }
    
  
  };
  return (
        <form 
  onSubmit={handleSubmit} 
  className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl border border-gray-200"
>
  <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create an Account</h2>

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
  

  );
}

export default Register

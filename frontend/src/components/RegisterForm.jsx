import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

   const API_URL = process.env.API_URL;
   
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/auth/register`, formData);
      alert('Registration successful! You can log in now.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white w-full p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

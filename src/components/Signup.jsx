import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import {toast ,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post('https://auth-backend-wfdf.onrender.com/api/signup/', {
        email: formData.email,
        username: formData.username,
        password: formData.password
      },{
        withCredentials: true
      });


      toast.success('Signup successful!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);

      

    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      alert('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Sign Up
          </button>
          <p>Already have an account ? {''}
            <Link to='/login' className='text-blue-600 hover:underline'>Sign In</Link>
          </p>
        </form>
      </div>

      <ToastContainer position='top-center' autoClose={2000}/>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await axios.post(`${BASE_URL}/api/login/`, {
        email: formData.email,
        password: formData.password
      });

      const data = response.data;

//storing the tokens
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);

      window.dispatchEvent(new Event("storage"));

      //notify other components that login happened 
      window.dispatchEvent(new Event("login"))


      // success login
      toast.success('Login successful! Redirecting...', {autoClose:4000,});

      setTimeout(()=> {
        navigate('/');

      }, 4000);

      
      
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        alert('Login failed');
      } else {
        alert('Something went wrong');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300"
          >
            Sign In
          </button>

          <div className='text-right mb-2'>
            <Link to = "/forgot-password" className='text-sm text-blue-600 hover:underline'>
            Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;




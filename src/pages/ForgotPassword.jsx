import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/password-reset/', {
        email,
      });

      setMessage(res.data.message);

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error || "Something went wrong");
      } else {
        setMessage('Server is not responding');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Enter your email address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Send Reset Link
          </button>

          {message && (
            <div className="mt-4 text-center">
              <p className="text-green-600 font-semibold">{message}</p>
              
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    phone_number: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.post(
        'https://auth-backend-wfdf.onrender.com/api/book-now/',
        {
          destination: formData.destination,
          date: formData.date,
          phone_number: formData.phone_number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Booking successful:', response.data);

      toast.success('Your trip has been booked!', {
        position: 'top-center',
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate('/');
      }, 4000);
    } catch (error) {
      console.error('Booking error:', error);
      if (error.response) {
        alert('Booking failed: ' + error.response.data.detail);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Book Your Trip
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookNow;





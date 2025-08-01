


import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    phone_number: '',
    number_of_travelers: '',
    group_type: '',
    duration: '',
    package: '',
    special_requests: '',
  });

  const navigate = useNavigate();

  // Options for dropdowns
  const groupTypeOptions = [
    { value: 'solo', label: 'Solo' },
    { value: 'couple', label: 'Couple' },
    { value: 'family', label: 'Family' },
    { value: 'friends', label: 'Friends' },
    { value: 'corporate', label: 'Corporate' },
  ];

  const durationOptions = [
    { value: '1', label: '1 Day' },
    { value: '2', label: '2 Days' },
    { value: '3', label: '3 Days' },
    { value: '4', label: '4 Days' },
    { value: '5', label: '5 Days' },
    { value: '6', label: '6 Days' },
    { value: '7', label: '1 Week' },
    { value: '14', label: '2 Weeks' },
  ];

  const packageOptions = [
    { value: 'budget', label: 'Budget Safari' },
    { value: 'luxury', label: 'Luxury Safari' },
    { value: 'combo', label: 'Family Safari' },
    { value: 'honeymoon', label: 'Honeymoon Safari' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData({
      ...formData,
      [name]: selectedOption.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post(
        'http://127.0.0.1:8000/api/book-now/',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Your trip has been booked!', {
        position: 'top-center',
        autoClose: 3000,
      });
      setTimeout(() => navigate('/'), 4000);
    } catch (error) {
      console.error('Booking error:', error);
      alert(error.response ? error.response.data.detail : 'An unexpected error occurred');
    }
  };

  // Enhanced dropdown styles
  const customSelectStyles = {
    control: (base, { isFocused }) => ({
      ...base,
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      padding: '0.5rem',
      fontSize: '1rem',
      backgroundColor: '#fefce8', // yellow-50
      boxShadow: isFocused ? '0 0 0 2px #facc15' : 'none', // yellow-400 ring
      '&:hover': {
        borderColor: '#d1d5db',
      },
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      fontSize: '1rem',
      padding: '0.75rem 1rem',
      backgroundColor: isSelected
        ? '#facc15' // yellow-400
        : isFocused
        ? '#fef08a' // yellow-200
        : '#fefce8', // yellow-50
      color: isSelected ? '#000' : '#1f2937', // black/gray-800
      '&:active': {
        backgroundColor: '#eab308', // yellow-500
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '0.5rem',
      marginTop: '0.25rem',
      backgroundColor: '#fefce8', // yellow-50
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      border: '1px solid #e5e7eb', // gray-200 border
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#9ca3af', // gray-400
      '&:hover': {
        color: '#6b7280', // gray-500
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af', // gray-400
    }),
    singleValue: (base) => ({
      ...base,
      color: '#1f2937', // gray-800
    }),
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Book Your Trip
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Destination */}
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
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
            />
          </div>

          {/* Phone Number */}
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
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
            />
          </div>

          {/* Number of Travelers */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Number of Travelers
            </label>
            <input
              type="number"
              name="number_of_travelers"
              value={formData.number_of_travelers}
              onChange={handleChange}
              placeholder="Enter number of travelers"
              min="1"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
            />
          </div>

          {/* Group Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Group Type
            </label>
            <Select
              options={groupTypeOptions}
              onChange={(selectedOption) => handleSelectChange('group_type', selectedOption)}
              placeholder="Select group type"
              styles={customSelectStyles}
              className="text-base"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Trip Duration
            </label>
            <Select
              options={durationOptions}
              onChange={(selectedOption) => handleSelectChange('duration', selectedOption)}
              placeholder="Select duration"
              styles={customSelectStyles}
              className="text-base"
            />
          </div>

          {/* Package */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Package
            </label>
            <Select
              options={packageOptions}
              onChange={(selectedOption) => handleSelectChange('package', selectedOption)}
              placeholder="Select package"
              styles={customSelectStyles}
              className="text-base"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Special Requests
            </label>
            <textarea
              name="special_requests"
              value={formData.special_requests}
              onChange={handleChange}
              placeholder="Any special requests?"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300 text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
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
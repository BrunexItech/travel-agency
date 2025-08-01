
/*import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    phone_number: '',
    number_of_travelers: '',
    group_type:'',
    duration:'',
    package:'',
    special_requests:'',

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
        'http://127.0.0.1:8000/api/book-now/',
        {
          destination: formData.destination,
          date: formData.date,
          phone_number: formData.phone_number,
          number_of_travelers: formData.number_of_travelers,
          group_type: formData.group_type,
          duration: formData.duration,
          package: formData.package,
          special_requests: formData.special_requests,

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
              min = {new Date().toISOString().split('T')[0]}//disables past dates
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
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>


          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Group Type
            </label>
            <select
              name="group_type"
              value={formData.group_type}
              onChange={handleChange}
              className="w-full border   border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
              <option >Select group type</option>
              <option value="solo" >Solo</option>
              <option value="couple" >Couple</option>
              <option value="family" >Family</option>
              <option value="friends" >Friends</option>
              <option value="corporate" >Corporate</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Trip Duration
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
              <option value="">Select duration</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
              <option value="6">6 Days</option>
              <option value="7">7 Days</option>
              <option value="14">2 Weeks</option>
            </select>
          </div>

          <div>
              <label className="block text-gray-700 font-medium mb-2">
                Select Package
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
               >
                <option value="">Select package</option>
                <option value="budget">Budget Safari</option>
                <option value="luxury">Luxury Safari</option>
                <option value="combo">Family Safari</option>
                <option value="honeymoon">Honeymoon Safari</option>
              </select>
            </div>

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
*/
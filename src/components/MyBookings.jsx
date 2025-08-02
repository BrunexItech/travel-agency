import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const MyBookings = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    // Fetch upcoming bookings
    axios.get(`${BASE_URL}/api/bookings/upcoming/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setUpcomingBookings(res.data))
    .catch((err) => console.error("Upcoming Error:", err));

    // Fetch booking history
    axios.get(`${BASE_URL}/api/bookings/history/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setPastBookings(res.data))
    .catch((err) => console.error("History Error:", err));
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">📅 My Bookings</h2>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-green-700">Upcoming Bookings</h3>
        {upcomingBookings.length > 0 ? (
          <ul className="space-y-3">
            {upcomingBookings.map((booking) => (
              <li key={booking.id} className="p-4 border rounded-lg bg-green-50">
                <p><strong>Destination:</strong> {booking.destination}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Phone:</strong> {booking.phone_number}</p>
                <p><strong>Travelers:</strong> {booking.number_of_travelers}</p>
                <p><strong>Group Type:</strong> {booking.group_type}</p>
                <p><strong>Duration:</strong> {booking.duration}</p>
                <p><strong>Package:</strong> {booking.package}</p>
                {booking.special_requests && (
                <p><strong>Special Requests:</strong> {booking.special_requests}</p>
                )}


              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No upcoming bookings.</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2 text-yellow-700">Booking History</h3>
        {pastBookings.length > 0 ? (
          <ul className="space-y-3">
            {pastBookings.map((booking) => (
              <li key={booking.id} className="p-4 border rounded-lg bg-blue-50">
                <p><strong>Destination:</strong> {booking.destination}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Phone:</strong> {booking.phone_number}</p>
                <p><strong>Travelers:</strong> {booking.number_of_travelers}</p>
                <p><strong>Group Type:</strong> {booking.group_type}</p>
                <p><strong>Duration:</strong> {booking.duration}</p>
                <p><strong>Package:</strong> {booking.package}</p>
                {booking.special_requests && (
                <p><strong>Special Requests:</strong> {booking.special_requests}</p>
                )}


              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No past bookings.</p>
        )}
      </div>



                    <div className="text-center mb-6 mt-6">
                <Link to="/book-now">
                    <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                    + Book New Trip
                    </button>
                </Link>
                </div>




    </div>
  );
};

export default MyBookings;

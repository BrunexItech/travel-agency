import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`${BASE_URL}/api/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
        
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome back, {profile.first_name} 👋
        </h1>

        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-6">
          
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500">
            <img
              src={profile.profile_image || '/default-avatar.png'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="mt-6 md:mt-0 w-full">
            <h2 className="text-2xl font-semibold text-gray-800">
              {profile.first_name} {profile.last_name}
            </h2>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <MdEmail className="text-yellow-500" />
              {profile.email}
            </p>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <MdPhone className="text-yellow-500" />
              {profile.phone_number || 'No phone number'}
            </p>

            <p className="text-gray-600 flex items-center gap-2 mt-2">
              <MdLocationOn className="text-yellow-500" />
              {profile.address || 'No address provided'}
            </p>

              <Link to="/edit-profile">
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-700">
                Edit Profile
              </button>
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;



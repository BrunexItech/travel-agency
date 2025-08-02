import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const EditProfile = () => {
  const [profile, setProfile] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    profile_image: '',
    address: '',
    bio: '',
    date_joined: '',
    previewImage: '',
  });

  const navigate = useNavigate();

  // Fetch profile data on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/profile/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setProfile({
          ...response.data,
          previewImage: response.data.profile_image,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  // Handle text field changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({
        ...profile,
        profile_image: file,
        previewImage: URL.createObjectURL(file),
      });
    }
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Only update editable fields
    formData.append('phone_number', profile.phone_number || '');
    formData.append('address', profile.address || '');
    formData.append('bio', profile.bio || '');
    if (profile.profile_image instanceof File) {
      formData.append('profile_image', profile.profile_image);
    }

    try {
                  console.log("Sending form data:");
            for (let pair of formData.entries()) {
              console.log(pair[0] + ': ' + pair[1]);
            }

      await axios.patch(`${BASE_URL}/api/profile/me/update/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      alert('Profile updated successfully!');
      navigate('/profile'); // redirect to profile view page
    } catch (error) {
      console.error('Update failed:', error);
      alert('Something went wrong. Try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Read-only fields */}
          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Username</label>
            <input
              type="text"
              value={profile.username}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              value={profile.first_name}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              value={profile.last_name}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-700 font-medium">Date Joined</label>
            <input
              type="text"
              value={new Date(profile.date_joined).toLocaleString()}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Editable fields */}
          <div>
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              value={profile.phone_number || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={profile.address || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-700 font-medium">Bio</label>
            <textarea
              name="bio"
              value={profile.bio || ''}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-gray-700 font-medium">Profile Image</label>
            <input
              type="file"
              name="profile_image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
            {profile.previewImage && (
              <img
                src={profile.previewImage}
                alt="Preview"
                className="w-32 h-32 rounded-full mt-2 object-cover"
              />
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;



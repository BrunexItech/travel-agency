import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import {toast ,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    address:'',
    bio:'',
    profile_image:null //file upload
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    //handling the image
    if (e.target.name === 'profile_image'){
      setFormData({
        ...formData,
        profile_image:e.target.files[0]
      });
    }

    //handling normal data
    else{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    //for handling the optional and compulsory fields
    const submissionData = new FormData();
    submissionData.append("email", formData.email);
    submissionData.append('username' , formData.username);
    submissionData.append("password", formData.password);
    submissionData.append("first_name", formData.first_name);
    submissionData.append("last_name", formData.last_name);
    submissionData.append("phone_number", formData.phone_number);

    // for the optional fields 

    if(formData.address) submissionData.append('address', formData.address);
    if(formData.bio) submissionData.append('bio', formData.bio);
    if(formData.profile_image) submissionData.append('profile_image', formData.profile_image);

    try {
      await axios.post(`${BASE_URL}/api/signup/`, submissionData, {
        headers:{'Content-Type': 'multipart/form-data',}
        
      },
      
        //withCredentials: true
      );


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
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
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

          <input
            type="text"
            name="address"
            placeholder="Address (optional)"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
          name="bio"  placeholder="Bio (optional)" value={formData.bio} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg">
          </textarea>

        {/*customizing the image file*/}

         <div>
          <label htmlFor='profileImage' className='block w-full text-center px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer hover:bg-yellow-700 transition'>
            Upload Profile Photo
          </label>
          <input type='file' id='profileImage' name='profile_image' accept='image/*' onChange={handleChange} className='hidden'/>
          {formData.profile_image && (
            <p className="mt-2 text-sm text-gray-600">Selected:{formData.profile_image.name}</p>
          )}
         </div>


          

          




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







// ...your imports remain unchanged
import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGlobe, FaBehance } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('storage'));
    setTimeout(() => navigate('/'), 100);
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      setIsLoggedIn(!!token);
    };

    checkAuth();

    const fetchUserProfile = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserName(response.data.first_name);
          setProfileImage(response.data.profile_image);
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();

    const handleLogin = () => {
      checkAuth();
      fetchUserProfile();
    };

    window.addEventListener('storage', checkAuth);
    window.addEventListener('login', handleLogin);

    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('login', handleLogin);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full z-50">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-6 py-2 bg-black bg-opacity-50 text-white">
        <div className="space-x-4">
          <span className="cursor-pointer hover:text-yellow-400">Visit Us</span>
          <span className="cursor-pointer hover:text-yellow-400">Buy Tickets</span>
        </div>
        <div className="flex space-x-3">
          <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
          <FaTwitter className="cursor-pointer hover:text-yellow-400" />
          <FaGlobe className="cursor-pointer hover:text-yellow-400" />
          <FaBehance className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between text-white bg-black bg-opacity-70 backdrop-blur-md">
        <h1 className="text-2xl font-bold">TravExplore</h1>
        <div className="md:hidden">
          {isOpen ? (
            <HiX className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenuAlt3 className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>

        <div className="hidden md:flex space-x-6 text-sm font-medium uppercase">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/packages" className="hover:text-yellow-400 transition">Packages</Link>
          <Link to="/hotels" className="hover:text-yellow-400 transition">Hotels</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          <Link to="/book-now" className="hover:text-yellow-400 transition">Book Now</Link>

          {isLoggedIn ? (
            <div className="relative group" ref={dropdownRef}>
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm text-white normal-case">Hello, </span>
                  <span className="flex items-center text-base normal-case font-semibold text-yellow-400">
                    {userName}
                    <svg className="w-4 h-4 ml-1 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                    </svg>
                  </span>
                </div>
                <img src={profileImage} alt="Profile" title="Account menu" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
              </div>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-3 space-y-1 z-50">
                  <div className="px-3 pb-2 border-b border-gray-200">
                    <p className="text-sm text-gray-500">Welcome back,</p>
                    <p className="text-md font-semibold text-gray-800">{userName} 👋</p>
                  </div>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-yellow-100">View Profile</Link>
                  <Link to="/my-bookings" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-yellow-100">My Bookings</Link>
                  <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-yellow-100">Help/Support</Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-md">Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-400 transition">Sign In</Link>
              <Link to="/signup" className="hover:text-yellow-400 transition">Signup</Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 uppercase text-sm font-medium z-40">
          {isLoggedIn && (
            <div className="flex flex-col items-center space-y-2">
              <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full border-2 border-yellow-400 object-cover" />
              <span className="text-yellow-400 font-semibold">Hello, {userName}</span>
            </div>
          )}

          <Link to="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/packages" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="/hotels" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Hotels</Link>
          <Link to="/blog" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/book-now" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Book Now</Link>

          {isLoggedIn ? (
            <>
              <Link to="/profile" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Profile</Link>
              <Link to="/my-bookings" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>My Bookings</Link>
              <Link to="/help" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Help / Support</Link>
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="block hover:text-yellow-400">SIGN OUT</button>
            </>
          ) : (
            <>
              <Link to="/login" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link to="/signup" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Signup</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

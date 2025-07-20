import { useEffect } from 'react';
import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaGlobe, FaBehance } from 'react-icons/fa'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  //showing login/signup and logout

  const [isLoggedIn, setIsLoggedIn ]= useState(!! localStorage.getItem('accessToken'));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage"));

  };


  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      setIsLoggedIn(!!token);
    };
  
    checkAuth();
  
    window.addEventListener('storage', checkAuth);
  
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);
  


  

  return (
    <div className='w-full z-50'>
      {/* Top Bar */}
      <div className='w-full flex justify-between items-center px-6 py-2 bg-black bg-opacity-50 text-white'>
        <div className='space-x-4'>
          <span className='cursor-pointer hover:text-yellow-400'>Visit Us</span>
          <span className='cursor-pointer hover:text-yellow-400'>Buy Tickets</span>
        </div>
        <div className='flex space-x-3'>
          <FaFacebookF className='cursor-pointer hover:text-yellow-400' />
          <FaTwitter className='cursor-pointer hover:text-yellow-400' />
          <FaGlobe className='cursor-pointer hover:text-yellow-400' />
          <FaBehance className='cursor-pointer hover:text-yellow-400' />
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between text-white bg-black bg-opacity-70 backdrop-blur-md">
        <h1 className='text-2xl font-bold'>TravExplore</h1>
        <div className='md:hidden'>
          {isOpen ? (
            <HiX className='text-2xl cursor-pointer' onClick={() => setIsOpen(false)} />
          ) : (
            <HiMenuAlt3 className='text-2xl cursor-pointer' onClick={() => setIsOpen(true)} />
          )}
        </div>
        <div className='hidden md:flex space-x-6 text-sm font-medium uppercase'>
          <Link to='/' className='hover:text-yellow-400 transition'>Home</Link>
          <Link to='/about' className='hover:text-yellow-400 transition'>About</Link>
          <Link to='/packages' className='hover:text-yellow-400 transition'>Packages</Link>
          <Link to='/hotels' className='hover:text-yellow-400 transition'>Hotels</Link>
          <Link to='/blog' className='hover:text-yellow-400 transition'>Blog</Link>
          <Link to='/contact' className='hover:text-yellow-400 transition'>Contact</Link>
          <Link to='/book-now' className='hover:text-yellow-400 transition'>Book Now</Link>


          {isLoggedIn ? (
            <button onClick={handleLogout} className='hover:text-yellow-400 transition upperscase'>SIGN OUT</button>
          ):(<>
          <Link to='/login' className='hover:text-yellow-400 transition'>Sign In</Link>
          <Link to='/signup' className='hover:text-yellow-400 transition'>Signup</Link>
          </>)}
          

        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4 uppercase text-sm font-medium z-40">
          <Link to="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/packages" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link to="/hotels" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Hotels</Link>
          <Link to="/blog" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/book-now" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Book Now</Link>

          {isLoggedIn? (
            <button onClick={() => {
              handleLogout();
              setIsOpen(false);
            }} 
            className="block hover:text-yellow-400"
            >
              SIGN OUT
              </button>):(
                <>

<Link to="/login" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Sign In</Link>
<Link to="/signup" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Signup</Link>
                
                </>

          )}



          


        </div>
      )}
    </div>
  )
}

export default Navbar

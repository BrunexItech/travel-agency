import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram , FaBehance} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#0b0c2a] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 border-b border-gray-600 pb-8">

        
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">About Agency</h3>
          <p className="text-sm text-gray-400">
            In today’s fast-moving world, people prefer quick, visual information over long paragraphs. 
            That’s why we focus on delivering clear, engaging travel content that speaks louder than words.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NAVIGATION LINKS</h3>
          <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-400">
            <div className="space-y-1">
              <p className="hover:text-yellow-400 cursor-pointer">Home</p>
              <p className="hover:text-yellow-400 cursor-pointer">Feature</p>
              <p className="hover:text-yellow-400 cursor-pointer">Services</p>
              <p className="hover:text-yellow-400 cursor-pointer">Portfolio</p>
            </div>
            <div className="space-y-1">
              <p className="hover:text-yellow-400 cursor-pointer">Team</p>
              <p className="hover:text-yellow-400 cursor-pointer">Pricing</p>
              <p className="hover:text-yellow-400 cursor-pointer">Blog</p>
              <p className="hover:text-yellow-400 cursor-pointer">Contact</p>
            </div>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get exclusive travel updates, special deals, and helpful tips straight to your inbox.
          </p>
          <div className="flex border border-gray-600 rounded overflow-hidden w-full max-w-xs">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent px-4 text-sm outline-none text-white w-full rounded-l"
            />
            <button className="bg-yellow-400 px-4 flex items-center justify-center rounded-r">
              <FaPaperPlane className="text-white text-sm" />
            </button>
          </div>
        </div>

        {/* Column 4: Instafeed */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INSTAFEED</h3>
          <div className="grid grid-cols-4 gap-1">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`/insta${i + 1}.jpg`}
                alt={`insta-${i}`}
                className="w-16 h-14 object-cover rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
        <p className='flex flex-wrap items-center justify-center text-center'>
            <span className='ml-1'>&copy; 2025 TravExplore . All rights reserved | </span>
            <span className='ml-1'> This Website is made with</span> <FiHeart className='text-yellow-400 mx-1'/> 
             <span className='mr-1'> by </span>
            <span className='text-yellow-400'> Bruno Sharif </span> </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
    <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
    <FaTwitter className="cursor-pointer hover:text-yellow-400" />
    <FaInstagram className="cursor-pointer hover:text-yellow-400" />
    <FaBehance className='cursor-pointer hover:text-yellow-400'/>
    
  </div>

      </div>
    </footer>
  );
};

export default Footer;

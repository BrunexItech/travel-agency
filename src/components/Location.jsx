
// src/components/Location.jsx

import React from 'react';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const Location = () => {
  return (
    <div className="w-[90%] mx-auto my-10  p-5 rounded-md flex flex-col">
      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {/* Column 1: Contact Info */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <FaHome className="text-yellow-400 w-8 h-8" />
            <div>
              <div>123 Beach Road, Mombasa</div>
              <small className="block text-sm text-gray-600">Kibao Kiche 210</small>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaPhone className="text-yellow-400 w-8 h-8" />
            <div>
              <div>+254 700 123456</div>
              <small className="block text-sm text-gray-600">Mon to Fri 9am to 6pm</small>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-yellow-400 w-8 h-8" />
            <div>
              <div>trvexplore@gmail.com</div>
              <small className="block text-sm text-gray-600">Send us your query anytime!</small>
            </div>
          </div>
        </div>

        {/* Column 2: Inputs */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border border-gray-300 placeholder:text-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="p-2 border border-gray-300 placeholder:text-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter Subject"
            className="p-2 border border-gray-300 placeholder:text-sm focus:outline-none"
          />
        </div>

        {/* Column 3: Message */}
        <div>
          <textarea
            placeholder="Enter Message"
            rows="7"
            className="w-full p-2 border border-gray-300 placeholder:text-sm focus:outline-none resize-y"
          ></textarea>
        </div>
      </div>

      {/* SEND MESSAGE Button */}
      <div className="flex justify-end mt-5">
        <button className="px-5 py-2 bg-yellow-400 border border-gray-300 hover:bg-white transition">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default Location;

import React from 'react';

const Addition = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-8 py-16">
      {/* Left Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Can’t find exactly what you’re looking for?
        </h2>
        <h3 className="text-xl font-semibold mb-4">
          We’re here to make it happen for you.
        </h3>
        <p className="text-gray-600 mb-6">
          Sometimes the perfect fit isn’t on the shelf. Reach out and let us know what you have in mind — we’ll tailor a custom solution just for you.
        </p>
        <button className="bg-black text-white px-6 py-3 hover:bg-yellow-400 transition-colors">
          REQUEST CUSTOM PRICE
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2">
        <img
          src="./images/addition.jpg" // Replace with your image path
          alt="Custom Package"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Addition;

import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="max-w-6xl my-6 mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img
          src="/images/were.jpg" 
          alt="Who We Are"
          className="w-full h-auto  shadow-md"
        />
      </div>

      <div>
        <h4 className="text-sm uppercase tracking-widest text-gray-600 mb-2">
          About Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Who We Are?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We are dedicated to creating memorable travel experiences for every adventurer.
          Our mission is to connect people with unique destinations, seamless journeys,
          and unforgettable moments. With a passion for quality and detail, we make sure
          your trips are as enriching as they are inspiring.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;

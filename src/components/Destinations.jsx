import React from 'react';

const destinations = [
  { 
    id: 1,
    title: "Diani Beach",
    county: "Kwale",
    price: "Ksh:25000",
    image: "./diani.jpg"
  },
  { 
    id: 2,
    title: "Fort Jesus",
    county: "Mombasa",
    price: "Ksh:20000",
    image: "./fort.jpg"
  },
  { 
    id: 3,
    title: "Mamba Park",
    county: "Kilifi",
    price: "Ksh:22000",
    image: "./mamba.jpg"
  }
];

const Destinations = () => {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Coastal Kenya</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Discover breathtaking places around the world. Choose your next adventure from our handpicked destinations and start creating unforgettable memories today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="relative group h-64 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={dest.image}
              alt={dest.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 flex flex-col items-center justify-center p-4 transition duration-300">
              <div className="bg-yellow-500 text-black font-semibold px-3 py-1 rounded mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
                {dest.price}
              </div>
              <h3 className="text-white text-lg font-bold">{dest.title}</h3>
              <p className="text-gray-200 text-sm">{dest.county}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;

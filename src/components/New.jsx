import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const hotels = [
  {
    id: 1,
    image: '/images/new1.jpg',
    title: 'Swahili Beach Resort',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'Yes',
      wifi: 'Yes',
      service: 'Yes',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '32500',
  },
  {
    id: 2,
    image: '/images/new2.jpg',
    title: 'Diani Reef Hotel',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'No',
      wifi: 'Yes',
      service: 'No',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '23000',
  },
  {
    id: 3,
    image: '/images/new3.jpg',
    title: 'Mombasa Serena Hotel',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'No',
      wifi: 'Yes',
      service: 'No',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '22500',
  },
  {
    id: 4,
    image: '/images/new4.jpg',
    title: 'Voyager Beach Resort',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'Yes',
      wifi: 'Yes',
      service: 'Yes',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '2300',
  },
  {
    id: 5,
    image: '/images/new5.jpg',
    title: 'Neptune Village Resort',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'Yes',
      wifi: 'Yes',
      service: 'Yes',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '2000',
  },
  {
    id: 6,
    image: '/images/new6.jpg',
    title: 'Sarova Whitesands Beach',
    reviews: '60 Reviews',
    features: {
      pool: 'Yes',
      gym: 'Yes',
      wifi: 'Yes',
      service: 'Yes',
      aircon: 'Yes',
      restaurant: 'Yes',
    },
    price: '25000',
  },
];

const New = () => {
  return (
    <div className="bg-gray-50 pb-20 py-12">
      {/* Section Title */}
      <div className="pt-12 pb-6 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to.
          </p>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 w-full">
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

// Hotel Card Component
const Card = ({ hotel }) => (
  <div className="bg-white shadow-sm group transition-shadow duration-300 hover:shadow-lg">
    <img src={hotel.image} alt={hotel.title} className="w-full h-[180px] object-cover " />

    <div className="p-6 text-left text-sm text-gray-700 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base pb-4">{hotel.title}</h3>
        <div className="flex text-yellow-400 text-sm">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaRegStar className="text-gray-300" />
        </div>
      </div>
      <p className="text-xs text-gray-500">View on map | {hotel.reviews}</p>

      {/* Features */}
      <div className="mt-4 border-t border-gray-100 pt-4 space-y-2 text-sm">
        <p className="border-b border-gray-100 pb-4">Swimming pool <span className="float-right">{hotel.features.pool}</span></p>
        <p className="border-b border-gray-100 pb-4">Gymnasium <span className="float-right">{hotel.features.gym}</span></p>
        <p className="border-b border-gray-100 pb-4">WiFi <span className="float-right">{hotel.features.wifi}</span></p>
        <p className="border-b border-gray-100 pb-4">Room Service <span className="float-right">{hotel.features.service}</span></p>
        <p className="border-b border-gray-100 pb-4">Air Condition <span className="float-right">{hotel.features.aircon}</span></p>
        <p className="border-b border-gray-100 pb-4">Restaurant <span className="float-right">{hotel.features.restaurant}</span></p>
      </div>

      {/* Footer Price */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-[11px] text-gray-400">Price per night</p>
        <span className="bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
          Ksh: {hotel.price}
        </span>
      </div>
    </div>
  </div>
);

export default New;

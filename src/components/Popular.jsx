import React from 'react';

const destinations = [
  {
    id: 1,
    image: '/images/pop1.jpg',
    title: 'Diani Beach Paradise',
    location: 'Ukunda, Kenya',
    duration: '5 days and 4 nights',
    date: '22.08.2025',
    airport: 'Ukunda',
    extras: 'All Inclusive',
    price: '21000',
  },
  {
    id: 2,
    image: '/images/pop2.jpg',
    title: 'Msambweni Beach',
    location: 'Kwale County',
    duration: '4 days and 3 nights',
    date: '12.09.2025',
    airport: 'Wilson',
    extras: 'Game Drives',
    price: '32500',
  },
  {
    id: 3,
    image: '/images/pop3.jpg',
    title: 'Watamu Beach & Marine Park',
    location: 'Kilifi County',
    duration: '3 days and 2 nights',
    date: '05.10.2025',
    airport: 'Nanyuki',
    extras: 'Full Board',
    price: '18000',
  },
  {
    id: 4,
    image: '/images/pop4.jpg',
    title: 'Bamburi Beach  ',
    location: 'Mombasa County',
    duration: '2 days and 1 night',
    date: '18.07.2025',
    airport: 'Nairobi',
    extras: 'Boat Ride',
    price: '16500',
  },
  {
    id: 5,
    image: '/images/pop5.jpg',
    title: 'Lamu Cultural Escape',
    location: 'Lamu Island, Kenya',
    duration: '4 days and 3 nights',
    date: '28.08.2025',
    airport: 'Manda',
    extras: 'Cultural Tour',
    price: '25000',
  },
  {
    id: 6,
    image: '/images/pop6.jpg',
    title: 'Mida Creek',
    location: 'Kilifi County',
    duration: '3 days and 2 nights',
    date: '15.09.2025',
    airport: 'Amboseli',
    extras: 'Safari Inclusive',
    price: '27800',
  },
];

const Popular = () => {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Section Header */}
      <div className="pt-12 pb-6 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
          <p className="text-gray-500 text-sm sm:text-base">
            See the best trip packages featuring Kenya’s top natural and cultural getaways.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 w-full">
        {destinations.map((place) => (
          <Card key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

// Card Component with dark hover shadow
const Card = ({ place }) => (
  <div className="bg-white shadow-sm group transition-shadow duration-300 hover:shadow-2xl">
    {/* Image */}
    <img
      src={place.image}
      alt={place.title}
      className="w-full h-[180px] object-cover"
    />

    {/* Card Details */}
    <div className="p-6 text-left text-sm text-gray-700 space-y-3">
      <h3 className="font-semibold text-base">{place.title}</h3>
      <p className="text-xs text-gray-500">{place.location}</p>

      <div className="mt-4 border-t border-gray-100 pt-4 space-y-2 text-sm">
        <p className="border-b border-gray-100 pb-1">
          <span className="font-medium">Duration:</span> {place.duration}
        </p>
        <p className="border-b border-gray-100 pb-1">
          <span className="font-medium">Date:</span> {place.date}
        </p>
        <p className="border-b border-gray-100 pb-1">
          <span className="font-medium">Airport:</span> {place.airport}
        </p>
        <p className="border-b border-gray-100 pb-1">
          <span className="font-medium">Extras:</span> {place.extras}
        </p>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-[11px] text-gray-400">Price per person</p>
        <span className="bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
          Ksh: {place.price}
        </span>
      </div>
    </div>
  </div>
);

export default Popular;



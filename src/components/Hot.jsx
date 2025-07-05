import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: `${process.env.PUBLIC_URL}/images/hot.jpg`,
    title: 'Ancient Architure',
    location: 'Gede Ruins, Kilifi County',
    price: '28000',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/hot.jpg`,
    title: 'Beach Paradise',
    location: 'Diani, Kwale County',
    price: '25000',
  },
  {
    image: `${process.env.PUBLIC_URL}/images/hot.jpg`,
    title: 'Island Escape',
    location: 'Lamu Old Town, Lamu County',
    price: '24000',
  },
];

const Hot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-12 px-4 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2">Today’s Hot Deals</h2>
      <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to day.
      </p>

      {/* Responsive, centered, slightly narrower carousel */}
      <div className="w-[90%] sm:max-w-4xl mx-auto h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] relative overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex items-center justify-center"
            >
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute w-full h-full object-cover"
              />

              {/* Centered Price Tag */}
              <div className="z-10 bg-yellow-400 text-black px-4 py-1 font-semibold text-sm sm:text-base shadow-md">
                Starting From Ksh: {slide.price}
              </div>

              {/* Bottom Center Title/Location */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white text-center z-10 drop-shadow-md">
                <h3 className="text-sm sm:text-base font-bold">{slide.title}</h3>
                <p className="text-xs sm:text-sm font-medium">{slide.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hot;






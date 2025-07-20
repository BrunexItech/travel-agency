import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Christon Hall',
      text:
        'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.',
      image: `${process.env.PUBLIC_URL}/images/man.jpg`,
      rating: 4,
    },
    {
      id: 2,
      name: 'Rhoda Aquilla',
      text:
        'A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.',
      image: `${process.env.PUBLIC_URL}/images/woman.jpg`,
      rating: 3,
    },
    {
      id: 3,
      name: 'David Alba',
      text:
        'Learning never stops, and growth is the key to success. Keep pushing your limits every day!',
      image: `${process.env.PUBLIC_URL}/images/man.jpg`,
      rating: 5,
    },
    {
      id: 4,
      name: 'Clara Til',
      text:
        'Consistency is what transforms average into excellence. Keep going, you are doing great!',
      image: `${process.env.PUBLIC_URL}/images/woman.jpg`,
      rating: 2,
    },
    {
      id: 5,
      name: 'Bonface Tim',
      text:
        'Learning never stops, and growth is the key to success. Keep pushing your limits every day!',
      image: `${process.env.PUBLIC_URL}/images/man.jpg`,
      rating: 4,
    },
    {
      id: 6,
      name: 'Stacey Depy',
      text:
        'Consistency is what transforms average into excellence. Keep going, you are doing great!',
      image: `${process.env.PUBLIC_URL}/images/woman.jpg`,
      rating: 2,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkSize();
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const pairs = [];
  if (isMobile) {
    testimonials.forEach((t) => pairs.push([t]));
  } else {
    for (let i = 0; i < testimonials.length; i += 2) {
      pairs.push(testimonials.slice(i, i + 2));
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === pairs.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [pairs.length]);

  return (
    <div className="py-16 bg-gray-100 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Testimonial from our Clients</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We value our clients&apos; feedback and love sharing what they say about us.
        </p>
      </div>

      <div className="max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${pairs.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / pairs.length)}%)`,
          }}
        >
          {pairs.map((pair, pairIndex) => (
            <div
              key={pairIndex}
              className="flex gap-8 w-full flex-shrink-0 px-4"
              style={{ width: `${100 / pairs.length}%` }}
            >
              {pair.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded shadow p-4 flex items-center gap-4 ${
                    isMobile ? 'basis-full' : 'basis-1/2'
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-gray-600 mb-2 pr-4">"{testimonial.text}"</p>
                    <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= testimonial.rating
                              ? 'text-yellow-400'
                              : 'text-gray-400'
                          }
                        >
                          {star <= testimonial.rating ? <FaStar /> : <FaRegStar />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {pairs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-yellow-400' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;




/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ "./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    },
    plugins: [],
  }
  







  
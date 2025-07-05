import React, { useState, useEffect } from 'react';

const Latest = () => {
  const blogs = [
    {
      id: 1,
      title: 'Creative Outdoor Ads',
      description:
        "Discover fresh ideas on how outdoor ads can inspire people in unique ways.",
      image: `${process.env.PUBLIC_URL}/images/blog1.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
    {
      id: 2,
      title: "It's Classified How To Utilize Free",
      description:
        "Explore the best ways to utilize free resources to grow your travel experiences.",
      image: `${process.env.PUBLIC_URL}/images/blog2.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
    {
      id: 3,
      title: 'Low Cost Advertising',
      description:
        "Learn how to advertise effectively without spending a fortune.",
      image: `${process.env.PUBLIC_URL}/images/blog3.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
    {
      id: 4,
      title: 'Adventure and Travel Tips',
      description:
        "Get the best adventure and travel tips to make your trips unforgettable.",
      image: `${process.env.PUBLIC_URL}/images/blog2.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
    {
      id: 5,
      title: 'Bonface Tim Ideas',
      description:
        "Learning never stops — discover how to keep pushing your limits every day!",
      image: `${process.env.PUBLIC_URL}/images/blog3.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
    {
      id: 6,
      title: 'Stacey Depy Insights',
      description:
        "Consistency is what transforms average into excellence. Keep going strong!",
      image: `${process.env.PUBLIC_URL}/images/blog2.jpg`,
      date: '3rd July, 2025',
      tags: ['Travel', 'Life Style'],
    },
  ];

  const groups = [];
  for (let i = 0; i < blogs.length; i += 3) {
    groups.push(blogs.slice(i, i + 3));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === groups.length - 1 ? 0 : prev + 1
      );
    }, 10000); 

    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Latest from Our Blog</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Get inspired by our newest stories and insights to fuel your next adventure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${groups.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / groups.length)}%)`,
          }}
        >
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="flex flex-wrap w-full flex-shrink-0 px-4"
              style={{ width: `${100 / groups.length}%` }}
            >
              {group.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow p-4 flex flex-col basis-full md:basis-1/3"
                >
                  {/* ✅ WRAPPED CONTENT to fit inside tight border */}
                  <div className="border-b border-gray-300 w-fit md:w-full">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover mb-4 transition-transform duration-500 hover:scale-105"
                    />

                    <div className="flex gap-2 mb-2">
                      {blog.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs border px-2 py-1 hover:bg-yellow-400 hover:text-white cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold text-lg mb-2 hover:text-yellow-400 cursor-pointer">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 mb-4">{blog.description}</p>
                    <p className="text-sm text-gray-400">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        {groups.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === idx ? 'bg-yellow-400' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Latest;



import React from 'react';
import {
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaBehance,
  FaEnvelope,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="md:w-1/3 p-4 mt-20 mb-20 bg-gray-100">
      {/* This inner div gets the border */}
      <div className="space-y-8 border border-gray-300 p-4">
        {/* Search Box */}
        <div className="bg-yellow-400 flex items-center rounded-lg overflow-hidden">
          <span className="pl-3 text-gray-700">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search Posts"
            className="flex-1 p-2 text-gray-700 placeholder-gray-700 bg-yellow-400 focus:outline-none"
          />
        </div>

        {/* Author Card */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <img
            src="/images/author.jpg"
            alt="Author"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-center text-lg font-bold">Bruno Sharif</h2>
          <p className="text-center text-sm text-gray-500 mb-4">
            Software Developer
          </p>

          <div className="flex justify-center gap-4 mb-4 text-gray-600">
            <FaFacebook className="hover:text-yellow-400 transition" />
            <FaTwitter className="hover:text-yellow-400 transition" />
            <FaGithub className="hover:text-yellow-400 transition" />
            <FaBehance className="hover:text-yellow-400 transition" />
          </div>

          <p className="text-center text-gray-600 text-sm">
            Boot camps have its supporters and its detractors. Some people do not
            understand why you should have to spend money on boot camp when you can get.
          </p>
        </div>

        {/* Separator line */}
        <hr className="border-t border-gray-300" />

{/* Popular Posts */}
<div>
  <h3 className="bg-yellow-400 text-white px-4 py-2 font-bold mb-4">
    Popular Posts
  </h3>
  <div className="space-y-4">
    <div className="flex items-center gap-4">
      <img
        src="/images/popular1.jpg"
        alt="Popular Post"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-semibold">
          Space The Final Frontier
        </h4>
        <p className="text-xs text-gray-500">12 hours ago</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <img
        src="/images/popular2.jpg"
        alt="Popular Post"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-semibold">The Amazing Hubble</h4>
        <p className="text-xs text-gray-500">1 day ago</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <img
        src="/images/popular3.jpg"
        alt="Popular Post"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-semibold">Astronomy Or Astrology</h4>
        <p className="text-xs text-gray-500">2 days ago</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <img
        src="/images/popular4.jpg"
        alt="Popular Post"
        className="w-16 h-16 object-cover rounded"
      />
      <div>
        <h4 className="text-sm font-semibold">Asteroids Telescope</h4>
        <p className="text-xs text-gray-500">3 days ago</p>
      </div>
    </div>
  </div>
</div>



{/* AD goes here */}
<div className="bg-gray-200 p-20 text-xl text-center flex flex-col">
    <span className="text-gray-500">300X250 PX</span>
  <span className="text-gray-500">AD GOES HERE</span>
</div>


        {/* Post Categories */}
        <div>
          <h3 className="bg-yellow-400 text-white px-4 py-2 font-bold mb-4">
            Post Categories
          </h3>
          <ul className="space-y-8 text-sm text-gray-600">
            {[
              'Technology',
              'Fashion',
              'Food',
              'Architecture',
              'Adventure',
              'Art',
              'Lifestyle',
            ].map((cat) => (
              <li
                key={cat}
                className="flex justify-between border-b border-dotted border-gray-400 pb-1 hover:text-yellow-400 transition"
              >
                <span>{cat}</span>
                <span>{Math.floor(Math.random() * 60) + 10}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="mt-20 p-4 rounded-lg shadow text-center">
          <h3 className="inline-block w-full bg-yellow-400 text-white px-4 py-2 font-bold">
            Newsletter
          </h3>
          <p className="text-xs text-gray-600 mb-4 mt-2">
            Subscribe to our newsletter to get the latest updates right in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row border border-gray-300 overflow-hidden w-full">
            <div className="flex items-center pl-3 pr-1 text-gray-500 bg-white">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 text-gray-700 focus:outline-none border-r-0 w-full"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            You can unsubscribe any time.
          </p>
        </div>

        {/* Tag Clouds */}
        <div>
          <h3 className="bg-yellow-400 text-white px-4 py-2 font-bold mb-4">
            Tag Clouds
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Technology',
              'Fashion',
              'Food',
              'Architecture',
              'Adventure',
              'Lifestyle',
              'Art',
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-gray-300 text-sm text-gray-600 cursor-pointer hover:bg-yellow-400 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
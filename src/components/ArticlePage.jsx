
import React from 'react';
import {
  FaUser,
  FaCalendar,
  FaEye,
  FaComment,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaBehance,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';

const ArticlePage = () => {
  return (
    <div className="flex flex-col md:w-2/3 p-8 mt-12 ">
      {/* Hero Image */}
      <img
        src="images/blog1.jpg"
        alt="Blog Hero"
        className="w-full h-auto"
      />

      {/* Categories + Meta Info + Paragraph */}
      <div className="flex flex-col md:flex-row gap-8 mt-4 bg-gray-100">
        {/* Left: Categories + Meta Info */}
        <div className="md:w-1/3 ">
          <p className="text-gray-600 mb-2">
            Food, Technology, Politics, Lifestyle
          </p>
          <div className="flex flex-col gap-2 text-sm  text-gray-500">
            <span className="flex items-center py-2 gap-1">
              <FaUser /> Mark Wiens
            </span>
            <span className="flex items-center py-2 gap-1">
              <FaCalendar /> 04 July, 2025
            </span>
            <span className="flex items-center py-2 gap-1">
              <FaEye /> 1.2M Views
            </span>
            <span className="flex items-center py-2 gap-1">
              <FaComment /> 06 Comments
            </span>
          </div>
        </div>

        {/* Right: Main Paragraph */}
        <div className="md:w-2/3 p-4 bg-gray-100">
          <p className="text-gray-700 mb-2 ">
            In today’s fast-changing world, staying updated with the latest trends in technology, food, and lifestyle is crucial. From healthy recipes to innovative gadgets, people are more connected and informed than ever before.
          </p>
          <p className="text-gray-700 ">
            This blog explores how everyday habits are influenced by political debates, cultural shifts, and the rise of new technologies. Dive in to discover practical tips, honest opinions, and stories that inspire mindful living.
          </p>
        </div>
      </div>

      {/* Extra Paragraph */}
      <p className="mt-4 text-gray-700 bg-white pl-2 pr-4 py-8 ">
        Whether you’re looking for delicious meals, smart devices, or thoughtful insights on social issues, our team brings you well-researched and engaging articles. Stay curious, stay informed, and enjoy the read!
      </p>

      {/* Inline Images */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <img
          src="images/post1.jpg"
          alt="Post 1"
          className="w-full md:w-1/2 h-auto"
        />
        <img
          src="images/post2.jpg"
          alt="Post 2"
          className="w-full md:w-1/2 h-auto"
        />
      </div>

      {/* Another Paragraph */}
      <p className="mt-4 text-gray-700">
        We believe that sharing knowledge creates stronger communities. Let us know your thoughts in the comments, and don’t forget to subscribe for more updates and stories delivered straight to you.
      </p>

      {/* Related Posts with Images & Hover Arrows */}
      <div className="flex justify-between items-center mt-8 border-t pt-4">
        {/* Prev Post */}
        <div className="flex items-center gap-4">
          {/* Image Holder */}
          <div className="relative w-12 h-12 group">
            <img
              src="images/prev.jpg"
              alt="Prev"
              className="w-full h-full object-cover"
            />
            <FaArrowLeft className="absolute inset-0 m-auto text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition" />
          </div>
          <div>
            <span className="text-sm text-gray-500">Prev Post</span>
            <h3 className="text-lg font-semibold">Space The Final Frontier</h3>
          </div>
        </div>

        {/* Next Post */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm text-gray-500">Next Post</span>
            <h3 className="text-lg font-semibold">Telescopes 101</h3>
          </div>
          {/* Image Holder */}
          <div className="relative w-12 h-12 group">
            <img
              src="images/next.jpg"
              alt="Next"
              className="w-full h-full object-cover"
            />
            <FaArrowRight className="absolute inset-0 m-auto text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">05 Comments</h2>

        {/* Comment 1 */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src="images/user1.jpg"
            alt="Emily Blunt"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">Emily Blunt</h3>
            <p className="text-xs text-gray-400 mb-2">03 July, 2025</p>
            <p className="text-gray-700">
              I always look forward to these posts — so well written and relatable!
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-yellow-400 hover:bg-yellow-400">
            Reply
          </button>
        </div>

        {/* Comment 2 */}
        <div className="flex items-start gap-4 mb-4 ml-8">
          <img
            src="images/user2.jpg"
            alt="Elsie Cunningham"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">Elsie Cunningham</h3>
            <p className="text-xs text-gray-400 mb-2">02 July, 2025</p>
            <p className="text-gray-700">
              Great insights, really enjoyed the technology section.
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-yellow-400 hover:bg-yellow-400">
            Reply
          </button>
        </div>

        {/* Comment 3 */}
        <div className="flex items-start gap-4 mb-4 ml-8">
          <img
            src="images/user3.jpg"
            alt="Annie Stephane"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">Annie Stephane</h3>
            <p className="text-xs text-gray-400 mb-2">30 June, 2025</p>
            <p className="text-gray-700">
              This was exactly what I needed today — keep up the great work!
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-yellow-400 hover:bg-yellow-400">
            Reply
          </button>
        </div>

        {/* Comment 4 */}
        <div className="flex items-start gap-4 mb-4 ml-8">
          <img
            src="images/user4.jpg"
            alt="James Doe"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">James Doe</h3>
            <p className="text-xs text-gray-400 mb-2">29 June, 2025</p>
            <p className="text-gray-700">
              Appreciate how detailed and easy to follow this blog is!
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-yellow-400 hover:bg-yellow-400">
            Reply
          </button>
        </div>

        {/* Comment 5 */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src="images/user5.jpg"
            alt="Change Lee"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <h3 className="font-semibold">Sophie Lee</h3>
            <p className="text-xs text-gray-400 mb-2">28 June, 2025</p>
            <p className="text-gray-700">
              Love the fresh perspective here. Looking forward to the next update!
            </p>
          </div>
          <button className="px-4 py-1 text-sm border border-yellow-400 hover:bg-yellow-400">
            Reply
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mt-6 text-gray-600">
        <FaFacebook className="hover:text-yellow-400 cursor-pointer" />
        <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
        <FaGithub className="hover:text-yellow-400 cursor-pointer" />
        <FaBehance className="hover:text-yellow-400 cursor-pointer" />
      </div>

      {/* Leave Comment */}
      <div className="mt-8 p-6 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Leave Comment</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter name"
            className="flex-1 p-2 bg-white border border-gray-300 w-1/2"
          />
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 p-2 bg-white border border-gray-300 w-1/2"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-2 mb-4 bg-white border border-gray-300"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full p-2 mb-4 bg-white border border-gray-300"
        ></textarea>
        <button className="bg-yellow-400 px-6 py-2 hover:bg-white hover:text-yellow-400 border border-yellow-400 transition">
          POST COMMENT
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;

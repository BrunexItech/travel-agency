import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ArticlePage from '../components/ArticlePage';
import Sidebar from '../components/Sidebar';

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <img
          src={`${process.env.PUBLIC_URL}/images/about.jpg`}
          alt="About"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-1">
            Blog Details Page
          </h1>
          <div className="flex items-center text-white text-sm md:text-base font-light tracking-wider">
            <span>Home</span>
            <HiArrowNarrowRight className="mx-1 text-xl md:text-2xl" />
            <span>Blog</span>
            <HiArrowNarrowRight className="mx-1 text-xl md:text-2xl" />
            <span>Blogs Detailed Page</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100">
        <div className="md:flex max-w-6xl mx-auto">
          <ArticlePage />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog;

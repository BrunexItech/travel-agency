import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import WhoWeAre from '../components/WhoWeAre';
import PackagesSection from '../components/PackagesSection';
import OtherServides from '../components/OtherServides';
import Testimonials from '../components/Testimonials';

const About = () => {
  return (
    <div>
      <div className="relative w-full h-[50vh]">
        <img
          src={`${process.env.PUBLIC_URL}/images/about.jpg`}
          alt="About"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-1">
            About Us
          </h1>
          <div className="flex items-center text-white text-sm md:text-base font-light tracking-wider">
            <span>Home</span>
            <HiArrowNarrowRight className="mx-1 text-xl md:text-2xl" />
            <span>About</span>
          </div>
        </div>
      </div>

      <WhoWeAre />
      <PackagesSection />
      <OtherServides />
      <Testimonials />
    </div>
  );
};

export default About;



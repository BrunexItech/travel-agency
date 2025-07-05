import React from 'react';

import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import OtherServides from '../components/OtherServides';
import Testimonials from '../components/Testimonials';
import Addition from '../components/Addition';
import Latest from '../components/Latest';
import PackagesSection from '../components/PackagesSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <PackagesSection />
      <OtherServides />
      <Testimonials />
      <Addition />
      <Latest />
    </>
  );
};

export default Home;
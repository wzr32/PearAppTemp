import React from 'react';
import Banner from './components/Banner';
import HeroBanner from './components/HeroBanner';
import Hiring from './components/Hiring';
import OurValues from './components/OurValues';
import Team from './components/Team';
import Unleash from './components/Unleash';

const AboutView = () => {
  return (
    <>
      <HeroBanner />
      <Banner />
      <Unleash />
      <Hiring />
      <Team />
      <OurValues />
      
    </>
  );
};

export default AboutView;

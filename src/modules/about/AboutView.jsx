import React from 'react';
import HeroBanner from './components/HeroBanner';
import Hiring from './components/Hiring';
import OurValues from './components/OurValues';
import Team from './components/Team';
import Unleash from './components/Unleash';

const AboutView = () => {
  return (
    <>
      <HeroBanner />
      <Unleash />
      <Hiring />
      <Team />
      <OurValues />
    </>
  );
};

export default AboutView;

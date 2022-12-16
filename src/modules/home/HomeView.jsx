import React from 'react';
import HeroBannerLanding from './components/HeroBannerLanding';
import AboutContent from './components/AboutContent';
import AboutContentTwo from './components/AboutContentTwo';
import Unleash from './components/Unleash';
import Join from './components/Join';
import Subscribe from './components/Subscribe'

const HomeView = () => {
  return (
    <>
      <HeroBannerLanding />
      <AboutContent />
      <AboutContentTwo />
      <Unleash />
      <Join />
      <Subscribe />
    </>
  );
};

export default HomeView;

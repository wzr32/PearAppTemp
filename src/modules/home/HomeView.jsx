import React from 'react';
import HeroBannerLanding from './components/HeroBannerLanding';
import GoodbyeConflicts from './components/AboutContent';
import AboutContentTwo from './components/AboutContentTwo';
import Unleash from './components/Unleash';
import Join from './components/Join';
import Subscribe from './components/Subscribe'

const HomeView = () => {
  return (
    <>
      <HeroBannerLanding />
      <GoodbyeConflicts />
      <AboutContentTwo />
      <Unleash />
      <Join />
      <Subscribe />
    </>
  );
};

export default HomeView;

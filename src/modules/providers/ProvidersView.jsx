import React from 'react';
import HeroBannerProviders from './components/HeroBannerProviders';
import AllProviders from '../filters/components/AllProviders';
import AboutPear from '../filters/components/AboutPear';
import Subscribe from './components/Subscribe';

const ProvidersView = () => {
  return (
    <>
      <HeroBannerProviders />
      <AllProviders />
      <AboutPear />
      <Subscribe />
    </>
  );
};

export default ProvidersView;

import React from 'react';
import HeroBannerFilters from './components/HeroBannerFilters';
import Filters from './components/Filters';
import Disclaimer from './components/Disclaimer';
import AllProviders from './components/AllProviders';
import AboutPear from './components/AboutPear';
import Subscribe from './components/Subscribe';

const FiltersView = () => {
  return (
    <>
      <HeroBannerFilters />
      <Filters />
      <Disclaimer />
      <AllProviders />
      <AboutPear />
      <Subscribe />
    </>
  );
};

export default FiltersView;
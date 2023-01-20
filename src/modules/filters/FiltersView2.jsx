import React from 'react';
import GetStarted from './components/Filter2/GetStarted';
import MappingTraders from './components/Filter2/MappingTraders';
import SeeAllProviders from './components/Filter2/SeeAllProviders';
import WhatIsPear from './components/Filter2/WhatIsPear';

const FiltersView2 = () => {
  return (
    <section>
      <GetStarted />
      <MappingTraders />
      <SeeAllProviders />
      <WhatIsPear />
    </section>
  );
};

export default FiltersView2;

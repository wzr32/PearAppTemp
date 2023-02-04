import React from "react";
import HeroBannerFilters from "../filters/components/HeroBannerFilters";
import Filters from "../filters/components/Filters";
import Disclaimer from "../filters/components/Disclaimer";
import AllProviders from "../filters/components/AllProviders";
import AboutPear from "../filters/components/AboutPear";
import Subscribe from "../filters/components/Subscribe";
import WouldInvest from "./filter/WouldInvest";
import HowMuchInvest from "./filter/HowMuchInvest";
import PlatformSelect from "./filter/PlatformSelect";

const BrokersView = () => {
  return (
    <>
      <HeroBannerFilters />
      <Filters />
      <WouldInvest />
      <HowMuchInvest />
      <PlatformSelect />
      <Disclaimer />
      <AllProviders />
      <AboutPear />
      <Subscribe />
    </>
  );
};

export default BrokersView;

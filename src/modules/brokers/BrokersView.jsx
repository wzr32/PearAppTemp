import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

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

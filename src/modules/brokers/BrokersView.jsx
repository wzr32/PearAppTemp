import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBannerFilters from "../filters/components/HeroBannerFilters";
import Filters from "../filters/components/Filters";
import Disclaimer from "../filters/components/Disclaimer";
import AllProviders from "../filters/components/AllProviders";
import AboutPear from "../filters/components/AboutPear";
import Subscribe from "../filters/components/Subscribe";
import WouldInvest from "./components/WouldInvest";
import HowMuchInvest from "./components/HowMuchInvest";
import PlatformSelect from "./components/PlatformSelect";
import Find from "./components/Find";
import CountryResidence from "./components/CountryResidence";
import LookingInvest from "./components/LookingInvest";

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
      <Find />
      <WouldInvest />
      <CountryResidence />
      <HowMuchInvest />
      <LookingInvest />
      <PlatformSelect />
      <Disclaimer />
      <AllProviders />
      <AboutPear />
      <Subscribe />
    </>
  );
};

export default BrokersView;

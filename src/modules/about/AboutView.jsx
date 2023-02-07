import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroBanner from "./components/HeroBanner";
import Hiring from "./components/Hiring";
import OurValues from "./components/OurValues";
import Team from "./components/Team";
import Unleash from "./components/Unleash";

const AboutView = () => {
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
      <HeroBanner />
      <Unleash />
      <Hiring />
      <Team />
      <OurValues />
    </>
  );
};

export default AboutView;

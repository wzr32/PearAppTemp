import React from 'react';
import HeroBannerLanding from './components/HeroBannerLanding';
import GoodbyeConflicts from './components/GoodbyeConflicts';
import SaveTime from './components/SaveTime';
import Unleash from './components/Unleash';
import Join from './components/Join';
import Subscribe from './components/Subscribe'
import HowToStart from './components/HowToStart';
import StartForm from './components/StartForm';
import TopInvestments from './components/TopInvestments';

const HomeView = () => {
  return (
    <>
      <HeroBannerLanding />
      <GoodbyeConflicts />
      <SaveTime />
      <HowToStart />
      <Unleash />
      <TopInvestments />
      <Join />
      <Subscribe />
      <StartForm />
    </>
  );
};

export default HomeView;

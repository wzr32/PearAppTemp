import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import HomeView from '../modules/home/HomeView';
import AboutView from '../modules/about/AboutView';
import FaqsView from '../modules/faqs/FaqsView';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomeView />} path="/" />
        <Route element={<AboutView />} path="/about-us" />
        <Route element={<FaqsView />} path="/faqs" />
      </Route>
    </Routes>  
  );
};

export default Router;

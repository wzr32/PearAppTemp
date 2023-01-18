import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '../shared/layout/Layout';
import HomeView from '../modules/home/HomeView';
import AboutView from '../modules/about/AboutView';
import FaqsView from '../modules/faqs/FaqsView';
import FiltersView from '../modules/filters/FiltersView';
import ProvidersView from '../modules/providers/ProvidersView';
import NotFoundView from '../modules/notFound/NotFoundView';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomeView />} path="/" />
        <Route element={<AboutView />} path="/about-us" />
        <Route element={<FaqsView />} path="/faqs" />
        <Route element={<FiltersView />} path="/filters" />
        <Route element={<ProvidersView />} path="/providers" />
        <Route element={<NotFoundView />} path="*" />
      </Route>
    </Routes>  
  );
};

export default Router;

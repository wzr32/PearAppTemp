import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../shared/layout/Layout";
import HomeView from "../modules/home/HomeView";
import AboutView from "../modules/about/AboutView";
import FaqsView from "../modules/faqs/FaqsView";
import BrokersView from "../modules/brokers/BrokersView";
import ListBrokersView from "../modules/listBrokers/ListBrokersView";
import ProvidersView from "../modules/providers/ProvidersView";
import NotFoundView from "../modules/notFound/NotFoundView";
import PrivacyView from "../modules/legal/PrivacyView";
import TermsView from "../modules/legal/TermsView";
import BrokerView from "../modules/broker/BrokerView";
import CompareView from "../modules/compare/CompareView";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomeView />} path="/" />
        <Route element={<AboutView />} path="/about-us" />
        <Route element={<FaqsView />} path="/faqs" />
        <Route path="/get-started" element={<BrokersView />} />
        <Route path="/broker/:id" element={<BrokerView />} />
        <Route path="/brokers">
          <Route index element={<ListBrokersView />} />
          <Route path=":platf1/:platf2" element={<ListBrokersView />} />
        </Route>
        <Route path="/compare" element={<CompareView />} />
        <Route element={<ProvidersView />} path="/providers" />
        <Route element={<PrivacyView />} path="/privacy-politics" />
        <Route element={<TermsView />} path="/terms-and-conditions" />
        <Route element={<NotFoundView />} path="*" />
      </Route>
    </Routes>
  );
};

export default Router;

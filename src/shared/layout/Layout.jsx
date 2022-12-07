import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { Container } from '@mui/material';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <main>
          <Outlet/>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

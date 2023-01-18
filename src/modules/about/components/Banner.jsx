import { Box, Container } from '@mui/material';
import React from 'react';
import Laptop from '../../../shared/assets/about_laptop.png';

const Banner = () => {
  return (
    <section>
      <Container>
        <Box sx={{ width: "100%" }}>
          <img src={Laptop} alt="banner_laptop" style={{ objectFit: "contain", height: "100%", width: "100%" }} />
        </Box>
      </Container>
    </section>
  )
}

export default Banner
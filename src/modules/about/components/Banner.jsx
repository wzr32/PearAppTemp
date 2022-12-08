import { Box } from '@mui/material';
import React from 'react';
import Laptop from '../../../shared/assets/about_laptop.png';

const Banner = () => {
  return (
    <section>
      <Box sx={{ width: "100%" }}>
        <img src={Laptop} alt="banner_laptop" style={{ objectFit: "contain", height: "100%", width: "100%" }} />
      </Box>
    </section>
  )
}

export default Banner
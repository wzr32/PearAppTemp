import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GBPhone from '../../../shared/assets/landing_goodbye.png';

const AboutContentTwo = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={4}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img src={GBPhone} alt="about_hand" className='landing-herobanner__image' />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center">Goodbye Conflicts <br/>of Interest</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center">
            Our proprietary algorithm will present you the results that best match your 
            criteria, not the ones that will pay us more commission.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutContentTwo
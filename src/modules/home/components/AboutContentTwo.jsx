import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SVGPhone from '../../../shared/assets/Home.svg';

const AboutContentTwo = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={4} alignItems="center">

        <Grid item md={8}>
          <Typography variant="h3" textAlign="center">Goodbye Conflicts of Interest</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center">
            Our proprietary algorithm will present you the results that best match your 
            criteria, not the ones that will pay us more commission.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <img src={SVGPhone} alt="about_hand" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutContentTwo
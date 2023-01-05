import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GBPhone from '../../../shared/assets/landing_goodbye.png';

const GoodbyeConflicts = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={7}>
          <Typography variant="h3" textAlign="center">Goodbye Conflicts <br/> of Interest</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center">
            Our proprietary algorithm will present you the results that best match your 
            criteria, not the ones that will pay us more commission.
          </Typography>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ height: "100%", width: "100%" }}>
            <img src={GBPhone} alt="about_hand" className='landing-herobanner__image' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default GoodbyeConflicts
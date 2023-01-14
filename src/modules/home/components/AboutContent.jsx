import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GBPhone from '../../../shared/assets/landing_goodbye.png';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const GoodbyeConflicts = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
      <Grid item md={4}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img src={GBPhone} alt="about_hand" className='landing-herobanner__image' />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR} maxWidth="400px" margin={"0 auto .5rem auto"}>Goodbye Conflicts of Interest</Typography>
          <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR}> Better Results </Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="370px" margin={"1rem auto 0 auto"}>
            Our proprietary algorithm will present you the results 
            that best match your criteria, not the ones that will 
            pay us more commission.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default GoodbyeConflicts
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GBPhone from '../../../shared/assets/Phonesfaqs.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';


const WhatIsPear = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
    
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR} maxWidth="460px" margin={"0 auto .5rem auto"}>Find a platform that suits you.</Typography>
          <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR}>Do not waste time.</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="380px" margin={"1rem auto 0 auto"}>
            With Pear you will be able to find the platform you need without complications, 
            <br /> in a few seconds.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <img src={GBPhone} alt="about_hand" className='landing-herobanner__image' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhatIsPear;
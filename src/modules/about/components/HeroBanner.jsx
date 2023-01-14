import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import GBPhone from '../../../shared/assets/landing_goodbye.png';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBanner = () => {
  return (
    <Box component="section"  sx={{ minHeight: "100vh", marginTop:"4rem"}}>
      <Grid container spacing={2} alignItems="center">
      
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR}>About Our Company</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="400px" margin={"1rem auto 0 auto"}>
            Everything you need to know about the product and  building you’re looking for? 
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

export default HeroBanner
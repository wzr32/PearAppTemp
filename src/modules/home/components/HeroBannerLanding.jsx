import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import SVGPhone from '../../../shared/assets/Home.svg';
import { LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBannerLanding = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh", marginTop:"4rem" }}>
      <Grid container alignItems="center" sx={{ minHeight: "calc(100vh - 100px)" }}>
        <Grid item md={7}>
          <Typography variant="h3" textAlign="center" sx={{ color: LIGHT_GREEN_COLOR }}>Welcome to Pear</Typography>
          <Typography variant="h3" textAlign="center">Investement? Try Pear first</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center">
            We help you choose the investment provider that resonates with YOU
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
          <GreenButton>Get started</GreenButton>
        </Box>
        </Grid>
        <Grid item md={5}>
          <Box sx={{ height: '100%', width: "100%" }}>
            <img src={SVGPhone} alt="about_hand" className='landing-herobanner__image' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroBannerLanding
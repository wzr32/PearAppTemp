import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import SVGPhone from '../../../shared/assets/Home.svg';

const HeroBannerLanding = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh", marginTop:"4rem"}}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center">Investement? Try Pear first</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center">
            We help you choose the investment provider that resonates with YOU
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
          <GreenButton>Get started</GreenButton>
        </Box>
        </Grid>
        <Grid item md={4}>
          <img src={SVGPhone} alt="about_hand" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroBannerLanding
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import SVGPhone from '../../../shared/assets/Landing_phones.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBannerLanding = () => {
  return (
    <Container>
      <Box component="section" sx={{ minHeight: "100vh", marginTop:"4rem"}}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={8}>
            <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR}>Welcome to Pear</Typography>
            <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR}>Investement? Try Pear first</Typography>
            <Typography variant="body1" maxWidth="400px" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} >
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
    </Container>
  )
}

export default HeroBannerLanding
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import GBPhone from '../../../shared/assets/landing_goodbye.png';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';


const AboutContentTwo = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR} maxWidth="400px" margin={"0 auto .5rem auto"}>Save Time</Typography>
          <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR}> Simple Search </Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="360px" margin={"1rem auto 0 auto"}>
            Save hours of research. Find the provider that it is right for you by
            answering a few simple questions.
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

export default AboutContentTwo
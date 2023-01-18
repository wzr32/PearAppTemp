import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SVGHand from '../../../shared/assets/about_hand_hb.svg';

const HeroBanner = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={8}>
            <Typography variant="h3">About Our Company</Typography>
            <Typography variant="body1" component="span">
              Everything you need to know about the product and building you're looking for?
            </Typography>
            <Typography variant="body1" component="span">
              Please contact to our team
            </Typography>
          </Grid>
          <Grid item md={4}>
            <img src={SVGHand} alt="about_hand" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroBanner
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const BannerFAQS = () => {
  return (
    <Grid container spacing={5} sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6} md={8}>
        <Typography>Frequently Asked Questions</Typography>
        <Typography>Everything you need to know about the product and  building you’re looking for? </Typography>
      </Grid>
      <Grid item xs={false} sm={6} md={4}>
        image
      </Grid>
    </Grid>
  )
}

export default BannerFAQS
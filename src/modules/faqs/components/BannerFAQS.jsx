import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const BannerFAQS = () => {
  return (
    <Container>
      <Grid container spacing={5} sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={8}>
          <Typography>What is Pear?</Typography>
          <Typography>
            Pear is a search tool that filters the best solutions for you, tailored to your needs, facilitating the choice of platform according to your characteristics as a consumer.
          </Typography>
        </Grid>
        <Grid item xs={false} sm={6} md={4}>
          image
        </Grid>
      </Grid>
    </Container>
  )
}

export default BannerFAQS;

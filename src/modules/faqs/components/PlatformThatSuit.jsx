import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const PlatformThatSuit = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom>
              Find a platform that suits you.
            </Typography>
            <Typography gutterBottom>
              Do not waste time.
            </Typography>
            <Typography gutterBottom>
              With Pear you will be able to find the platform you need without complications,in a few seconds.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>image</Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PlatformThatSuit;

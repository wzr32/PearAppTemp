import React from 'react';
import { Container, Grid, Typography } from '@mui/material'; 

const NotFoundView = () => {
  return (
    <Grid container spacing={2}>
      <Container>
        <Grid item xs={12} md={5}>
          404 image
        </Grid>
        <Grid item xe={12} md={7}>
          <Typography>Page not Found</Typography>
          <Typography>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. Maybe what you are looking for can be found at Pear.com Pear links are case sensitive.</Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default NotFoundView;

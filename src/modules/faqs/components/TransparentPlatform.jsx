import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const TransparentPlatform = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>image</Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom>
              A transparent platform.
            </Typography>
            <Typography gutterBottom>
              We show the best platform, without hidden advertising.
            </Typography>
            <Typography gutterBottom>
              At Pear we choose the best platform based on objective parameters, which can be measured and evaluated, each platform on our list of providers is exhaustively evaluated by our team.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransparentPlatform;

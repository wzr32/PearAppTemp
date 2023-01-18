import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { LIGHT_GREEN_COLOR, MEDIUM_GREEN_COLOR } from '../../../shared/config/Colors';

const Unleash = () => {
  return (
    <Box component="section" sx={{ margin: "2rem 0 8rem 0", textAlign: "center" }}>
      <Container>

        <Typography variant="h3" color={MEDIUM_GREEN_COLOR}>
          Unleash The Full Power Of Data
        </Typography>

        <Typography variant="body1" sx={{ margin: "1.5rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, quam possimus veritatis fuga non labore dolore! Ipsam et modi accusamus odit ad, iusto aspernatur minima saepe omnis. 
          Pariatur, asperiores sint.
        </Typography>

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography variant='h4' color={LIGHT_GREEN_COLOR}>400+</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h4' color={LIGHT_GREEN_COLOR}>600%</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h4' color={LIGHT_GREEN_COLOR}>10K</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Unleash;

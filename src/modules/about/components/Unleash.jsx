import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Unleash = () => {
  return (
    <section>
      <Container>
        <Typography variant="h3" component="h2">
          Unleash The Full Power Of Data
        </Typography>

        <Typography variant='body2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, quam possimus veritatis fuga non labore dolore! Ipsam et modi accusamus odit ad, iusto aspernatur minima saepe omnis. 
          Pariatur, asperiores sint.
        </Typography>

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography>400+</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>600%</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography>10K</Typography>
              <Typography>Projects completed</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          pear icon gallery
        </Box>
      </Container>
    </section>
  );
};

export default Unleash;

import React from 'react';
import { 
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Unleash = () => {
  return (
    <Box component="section" sx={{ margin: "160px 0", textAlign: "center" }}>
      <Container>

        <Typography variant="h3" component="h2">
          Unleash The Full Power Of Data
        </Typography>

        <Typography variant="body2" sx={{ margin: "75px 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, quam possimus veritatis fuga non labore dolore! Ipsam et modi accusamus odit ad, iusto aspernatur minima saepe omnis. 
          Pariatur, asperiores sint.
        </Typography>

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography textAlign="center">400+</Typography>
              <Typography textAlign="center">Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography textAlign="center">600%</Typography>
              <Typography textAlign="center">Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography textAlign="center">10K</Typography>
              <Typography textAlign="center">Projects completed</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box component="div" sx={{ marginTop: "200px" }}>
          pear icon gallery
        </Box>
      </Container>
    </Box>
  );
};

export default Unleash;

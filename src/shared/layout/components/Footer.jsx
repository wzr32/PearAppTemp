import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

const Footer = () => {
  return (
    <section>
      <Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat culpa eligendi aliquid est itaque quidem, asperiores fugit omnis ea eius obcaecati neque debitis ullam atque laborum numquam quis soluta?
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>Example@mail.com</Button>
              <Button>Get Started</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography>pear icon</Typography>
              <Typography>lorem ipsum dolor sit amet.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              lorem list
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              PearApp 2022 All Rights Reserved
            </Grid>
            <Grid item xs={12} md={6}>
              social networks icons
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;

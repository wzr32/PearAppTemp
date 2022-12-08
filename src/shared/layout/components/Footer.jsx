import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR } from '../../config/Colors';
import { GreenButton, WhiteButton } from '../../components/buttons/CustomButtons';

const Footer = () => {
  return (
    <Box component="section">
      <Box
        component="div"
        sx={{
          background: DARK_GREEN_COLOR,
          color: "#fff",
          padding: "50px 115px",
        }}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography align="center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat culpa eligendi aliquid est itaque quidem, asperiores fugit omnis ea eius obcaecati neque debitis ullam atque laborum numquam quis soluta?
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", gap: "40px" }}>
                <WhiteButton variant="contained">Example@mail.com</WhiteButton>
                <GreenButton variant="contained">Get Started</GreenButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="div"
        sx={{
          background: MEDIUM_GREEN_COLOR,
          color: "#fff",
          padding: "71px 50px",
        }}
      >
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

          <Grid container spacing={2} sx={{ marginTop: "40px" }}>
            <Grid item xs={12} md={6}>
              &copy; PearApp 2022 All Rights Reserved
            </Grid>
            <Grid item xs={12} md={6}>
              social networks icons
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GBPhone from "../../../shared/assets/Home.svg";
import {
  DARK_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
  WHITE_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const PlataformThatSuit = () => {
  return (
    <Box component="section" sx={{ margin: "2rem 0" }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={7}>
            <Typography
              variant="h3"
              textAlign="center"
              color={LIGHT_GREEN_COLOR}
              maxWidth="520px"
              margin={"0 auto .5rem auto"}
              fontWeight="bold"
            >
              Find a platform that suits you.
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color={DARK_GREEN_COLOR}
              fontWeight="bold"
            >
              Do not waste time.
            </Typography>
            <Typography
              variant="body1"
              component="span"
              display="flex"
              justifyContent="center"
              textAlign="center"
              maxWidth="380px"
              margin={"1rem auto 0 auto"}
            >
              With Pear you will be able to find the platform you need without
              complications,
              <br /> in a few seconds.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={GBPhone}
                alt="about_hand"
                className="landing-herobanner__image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlataformThatSuit;

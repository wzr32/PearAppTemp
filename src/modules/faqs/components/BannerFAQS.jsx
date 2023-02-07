import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import GBPhone from "../../../shared/assets/Landing_Phone.svg";
import {
  DARK_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
  WHITE_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const BannerFAQS = () => {
  return (
    <Box component="section" sx={{ marginTop: "4rem" }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={8}>
            <Typography
              variant="h3"
              textAlign="center"
              color={LIGHT_GREEN_COLOR}
              maxWidth="400px"
              margin={"0 auto .5rem auto"}
              fontWeight="bold"
            >
              What is Pear?
            </Typography>
            <Typography
              variant="h6"
              component="span"
              display="flex"
              justifyContent="center"
              textAlign="center"
              maxWidth="580px"
              margin={"1rem auto 0 auto"}
              color={DARK_GREEN_COLOR}
            >
              Pear is a search tool that filters the best solutions for you,
              tailored to your needs, facilitating the choice of platform
              according to your characteristics as a consumer.
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

export default BannerFAQS;

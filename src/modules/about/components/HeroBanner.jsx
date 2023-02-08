import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import GBPhone from "../../../shared/assets/Landing_phone.svg";
import {
  DARK_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
  WHITE_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const HeroBanner = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "calc(100vh - 65px)",
        marginTop: "2rem",
        display: "flex",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={8}>
            <Typography
              variant="h3"
              textAlign="center"
              color={LIGHT_GREEN_COLOR}
              fontWeight="bold"
            >
              About Our Company
            </Typography>
            <Typography
              variant="h6"
              component="span"
              display="flex"
              justifyContent="center"
              textAlign="center"
              maxWidth="540px"
              margin={"1rem auto 0 auto"}
              color={DARK_GREEN_COLOR}
              fontWeight="semibold"
            >
              Everything you need to know about the product and building you’re
              looking for?
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

export default HeroBanner;

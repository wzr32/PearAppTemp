import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import SVGPhone from "../../../shared/assets/Landing_phones.svg";
import {
  DARK_GREEN_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";
import { NavLink } from "react-router-dom";

const HeroBannerLanding = () => {
  return (
    <Box component="section" sx={{ margin: "8rem 0 4rem 0" }}>
      <Container>
        
        <Grid container spacing={2} alignItems="center">
          <Grid item md={8}>
            <Typography
                variant="h3"
                fontWeight="bold"
                textAlign="center"
                color={LIGHT_GREEN_COLOR}
              >
                Welcome to Pear
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                textAlign="center"
                color={DARK_GREEN_COLOR}
              >
                Investement? Try Pear first
              </Typography>
              <Typography
                variant="body1"
                maxWidth="420px"
                component="span"
                display="flex"
                justifyContent="center"
                textAlign="center"
                margin={"1rem auto 0 auto"}
              >
                We help you choose the investment provider that resonates with YOU
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  margin: "28px 0",
                }}
                >
                <GreenButton component={NavLink} to="/get-started">
                  Get started
                </GreenButton>
              </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={SVGPhone}
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

export default HeroBannerLanding;





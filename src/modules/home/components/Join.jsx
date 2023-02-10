import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import {
  WhiteButton,
  GreenButton,
} from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from "../../../shared/config/Colors";
import SVGLogo from "../../../shared/assets/Logo.svg";
import { NavLink } from "react-router-dom";

const Join = () => {
  return (
    <Box component="section">
      <Container>
        <Box sx={{
          padding: "50px 0",
          textAlign: "center",
          background: GREY_BG_COLOR,
          margin: "8rem 0",
          borderRadius: "45px"
        }}>
          <Grid container justifyContent="space-around">
            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight="bold">
                Join over 400+ startups growing with Pear
              </Typography>
              <Typography sx={{ margin: ".5rem 0 1rem" }}>
                Start now with us!
              </Typography>
              <Box
                sx={{
                  display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", margin: "28px 0"
                }}
              >
                <WhiteButton>See More</WhiteButton>
                <GreenButton>Get it</GreenButton>
              </Box>
            </Grid>

            <Grid container item md={3}>
              {[...new Array(6)].map((_, index) => (
                <Grid item xs={6} key={`icon_map__${index}`}>
                  <img src={SVGLogo} alt="logo" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Join;

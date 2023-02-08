import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GBPhone from "../../../shared/assets/Landing_phone.svg";
import {
  DARK_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
  WHITE_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const SaveTime = () => {
  return (
    <Container>
      <Box component="section" sx={{ margin: "0 0 10rem 0" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={8}>
            <Typography
              variant="h3"
              fontWeight="bold"
              textAlign="center"
              color={LIGHT_GREEN_COLOR}
              maxWidth="400px"
              margin={"0 auto .5rem auto"}
            >
              Save Time
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              color={DARK_GREEN_COLOR}
            >
              {" "}
              Simple Search{" "}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              display="flex"
              justifyContent="center"
              textAlign="center"
              maxWidth="400px"
              margin={"1rem auto 0 auto"}
            >
              Save hours of research. Find the provider that it is right for you
              by answering a few simple questions.
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
      </Box>
    </Container>
  );
};

export default SaveTime;

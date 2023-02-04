import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GBPhone from "../../../shared/assets/Phones.svg";
import {
  DARK_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
  WHITE_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const TransparentPlataform = () => {
  return (
    <Box component="section" sx={{ margin: "4rem" }}>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={GBPhone}
                alt="about_hand"
                className="landing-herobanner__image"
              />
            </Box>
          </Grid>
          <Grid item md={8}>
            <Typography
              variant="h3"
              textAlign="center"
              color={LIGHT_GREEN_COLOR}
            >
              {" "}
              A transparent platform.
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color={DARK_GREEN_COLOR}
              maxWidth="360px"
              margin={".5rem auto 0 auto"}
            >
              We show the best platform, without hidden advertising.
            </Typography>
            <Typography
              variant="body1"
              component="span"
              display="flex"
              justifyContent="center"
              textAlign="center"
              maxWidth="360px"
              margin={"1rem auto 0 auto"}
            >
              At Pear we choose the best platform based on objective parameters,
              which can be measured and evaluated, each platform on our list of
              providers is exhaustively evaluated by our team.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransparentPlataform;

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  LIGHT_GREEN_COLOR,
  MEDIUM_GREEN_COLOR,
} from "../../../shared/config/Colors";

const Unleash = () => {
  return (
    <Container>
      <Box component="section" sx={{ margin: "2rem 0 10rem 0", textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" color={MEDIUM_GREEN_COLOR}>
          Unleash The Full Power Of Data
        </Typography>

        <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="880px" margin={"2rem auto 3rem auto"}>
          Lorem ipsum dolor sit amet consectetur. Gravida facilisis sollicitudin risus eu 
          consectetur nibh eu eu. Tellus vitae aliquet sem etiam. Bibendum ut faucibus 
          dignissim ultrices nunc. Netus senectus pulvinar facilisis 
          non eu risus odio sit.
        </Typography>

        <Box>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={4}>
              <Typography variant='h3' fontWeight="bold" color={LIGHT_GREEN_COLOR}>400+</Typography>
              <Typography fontWeight="bold" color={MEDIUM_GREEN_COLOR}>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h3' fontWeight="bold" color={LIGHT_GREEN_COLOR}>600%</Typography>
              <Typography fontWeight="bold" color={MEDIUM_GREEN_COLOR}>Projects completed</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h3' fontWeight="bold" color={LIGHT_GREEN_COLOR}>10K</Typography>
              <Typography fontWeight="bold" color={MEDIUM_GREEN_COLOR}>Projects completed</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Unleash;

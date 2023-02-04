import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";

const WhatIsPear = () => {
  return (
    <Box
      sx={{
        margin: "240px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "120px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "45px",
              }}
            >
              <Typography>What is pear?</Typography>
              <Typography>Lorem ipsum dolor sit amet, consectetur</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur. Elit facilisi sed
                lobortis suspendisse dignissim. Posuere ultrices fringilla
                sapien ac mattis enim sed. Vestibulum bibendum praesent tellus
                est tellus sem. Id non lectus ac sit. Vitae nulla in{" "}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              image
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              image
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: "30px",
                  background: DARK_GREEN_COLOR,
                  color: "#fff",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "45px",
                    textAlign: "center",
                  }}
                >
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id
                    enim ut. Duis ipsum laoreet suspendisse scelerisque in risus
                    habitant. Pellentesque tincidunt
                  </Typography>
                  <Box>
                    <TextField placeholder="example@gmail.com" />
                    <GreenButton>Get Started</GreenButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatIsPear;

import React from "react";
import { Box, Grid, Typography, Container, TextField } from "@mui/material";
import SVGPhone from "../../../shared/assets/Home.svg";
import {
  WhiteButton,
  GreenButton,
} from "../../../shared/components/buttons/CustomButtons";
import {
  DARK_GREEN_COLOR,
  GREY_BG_COLOR,
  WHITE_BG_COLOR,
} from "../../../shared/config/Colors";
import { NavLink } from "react-router-dom";

const Subscribe = () => {
  return (
    <Container>
      <Box
        component="section"
        sx={{
          margin: "4rem 0 4rem 0",
          padding: "25px",
          background: DARK_GREEN_COLOR,
          borderRadius: "30px",
        }}
      >
        <Grid item md={8}>
          <Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Typography
                color={WHITE_BG_COLOR}
                sx={{ margin: ".5rem 0 1.5rem 0", maxWidth: "550px" }}
              >
                Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id
                enim ut. Duis ipsum laoreet suspendisse scelerisque in risus
                habitant. Pellentesque tincidunt
              </Typography>
              <TextField
                placeholder="example@mail.com"
                margin="dense"
                size="small"
                sx={{
                  "& input": {
                    textAlign: "center",
                  },
                  "& .MuiInputBase-root.MuiOutlinedInput-root": {
                    background: "#F4F4F4",
                    borderRadius: "4px",
                    color: DARK_GREEN_COLOR,
                    borderColor: "#FAFAFA !important",
                    "&::placeholder": {
                      color: DARK_GREEN_COLOR,
                      fontWeight: "bold",
                      textAlign: "center",
                    },
                  },
                }}
              />
              <GreenButton component={NavLink} to="/get-started">
                Get Started
              </GreenButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Subscribe;

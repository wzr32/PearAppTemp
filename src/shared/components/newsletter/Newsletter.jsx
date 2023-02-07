import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { GreenButton } from "../buttons/CustomButtons";
import {
  GREY_BG_COLOR,
  DARK_GREEN_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../config/Colors";
import { NavLink } from "react-router-dom";

const Newsletter = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          backgroundColor: GREY_BG_COLOR,
          borderRadius: {
            xs: "20px",
            md: "50px",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: DARK_GREEN_COLOR }}
        >
          Sign Up for our newlester
        </Typography>
        <Typography color={DARK_GREEN_COLOR}>
          Be the first to know about relases and industry things
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <TextField
            placeholder="example@mail.com"
            size="small"
            sx={{
              "& input": {
                textAlign: "center",
              },
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                background: "#FFF",
                borderRadius: "4px",
                color: DARK_GREEN_COLOR,
                borderColor: "#FFF !important",
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
        <Typography>
          we care about your data and{" "}
          <Box component="span" sx={{ color: LIGHT_GREEN_COLOR }}>
            privacy politics
          </Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default Newsletter;

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
          padding: "8px",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: DARK_GREEN_COLOR }}
        >
          Sign Up for our newlester
        </Typography>
        <Typography>
          Be the first to know about relases and industry things
        </Typography>
        <Box
          sx={{
            display: "inherit",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            margin="dense"
            size="small"
            placeholder="example@gmail.com"
            sx={{
              display: {
                xs: "block",
                md: "inline-block",
              },
              width: {
                xs: "100%",
                md: "auto",
              },
            }}
            fullWidth={theme.breakpoints.down("md")}
          />
          <GreenButton size="medium" variant="contained">
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

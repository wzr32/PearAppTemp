import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { NavLink } from "react-router-dom";

const CardCarousel = () => {
  return (
    <Card sx={{ margin: { xs: "0", md: "0 1em" }, borderRadius: "20px" }}>
      <CardContent>
        <Box
          sx={{
            borderRadius: "20px",
            width: "100%",
            height: "255px",
            background: "#e6e6e6",
          }}
        />
        <Typography textAlign="center">
          abcsd apartment near mumbia, india copper black negative florister
          wuatefak
        </Typography>
        <GreenButton fullWidth component={NavLink} to="/get-started">
          Get Started
        </GreenButton>
      </CardContent>
    </Card>
  );
};

export default CardCarousel;

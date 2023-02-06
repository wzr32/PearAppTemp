import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from "../../../shared/config/Colors";
import { NavLink } from "react-router-dom";

const SeeAllProviders = () => {
  return (
    <Box
      sx={{
        margin: "4rem auto 2rem auto",
        padding: "45px",
        background: GREY_BG_COLOR,
        borderRadius: "30px",
        maxWidth: "1200px", 
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            
          }}
        >
          <Typography>Do you want to see all Providers?</Typography>
          <Typography>Lorem ipsum lorem ipsum lorem ipsum</Typography>
          <GreenButton>
            <NavLink
              to="/brokers"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              All Providers
            </NavLink>
          </GreenButton>
          <Typography></Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SeeAllProviders;

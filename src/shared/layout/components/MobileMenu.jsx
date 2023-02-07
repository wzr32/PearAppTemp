import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Drawer, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { GreenButton } from "../../components/buttons/CustomButtons";

const MobileMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
          padding: "4em 2em",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/">Resources</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/faqs">Faqs</NavLink>
        <GreenButton
          color="inherit"
          variant="contained"
          component={NavLink}
          to="/get-started"
        >
          Get Started
        </GreenButton>
        <IconButton
          sx={{ flexGrow: 1, position: "absolute", right: ".4em", top: ".4em" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;

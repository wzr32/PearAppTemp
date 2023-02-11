import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { GreenButton } from "../../components/buttons/CustomButtons";
import { DARK_GREEN_COLOR } from "../../config/Colors";

const MobileMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "4em 2em",
          position: "relative",
          overflowY: "auto",
        }}
      >
        <NavLink
          style={{ textDecoration: "none", color: DARK_GREEN_COLOR }}
          to="/"
        >
          <Typography textAlign="left" fontWeight="bold">
            Home
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: DARK_GREEN_COLOR }}
          to="/about-us"
        >
          <Typography textAlign="left" fontWeight="bold">
            About
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: DARK_GREEN_COLOR }}
          to="/faqs"
        >
          <Typography textAlign="left" fontWeight="bold">
            FAQs
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: DARK_GREEN_COLOR }}
          to="/terms-and-conditions"
        >
          <Typography textAlign="left" fontWeight="bold">
            Terms
          </Typography>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: DARK_GREEN_COLOR }}
          to="/privacy-politics"
        >
          <Typography textAlign="left" fontWeight="bold">
            Politics
          </Typography>
        </NavLink>
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

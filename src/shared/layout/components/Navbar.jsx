import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { DARK_GREEN_COLOR, GREY_BG_COLOR } from "../../config/Colors";
import { GreenButton } from "../../components/buttons/CustomButtons";
import SVGLogo from "../../../shared/assets/logo.svg";
import MobileMenu from "./MobileMenu";

const linkStyles = {
  textDecoration: "none",
  color: DARK_GREEN_COLOR,
};

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  const handleOpenMobile = () => setShowMobile(true);

  const handleCloseMobile = () => setShowMobile(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ background: GREY_BG_COLOR, boxShadow: "none" }}
        >
          <Container>
            <Toolbar
              sx={{
                background: GREY_BG_COLOR,
                color: DARK_GREEN_COLOR,
                fontWeight: "bold",
              }}
            >
              <Box sx={{ mr: "50px" }}>
                <img src={SVGLogo} alt="pearApp" />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <NavLink to="/" style={linkStyles}>
                  Home
                </NavLink>
                <NavLink to="/" style={linkStyles}>
                  Products
                </NavLink>
                <NavLink to="/" style={linkStyles}>
                  Resources
                </NavLink>
                <NavLink to="/brokers" style={linkStyles}>
                  Providers
                </NavLink>
                <NavLink to="/faqs" style={linkStyles}>
                  Faqs
                </NavLink>
                <GreenButton
                  component={NavLink}
                  to="/get-started"
                  color="inherit"
                  variant="contained"
                >
                  Get Started
                </GreenButton>
              </Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{
                  display: {
                    md: "none",
                  },
                  flexGrow: 1,
                  justifyContent: "end",
                }}
                onClick={handleOpenMobile}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <MobileMenu open={showMobile} onClose={handleCloseMobile} />
    </>
  );
};

export default Navbar;

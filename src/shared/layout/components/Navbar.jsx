import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { DARK_GREEN_COLOR, GREY_BG_COLOR } from "../../config/Colors";
import { GreenButton } from "../../components/buttons/CustomButtons";
import SVGLogo from "../../../shared/assets/Logo.svg";
import MobileMenu from "./MobileMenu";

const linkStyles = {
  textDecoration: "none",
  color: DARK_GREEN_COLOR,
};

const Navbar = () => {
  const navigate = useNavigate();

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
              <Box
                sx={{ mr: "50px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
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
                  About
                </NavLink>
                <NavLink to="/faqs" style={linkStyles}>
                  FAQs
                </NavLink>
                <NavLink to="/terms-and-conditions" style={linkStyles}>
                  Terms
                </NavLink>
                <NavLink to="/privacy-politics" style={linkStyles}>
                  Politics
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
              <Box
                sx={{
                  display: {
                    md: "none",
                  },
                  flexGrow: 1,
                  justifyContent: "end",
                }}
              >
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleOpenMobile}
                  sx={{
                    marginLeft: "auto",
                    display: "block",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <MobileMenu open={showMobile} onClose={handleCloseMobile} />
    </>
  );
};

export default Navbar;

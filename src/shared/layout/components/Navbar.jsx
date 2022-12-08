import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { DARK_GREEN_COLOR } from '../../config/Colors';
import { GreenButton } from '../../components/buttons/CustomButtons';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: DARK_GREEN_COLOR }}>
        <Container>
          <Toolbar sx={{ background: DARK_GREEN_COLOR }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Products</Button>
              <Button color="inherit">Resources</Button>
              <Button color="inherit">Pricing</Button>
              <Button color="inherit">Faqs</Button>
              <GreenButton color="inherit" variant='contained'>Get Started</GreenButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

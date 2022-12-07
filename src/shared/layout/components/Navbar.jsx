import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Faqs</Button>
            <Button color="inherit" variant='contained'>Get Started</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

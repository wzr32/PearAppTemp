import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { Instagram as InstagramIcon } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { MEDIUM_GREEN_COLOR } from '../../config/Colors';
import SVGLogo from '../../../shared/assets/logo_white.svg';

const Footer = () => {
  return (
    <Box component="section">
      <Box
        component="div"
        sx={{
          background: MEDIUM_GREEN_COLOR,
          color: "#fff",
          padding: {
            xs: "20px",
            md: "71px 50px"
          },
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src={SVGLogo} alt="PearApp" width={100} />
              <Typography>Our vision is to make all people the best place to live for them.</Typography>
            </Grid>
            <Grid container spacing={3} item xs={12} md={6}>
              <Grid item xs={12} md={3}>
                <Typography component="p">About</Typography>
                <Typography component="p">About Us</Typography>
                <Typography component="p">Features</Typography>
                <Typography component="p">News & Blog</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography component="p">Company</Typography>
                <Typography component="p">How We Work</Typography>
                <Typography component="p">Capital</Typography>
                <Typography component="p">Security</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography component="p">Suport</Typography>
                <Typography component="p">FAQs</Typography>
                <Typography component="p">Support Center</Typography>
                <Typography component="p">Contact Us</Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography component="p">Follow Us</Typography>
                <Box>
                  <InstagramIcon />
                  <InstagramIcon />
                  <InstagramIcon />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ marginTop: "40px" }}>
            <Grid item xs={12} md={6}>
              &copy; PearApp 2022 All Rights Reserved
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  gap: '1em',
                  justifyContent: 'end'
                }}
              >
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "footerLinksActive" : "footerLinksNonActive"
                  }
                >Terms & agreement</NavLink>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? "footerLinksActive" : "footerLinksNonActive"
                  }
                >Privacy Policy</NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

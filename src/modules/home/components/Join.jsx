import React from 'react';
import { Box, Typography, Container, Grid,} from '@mui/material';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from '../../../shared/config/Colors';
import SVGLogo from '../../../shared/assets/Logo.svg';

const Join = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: "45px 0",
        background: GREY_BG_COLOR,
        marginBottom: "180px",
        borderRadius: "40px"
      }}
    >
        <Box>
            <Grid container justifyContent="space-around">
                <Grid item xs={12} md={4}>
                    <Typography variant='h4'>Join over 400+ startups growing with Pear</Typography>
                    <Typography sx={{ margin: ".5rem 0 1rem" }}>Start now with us!</Typography>
                    <Box sx={{ display: "flex", gap: "30px", flexWrap: "wrap", margin: "28px 0" }}>
                        <WhiteButton>Get started</WhiteButton>
                        <GreenButton>About us</GreenButton>
                    </Box>
                </Grid>
                
                <Grid xs={12} md={2}>
                    <img src={SVGLogo} alt="logo" />
                    <img src={SVGLogo} alt="logo" />
                    <img src={SVGLogo} alt="logo" />
                    <img src={SVGLogo} alt="logo" />
                    <img src={SVGLogo} alt="logo" />
                    <img src={SVGLogo} alt="logo" />
                </Grid>
            </Grid>
        </Box>
        
    </Box>
  )
}

export default Join;

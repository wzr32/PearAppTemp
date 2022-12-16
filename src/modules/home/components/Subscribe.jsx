import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import SVGPhone from '../../../shared/assets/Home.svg';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR, GREY_BG_COLOR, WHITE_BG_COLOR } from '../../../shared/config/Colors';

const Subscribe = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
        <Grid container spacing={4} alignItems="center">
            <Grid item md={8}>
                <Typography variant="h4" textAlign="center" marginBottom=".5rem">Subscribe to Newsletter</Typography>
                <Typography component="span" display="flex" justifyContent="center" textAlign="center">
                Our proprietary algorithm will present you the results that best match your 
                criteria, not the ones that will pay us more commission.
                </Typography>
                <Box sx={{
                    padding: "20px",
                    background: DARK_GREEN_COLOR,
                    borderRadius: "40px",
                    marginTop: "1rem",
                    textAlign: "center",
                }}>
        
                    <Typography color={WHITE_BG_COLOR} sx={{ margin: ".5rem 0" }} >Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id enim ut. Duis ipsum 
                    laoreet suspendisse scelerisque in risus habitant. Pellentesque tincidunt</Typography>
                    <Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            
                            <WhiteButton>Example@mail.com</WhiteButton>
                            <GreenButton>Get Started</GreenButton>
                            
                        </Box>
                    </Grid>
                </Box>
            </Grid>
            <Grid item md={4}>
                <img src={SVGPhone} alt="about_hand" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default Subscribe
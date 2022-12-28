import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import SVGPhone from '../../../shared/assets/Subscribe.svg';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR, GREY_BG_COLOR, WHITE_BG_COLOR } from '../../../shared/config/Colors';

const Subscribe = () => {
  return (
    <Box component="section" sx={{ margin:"4rem auto 6rem auto", display:"flex" , justifyContent:"center", alignItems: "center", justifyItems:"center"}}>
        <Grid container alignItems={"center"} justifyContent={"center"}>

            <Grid item md={4}>
                <img src={SVGPhone} alt="about_hand" />
            </Grid>

            <Grid item md={8}>
                <Box sx={{
                    padding: "20px",
                    background: DARK_GREEN_COLOR,
                    borderRadius: "20px",
                    margin: "1.5rem auto 0 auto",
                    textAlign: "center",
                    width: "500px",
                }}>
        
                    <Typography color={WHITE_BG_COLOR} sx={{ margin: ".5rem 0 1.5rem 0" }} >
                        Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id enim ut. Duis ipsum laoreet suspendisse scelerisque in risus habitant. Pellentesque tincidunt
                    </Typography>

                    <Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                            
                            <WhiteButton>Example@mail.com</WhiteButton>
                            <GreenButton>Get Started</GreenButton>
                            
                        </Box>
                    </Grid>
                </Box>
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default Subscribe
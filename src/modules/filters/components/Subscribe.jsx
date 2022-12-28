import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import SVGPhone from '../../../shared/assets/Home.svg';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR, GREY_BG_COLOR, WHITE_BG_COLOR } from '../../../shared/config/Colors';

const Subscribe = () => {
  return (
        
        <Box sx={{
            padding: "30px",
            background: DARK_GREEN_COLOR,
            borderRadius: "30px",
            margin: "0 auto 4rem auto",
            textAlign: "center",
            width: "1200px",
        }}>

            <Grid>
            
                <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                <Typography color={WHITE_BG_COLOR} width={"580px"} >Lorem ipsum dolor sit amet consectetur. Ac nec erat augue id enim ut. Duis ipsum 
                laoreet suspendisse scelerisque in risus habitant. Pellentesque tincidunt</Typography>
                    <WhiteButton>Example@mail.com</WhiteButton>
                    <GreenButton>Get Started</GreenButton>
                </Box>
            </Grid>
        </Box>
           
  )
}

export default Subscribe
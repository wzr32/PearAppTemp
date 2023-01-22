import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from '../../../shared/config/Colors';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';


const Hiring = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        padding: "45px 0",
        background: GREY_BG_COLOR,
        marginBottom: "180px",
        maxWidth: "1100px",
        margin: "8rem auto 8rem auto"
      }}
    >
        <Typography variant="h4" color={MEDIUM_GREEN_COLOR} textAlign="center" margin="1rem 0">We’re Hiring!</Typography>
        <Typography variant="h6" color={MEDIUM_GREEN_COLOR}>Meat Our Team</Typography>
        <Box sx={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
          <WhiteButton>About us</WhiteButton>
          <GreenButton>Open Positions</GreenButton>
        </Box>
        <Typography>we care about your data and privacy politics</Typography>
    </Box>
  )
}

export default Hiring
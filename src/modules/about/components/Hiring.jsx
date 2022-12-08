import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhiteButton, GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { GREY_BG_COLOR } from '../../../shared/config/Colors';

const Hiring = () => {
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        padding: "45px 0",
        background: GREY_BG_COLOR,
        marginBottom: "180px"
      }}
    >
        <Typography sx={{ marginBottom: "28px" }}>We're Hiring!</Typography>
        <Typography>Meat Our Team</Typography>
        <Box sx={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
          <WhiteButton>About us</WhiteButton>
          <GreenButton>Open Positions</GreenButton>
        </Box>
        <Typography>we care about your data and privacy politics</Typography>
    </Box>
  )
}

export default Hiring
import React from 'react';
import { Box,Card, CardContent, Typography } from '@mui/material';
import {  } from '@mui/icons-material';
import { GreenButton, WhiteButton } from '../../../../../shared/components/buttons/CustomButtons';

const TraderCardDetail = () => {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex"
          }}
        >
          <Box sx={{ borderRadius: "40px" }}>
            img
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ marginBottom: "16px" }}>Presencia</Typography>
            <Typography sx={{ marginBottom: "6px" }}>Presencia</Typography>
            <Typography>4.5</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "25px 0"
          }}
        >
          <Typography>Min Deposit</Typography>
          <Typography>100$</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <GreenButton>Choose the provider</GreenButton>
          <WhiteButton>Add To Compare</WhiteButton>
        </Box>
      </CardContent>
    </Card>    
  );
};

export default TraderCardDetail;

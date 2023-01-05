import React from 'react';
import { Box, TextField, Typography } from '@mui/material'
import { GreenButton } from '../buttons/CustomButtons';
import { GREY_BG_COLOR, DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../config/Colors';

const Newsletter = () => {
  return (
    <Box
      sx={{
        backgroundColor: GREY_BG_COLOR,
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        padding: '8px' 
      }}>
      <Typography variant='h5' fontWeight="bold" sx={{ color: DARK_GREEN_COLOR }}>Sign Up for our newlester</Typography>
      <Typography>Be the first to know about relases and industry things</Typography>
      <Box sx={{ display: 'inherit', gap: '14px', justifyContent: 'center' }}>
        <TextField margin="dense" size="small" />
        <GreenButton size="medium" variant="contained">Get Started</GreenButton>
      </Box>
      <Typography>
      we care about your data and <Box component="span" sx={{ color: LIGHT_GREEN_COLOR }}>privacy politics</Box>
      </Typography>
    </Box>
  )
}

export default Newsletter
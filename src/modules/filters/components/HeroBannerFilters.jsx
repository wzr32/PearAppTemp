import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SVGPhone from '../../../shared/assets/Phone.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBannerFilters = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh", marginTop:"4rem"}}>
      <Grid container spacing={4} alignItems="center">
        <Grid item md={8}>
          <Typography variant="h3" textAlign="center" color={LIGHT_GREEN_COLOR}>Welcome to Pear</Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} maxWidth="560px" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis in quam lectus non euismod lacus tortor, viverra pharetra. Morbi morbi egestas morbi pharetra tempor, eget pellentesque posuere. Nulla faucibus faucibus mauris aliquet feugiat. Pellentesque adipiscing nulla ipsum 
          </Typography>
        </Grid>
        
        <Grid item md={4}>
          <img src={SVGPhone} alt="phone" />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroBannerFilters
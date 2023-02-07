import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import SVGPhone from '../../../shared/assets/Phone.svg';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HeroBannerProviders = () => {
  return (
    <Box component="section" sx={{ margin: "4rem 0 6rem 0", display: "flex", justifyContent: "center", alignItems: "center", justifyItems: "center" }}>
      <Container>
        <Grid item md={8}>
          <Typography variant="h3" fontWeight="bold" textAlign="center" color={LIGHT_GREEN_COLOR}>You Are Get Started...</Typography>
          <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} margin={"1rem auto 0 auto"}>Lorem ipsum dolor sit amet, consectetur </Typography>
          <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"2rem auto 0 auto"} maxWidth="480px">
            Lorem ipsum dolor sit amet consectetur. Elit facilisi sed lobortis suspendisse dignissim. Posuere ultrices fringilla sapien ac mattis enim sed. Vestibulum bibendum praesent tellus est tellus sem. Id non lectus ac sit. Vitae nulla in
          </Typography>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroBannerProviders
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';
import GBPhone from '../../../shared/assets/Landing_Phone.svg';

const GoodbyeConflicts = () => {
  return (
    <Container>
      <Box component="section" sx={{ margin: "0rem 0 6rem 0" }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={4}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <img src={GBPhone} alt="about_hand" className='landing-herobanner__image' />
            </Box>
          </Grid>
          <Grid item md={8}>
            <Typography variant="h3" fontWeight="bold" textAlign="center" color={LIGHT_GREEN_COLOR} maxWidth="480px" margin={"0 auto .5rem auto"}>Goodbye Conflicts of Interest</Typography>
            <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR}> Better Results </Typography>
            <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" maxWidth="420px" margin={"1rem auto 0 auto"}>
              Our proprietary algorithm will present you the results
              that best match your criteria, not the ones that will
              pay us more commission.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default GoodbyeConflicts;

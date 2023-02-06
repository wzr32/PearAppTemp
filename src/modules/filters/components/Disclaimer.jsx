import React from 'react';
import { Box, Typography, Container, Grid, } from '@mui/material';
import { MEDIUM_GREEN_COLOR, GREY_BG_COLOR } from '../../../shared/config/Colors';

const Disclaimer = () => {
  return (
    <Box
      component="section"
      sx={{
        margin: "2rem auto 0 auto",
        padding: "45px",
        background: GREY_BG_COLOR,
        borderRadius: "30px",
        maxWidth: "1200px"
      }}
    >
      <Container>
        <Box>
          <Grid item md={8}>
            <Typography variant='h5' color={MEDIUM_GREEN_COLOR} textAlign="center">Disclaimer: Pear politics terms and conditions</Typography>
            <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} maxWidth="800px">Lorem ipsum dolor sit amet consectetur. Nam leo urna enim velit at sit dui.
              Cras odio aliquam cursus porttitor nulla libero. Mattis magna maecenas sem malesuada purus pharetra.
              Risus ridiculus sapien bibendum erat adipiscing fermentum et viverra.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Disclaimer
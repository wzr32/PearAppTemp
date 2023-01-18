import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { MEDIUM_GREEN_COLOR, GREY_BG_COLOR } from '../../../shared/config/Colors';

const AllProviders = () => {
  return (
    <Box
      component="section"
      sx={{
        margin: "4rem 0 2rem 0",
        padding: "45px",
        background: GREY_BG_COLOR,
        borderRadius: "30px"
      }}
    >
      <Container>
        <Box>
          <Grid item md={8}>
            <Typography variant='h5' color={MEDIUM_GREEN_COLOR} textAlign="center">Do you want to seeall Providers?</Typography>
            <Typography variant="body1" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} maxWidth="800px">
              Lorem ipsum dolor sit amet consectetur. Nam leo urna enim velit at sit dui.
            </Typography>
          </Grid>
          <Grid>
            <Box sx={{ display: "flex", justifyContent: "center", margin: "2rem 0 1rem 0" }}>
              <GreenButton>Get Started</GreenButton>
            </Box>
            <Typography variant="body2" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} maxWidth="800px">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default AllProviders
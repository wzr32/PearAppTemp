import React from 'react';
import NotFound from '../../shared/assets/Notfound.svg';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GreenButton } from "../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from "../../shared/config/Colors";

const NotFoundView = () => {
  return (
    <Container>
      <Box component="section" sx={{ margin: "6rem 0 6rem 0" }}>

        <Grid container spacing={2} alignItems="center">
          <Grid item sx={12} md={4}>
          <Box sx={{ width: "100%", height: "100%" }}>
                <img
                  src={NotFound}
                  alt="NotFound"
                  className="landing-herobanner__image"
                />
              </Box>
          </Grid>

          <Grid item md={8}>
            <Typography variant="h3" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR} maxWidth="480px" margin={"0 auto .5rem auto"}>Page not Found</Typography>
            <Typography variant="body1" maxWidth="520px" component="span" display="flex" justifyContent="center" textAlign="center" margin={"1rem auto 0 auto"} >
            This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. Maybe what you are looking for can be found at Pear.com Pear links are case sensitive.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "28px 0" }}>
              <GreenButton>Go Back</GreenButton>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
};

export default NotFoundView;

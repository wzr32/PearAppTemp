import React from 'react';
import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR, GREY_BG_COLOR, WHITE_BG_COLOR } from '../../../shared/config/Colors';
import SVGPhones from '../../../shared/assets/Phones.svg';

const Subscribe = () => {
  return (
    <Box component="section" sx={{ minHeight: "100vh" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={7}>
            <Typography color={DARK_GREEN_COLOR} variant="h4" textAlign="center" marginBottom=".5rem">Subscribe to Newsletter</Typography>
            <Typography variant="h5" display="flex" justifyContent="center" textAlign="center">
              Lorem ipsum dolor sit amet
            </Typography>
            <Box sx={{
              padding: "20px",
              background: DARK_GREEN_COLOR,
              borderRadius: "30px",
              margin: "1.5rem auto 0 auto",
              textAlign: "center",
              maxWidth: "500px",
            }}>

              <Typography color={WHITE_BG_COLOR} sx={{ margin: ".5rem 0" }} >Our proprietary algorithm will present you the results that best match your
                criteria, not the ones that will pay us more commission.</Typography>
              <Grid>
                <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>

                  <TextField
                    placeholder="example@mail.com"
                    size="small"
                    sx={{
                      "& input": {
                        textAlign: "center",
                      },
                      "& .MuiInputBase-root.MuiOutlinedInput-root": {
                        background: "#F4F4F4",
                        borderRadius: "4px",
                        color: DARK_GREEN_COLOR,
                        borderColor: "#FAFAFA !important",
                        "&::placeholder": {
                          color: DARK_GREEN_COLOR,
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      }
                    }}
                  />
                  <GreenButton>Get Started</GreenButton>

                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={4}>
            <img src={SVGPhones} alt="about_hand" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Subscribe;

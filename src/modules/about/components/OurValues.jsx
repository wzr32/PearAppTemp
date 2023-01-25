import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { DARK_GREEN_COLOR, GREY_BG_COLOR, MEDIUM_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors'
import ValuesCard from '../items/ValuesCard'

const OurValues = () => {
  return (
    <Box component="section">
      <Container>

        <Box
          component="div"
          sx={{
            padding: "50px 0",
            textAlign: "center",
            background: GREY_BG_COLOR,
            marginTop: "8rem",
          }}
        >
          <Typography color={LIGHT_GREEN_COLOR} variant="body1" >Our Values</Typography>
          <Typography color={DARK_GREEN_COLOR} variant="h3">How We Work At Untitled</Typography>
          <Typography variant="h6" color={DARK_GREEN_COLOR}>Our Shared Guides for Lorem ipsum dolor sit amet</Typography>
        </Box>
        <Box
          component="div"
          sx={{
            margin: "180px 0 246px 0"
          }}
        >
          <Grid container spacing={3}>
            {Array(9).fill(
              <Grid item xs={12} md={4}>
                <ValuesCard
                  icon="icon" 
                  title="how many people are using pear?" 
                  description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default OurValues;

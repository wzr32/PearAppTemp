import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ValuesCard from '../items/ValuesCard'

const OurValues = () => {
  return (
    <section>
      <Box
        component="div"
        sx={{
          padding: "50px 0",
          textAlign: "center"
        }}
      >
        <Typography>Our Values</Typography>
        <Typography>How We Work At Untitled</Typography>
        <Typography>Our Shared Guides for Lorem ipsum dolor sit amet</Typography>
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
    </section>
  )
}

export default OurValues
import { Grid, Typography } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <section>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <Typography variant="h3">About Our Company</Typography>
          <Typography variant="body1" component="span">
            Everything you need to know about the product and building you're looking for?
          </Typography>
          <Typography variant="body1" component="span">
            Please contact to our team
          </Typography>
        </Grid>
        <Grid item md={4}>
          hand image
        </Grid>
      </Grid>
    </section>
  )
}

export default HeroBanner
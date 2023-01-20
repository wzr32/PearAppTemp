import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { GreenButton } from '../../shared/components/buttons/CustomButtons'

const FiltersView6 = () => {
  return (
    <Box>
      <Typography>trader name</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          image
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>About Presencia</Typography>
          <Typography>Setting your trading objective is one of the most important steps in developing a trade plan, yet is the one step that most new traders neglect. Purposefully thinking about your objective helps you clarify what you plan to achieve, how you plan to do it, and by when. Here’s how to get started.First, decide what you want to accomplish in your trading by completing this sentence:“I want to be a successful trader because…”Second, honestly assess your strengths and weaknesses, both as a person and as a trader. Here’s some questions to consider in getting to know yourself as a trader.</Typography>
        </Grid>
      </Grid>
      <Box>video</Box>
      <Box>
        <GreenButton>Get Started</GreenButton>
      </Box>
    </Box>
  )
}

export default FiltersView6;
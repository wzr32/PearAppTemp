import { Box, Typography } from '@mui/material'
import React from 'react'
import ValuesCard from '../items/ValuesCard'

const OurValues = () => {
  return (
    <section>
      <Box>
        <Typography>Our Values</Typography>
        <Typography>How We Work At Untitled</Typography>
        <Typography>Our Shared Guides for Lorem ipsum dolor sit amet</Typography>
      </Box>
      <Box>
        {Array(9).fill(
          <ValuesCard
            icon="icon" 
            title="how many people are using pear?" 
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
          />
        )}
      </Box>
    </section>
  )
}

export default OurValues
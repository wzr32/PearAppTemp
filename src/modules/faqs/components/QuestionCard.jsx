import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { DARK_GREEN_COLOR, GREY_BG_COLOR } from '../../../shared/config/Colors'

const QuestionCard = () => {
  return (
    <Container>
      <Box sx={{
        background: GREY_BG_COLOR,
        color: DARK_GREEN_COLOR,
        padding: "40px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}>
        <Typography>icon</Typography>
        <Typography>how many peoples are using pear?"</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur. Nam leo urna enim velit at sit dui. Cras odio aliquam cursus porttitor nulla libero. Mattis magna maecenas sem malesuada purus pharetra. Risus ridiculus sapien bibendum erat adipiscing fermentum et viverra.</Typography>
      </Box>
    </Container>
  )
}

export default QuestionCard;

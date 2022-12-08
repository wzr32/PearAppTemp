import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ValuesCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px"
        }}
      >
        {icon}
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default ValuesCard
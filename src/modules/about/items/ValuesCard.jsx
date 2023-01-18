import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { GREY_BG_COLOR } from '../../../shared/config/Colors';

const ValuesCard = ({ icon, title, description }) => {
  return (
    <Card sx={{ background: GREY_BG_COLOR }}>
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
  );
};

export default ValuesCard;

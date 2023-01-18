import React from 'react';
import { 
  Avatar, 
  Box, 
  Card, 
  CardContent, 
  Typography 
} from '@mui/material';
import { GREY_BG_COLOR } from '../../../shared/config/Colors';

const TeamCard = ({ position, name, description }) => {
  return (
    <Card sx={{ background: GREY_BG_COLOR }}>
      <CardContent
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}>
        <Avatar
          sx={{
            height: "100px",
            width: "100px"
          }}
        >A</Avatar>
        <Typography>{name}</Typography>
        <Typography>{position}</Typography>
        <Typography>{description}</Typography>
        <Box>
          icons
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

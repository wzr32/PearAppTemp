import React from 'react';
import { 
  Avatar, 
  Box, 
  Card, 
  CardContent, 
  Typography 
} from '@mui/material';

const TeamCard = ({ position, name, description }) => {
  return (
    <Card>
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

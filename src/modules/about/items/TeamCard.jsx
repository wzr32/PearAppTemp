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
      <CardContent>
        <Avatar>A</Avatar>
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

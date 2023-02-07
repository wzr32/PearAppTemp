import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { DARK_GREEN_COLOR, MEDIUM_GREEN_COLOR, WHITE_BG_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const GetStarted = () => {
  return (
    <Container>
      <Box
        sx={{
          margin: "100px auto 120px",
          padding: "50px 0",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "45px",
          maxWidth: "628px"
        }}
      >
        <Typography variant="h3" fontWeight="bold" textAlign="center" color={LIGHT_GREEN_COLOR}>You are get started... </Typography>
        <Typography variant="h5" fontWeight="bold" textAlign="center" color={DARK_GREEN_COLOR}>Lorem ipsum dolor sit amet, consectetur</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur. Elit facilisi sed lobortis suspendisse dignissim. Posuere ultrices fringilla sapien ac mattis enim sed. Vestibulum bibendum praesent tellus est tellus sem. Id non lectus ac sit. Vitae nulla in </Typography>
      </Box>
    </Container>
  );
};

export default GetStarted;

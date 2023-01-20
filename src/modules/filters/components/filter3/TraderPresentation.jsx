import { Box, Container, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

const TraderPresentation = () => {
  const [value, setValue] = useState(4);
  return (
    <Box>
      <Container>
        <Box
          sx={{
            margin: "240px auto 156px",
            display: "flex",
            gap: "80px",
          }}
        >
          <Box>image</Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "80px",
              padding: "65px 0"
            }}
          >
            <Typography>Presencia</Typography>
            <Typography variant="caption">Presencia</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TraderPresentation;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GreenButton } from '../../../../shared/components/buttons/CustomButtons';
import { GREY_BG_COLOR } from '../../../../shared/config/Colors';

const SeeAllProviders = () => {
  return (
    <Box
      sx={{
        background: GREY_BG_COLOR,
        padding: "58px 0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Typography>Do you want to see all Providers?</Typography>
          <Typography>Lorem ipsum lorem ipsum lorem ipsum</Typography>
          <GreenButton>All Providers</GreenButton>
          <Typography></Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SeeAllProviders;

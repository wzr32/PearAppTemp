import React from 'react';
import { Box, Container } from '@mui/material';
import { GreenButton } from '../../shared/components/buttons/CustomButtons';

import TraderPresentation from "../filters/components/filter3/TraderPresentation";
import MainData from './components/filter4/MainData';
import ThisRating from './components/filter4/ThisRating';

const FiltersView4 = () => {
  return (
    <Box component="section" sx={{ marginBottom: "150px" }}>
      <Container>
        <TraderPresentation />

        <MainData />
        
        <ThisRating />

        <GreenButton>Go to Provider</GreenButton>
      </Container>
    </Box>
  )
}

export default FiltersView4
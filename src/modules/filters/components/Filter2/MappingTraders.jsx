import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TraderCardDetail from './elements/TraderCardDetail';

const MappingTraders = () => {
  return (
    <Box
      sx={{
        marginBottom: "240px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {[...new Array(12)].map((_, index) => (
            <Grid key={`mapping-traders_${index + 0}`} item={12} md={6}>
              <TraderCardDetail />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MappingTraders;

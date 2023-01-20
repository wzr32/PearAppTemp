import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GreenButton } from '../../../../shared/components/buttons/CustomButtons';
import { GREY_BG_COLOR } from '../../../../shared/config/Colors';

const MappingOptions = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {[...Array(20)].map((_, index) => (
            <Grid item xs={12}>
              <Box
                key={`trader-data__${index + 0}`}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 15px",
                  borderRadius: "20px",
                  background: GREY_BG_COLOR,
                }}  
              >
                <Typography>Country</Typography>
                <Typography>English, Ukrainian, Germany, Russian</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} sx={{ margin: "120px auto" }}>
          <Grid item xs={12} md={6}>
            <GreenButton>
              Add to Compare
            </GreenButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <GreenButton>
              Go to Provider
            </GreenButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MappingOptions;

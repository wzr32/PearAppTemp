import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const Hiring = () => {
  return (
    <section>
      <Container>
        <Typography>We're Hiring!</Typography>
        <Typography>Meat Our Team</Typography>
        <Box>
          <Button>About us</Button>
          <Button>Open Positions</Button>
        </Box>
        <Typography>we care about your data and privacy politics</Typography>
      </Container>
    </section>
  )
}

export default Hiring
import React from 'react';
import { Box, Checkbox, FormGroup, FormControlLabel, Grid, MenuItem, Select, TextField, Container } from '@mui/material';
import { GreenButton } from '../../../shared/components/buttons/CustomButtons';

const StartForm = () => {
  return (
    <Box
      component="section"
      sx={{
        padding: '2em 0',
      }}
    >
      <Container>

        <Grid container spacing={2}>
          <Grid container spacing={3} item xs={12} md={7}>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                variant="outlined"
                placeholder="First Name"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense"
                variant="outlined"
                placeholder="Last Name"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                variant="outlined"
                placeholder="Email"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Select labelId="label" id="select" value="20" margin="dense" size='small'>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
              <TextField
                margin="dense"
                variant="outlined"
                placeholder="Phone"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                rows={4}
                multiline
                margin="dense"
                variant="outlined"
                placeholder="Type the message..."
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Your agree to our friendly privacy policy"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <GreenButton>Get Started</GreenButton>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            image
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StartForm;

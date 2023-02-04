import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Checkbox, FormGroup, FormControlLabel, Grid, MenuItem, Select, TextField, Container, Button } from '@mui/material';
import { GreenButton } from '../../../shared/components/buttons/CustomButtons';
import { DARK_GREEN_COLOR } from '../../../shared/config/Colors';
import { ContactSchema } from '../home.validatos';
import SVGLanding from '../../../shared/assets/Landing_Form.svg';

const inputStyles = {
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    background: "#F4F4F4",
    borderRadius: "4px",
    color: DARK_GREEN_COLOR,
    borderColor: "#FAFAFA !important",
    "&::placeholder": {
      color: DARK_GREEN_COLOR,
      fontWeight: "bold"
    },
  }
};

const initialFormData = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
};

const StartForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur',
    defaultValues: initialFormData,
    reValidateMode: 'onChange',
    resolver: yupResolver(ContactSchema),
  });

  const handleOnSubmit = handleSubmit((data) => {
    console.log('submit data =>> ', data);
  });

  useEffect(() => {
    console.log('%cerrors', 'background: black; color: white;', errors);
  }, [errors]);

  return (
    <Box
      component="section"
      sx={{
        padding: '2em 0',
      }}
    >
      <Container>
        <form component="form" onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
            <Grid container spacing={3} item xs={12} md={7}>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  placeholder="First Name"
                  size="small"
                  fullWidth
                  sx={inputStyles}
                  inputRef={register("first_name")}
                  error={!!errors.first_name}
                  helperText={errors.first_name && errors.first_name.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  placeholder="Last Name"
                  size="small"
                  fullWidth
                  sx={inputStyles}
                  inputRef={register("last_name")}
                  error={!!errors.last_name}
                  helperText={errors.last_name && errors.last_name.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  variant="outlined"
                  placeholder="Email"
                  size="small"
                  fullWidth
                  sx={inputStyles}
                  inputRef={register("email")}
                  error={!!errors.email}
                  helperText={errors.email && errors.email.message}
                />
              </Grid>

              <Grid item xs={12} container alignItems="center">
                <Grid item xs={12} md={2}>
                  <Select
                    labelId="label"
                    id="select"
                    value="20"
                    margin="dense"
                    size="small"
                    sx={{
                      background: "#fafafa",
                      marginTop: "4px",
                      color: DARK_GREEN_COLOR
                    }}
                  >
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} md={10}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    placeholder="Phone"
                    size="small"
                    fullWidth
                    sx={inputStyles}
                    inputRef={register("phone")}
                    error={!!errors.phone}
                    helperText={errors.phone && errors.phone.message}
                  />
                </Grid>
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
                  sx={inputStyles}
                  inputRef={register("message")}
                  error={!!errors.message}
                  helperText={errors.message && errors.message.message}
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
                <GreenButton
                  type="submit"
                >
                  Get Started
                </GreenButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <img src={SVGLanding} alt="Phones" />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default StartForm;

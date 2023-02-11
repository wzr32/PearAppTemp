import React from "react";
import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";

const CountryResidence = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h5"
          color={DARK_GREEN_COLOR}
          margin={"1.5rem 0"}
          fontWeight="bold"
        >
          Please provide us your country of residence
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label=""
          >
            <MenuItem value={10}>United Kingdom</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
};

export default CountryResidence;

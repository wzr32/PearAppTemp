import React, { useState } from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../../shared/config/Colors';

const HowMuchInvest = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Typography variant="h5" textAlign="center" color={DARK_GREEN_COLOR} margin={"1.5rem 0"}>
        Choose an amount to invest
      </Typography>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          placeholder="How Much Invest"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default HowMuchInvest;

import React, { useState } from "react";
import {
  Container,
  Checkbox,
  Slider,
  Typography,
  styled,
  Box,
  TextField,
} from "@mui/material";
import {
  DARK_GREEN_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";
import { GreyInput } from "../../../shared/components/inputs/CustomTextField";

const CustomSlider = styled(Slider)({
  color: DARK_GREEN_COLOR,
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
    color: LIGHT_GREEN_COLOR,
  },
  "& .MuiSlider-thumb": {
    padding: "0 .2rem",
    height: 28,
    width: 28,
    backgroundColor: LIGHT_GREEN_COLOR,
    borderRadius: 5,
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
});

const HowMuchInvest = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight="bold"
        color={DARK_GREEN_COLOR}
        margin={"1.5rem 0"}
      >
        Choose an amount to invest
      </Typography>
      <CustomSlider
        value={value}
        aria-label="Default"
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10000}
        onChange={handleChange}
        disabled={checked}
      />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", gap: "1em" }}
      >
        <Typography fontWeight="bold">$ 0</Typography>
        <Typography fontWeight="bold">$ 10.000</Typography>
      </Box>
      <TextField
        value={value}
        size="small"
        onChange={handleChange}
        disabled={checked}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1em",
          margin: "1em 0",
          alignItems: "center",
        }}
      >
        <Typography>im not sure</Typography>
        <Checkbox checked={checked} onClick={handleToggle} />
      </Box>
    </Container>
  );
};

export default HowMuchInvest;

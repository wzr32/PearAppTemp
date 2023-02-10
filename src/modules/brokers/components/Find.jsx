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

const Find = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h5"
          color={DARK_GREEN_COLOR}
          margin={"1.5rem 0"}
          fontWeight="bold"
        >
          I would like to find a/an:
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label=""
            sx={{
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                background: "#F4F4F4",
                borderRadius: "4px",
                color: DARK_GREEN_COLOR,
                borderColor: "#F4F4F4 !important",
                "&::placeholder": {
                  color: DARK_GREEN_COLOR,
                  fontWeight: "bold",
                  textAlign: "center",
                },
              },
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
};

export default Find;

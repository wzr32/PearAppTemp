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

const LookingInvest = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h5"
          color={DARK_GREEN_COLOR}
          margin={"1.5rem 0"}
          fontWeight="bold"
        >
          Are you looking to invest:
        </Typography>
        <FormControl fullWidth>
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
};

export default LookingInvest;

import React from "react";
import { Box, Typography } from "@mui/material";
import {
  DARK_GREEN_COLOR,
  GREY_BG_COLOR,
  LIGHT_GREEN_COLOR,
} from "../../../shared/config/Colors";

const CompareCard = ({ item, title, itemIndex, selected }) => {
  return (
    <>
      <Box sx={{ height: "50px", marginTop: "35px" }}>
        <Typography component="span" variant="h5">
          {itemIndex === 0 && title}
        </Typography>
      </Box>
      <Box
        sx={{
          background: selected === item ? LIGHT_GREEN_COLOR : GREY_BG_COLOR,
          color: selected === item ? "#FFF" : DARK_GREEN_COLOR,
          padding: "28px",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <Typography textAlign="center" fontWeight="bold">
          {item}
        </Typography>
      </Box>
    </>
  );
};

export default CompareCard;

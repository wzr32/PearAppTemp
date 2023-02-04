import React from "react";
import { Box, Typography } from "@mui/material";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";

const CompareCardName = ({ name }) => {
  return (
    <Box
      sx={{
        background: DARK_GREEN_COLOR,
        color: "#fff",
        padding: "28px",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <Typography textAlign="center" fontWeight="bold">
        {name}
      </Typography>
    </Box>
  );
};

export default CompareCardName;

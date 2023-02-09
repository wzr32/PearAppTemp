import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { GREY_BG_COLOR } from "../../../shared/config/Colors";
import worldIcon from "../../../shared/assets/world-icon.svg";

const ValuesCard = ({ title, description }) => {
  return (
    <Card sx={{ background: GREY_BG_COLOR }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <Box sx={{ height: "40px", width: "40px" }}>
          <img src={worldIcon} alt="" />
        </Box>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ValuesCard;

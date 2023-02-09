import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { GREY_BG_COLOR } from "../../../shared/config/Colors";
import bitcoinAvatar from "../../../shared/assets/bitcoin-logo.svg";

const TeamCard = ({ position, name, description }) => {
  return (
    <Card sx={{ background: GREY_BG_COLOR }}>
      <CardContent
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Avatar
          src={bitcoinAvatar}
          sx={{
            height: "100px",
            width: "100px",
          }}
        />
        <Typography fontWeight="bold" variant="h6">
          {name}
        </Typography>
        <Typography>{position}</Typography>
        <Typography fontWeight="bold" variant="caption">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

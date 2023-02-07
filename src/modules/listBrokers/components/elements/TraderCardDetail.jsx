import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { StarBorder as StarBorderIcon } from "@mui/icons-material";
import {
  GreenButton,
  WhiteButton,
} from "../../../../shared/components/buttons/CustomButtons";
import {
  DARK_GREEN_COLOR,
  GREY_BG_COLOR,
} from "../../../../shared/config/Colors";

const TraderCardDetail = ({
  broker,
  handleCompare,
  handleChoose,
  toCompare,
}) => {
  const isSelected =
    toCompare[0]?.ID === broker?.ID || toCompare[1]?.ID === broker?.ID;

  return (
    <Card
      sx={{
        borderRadius: "40px",
        background: isSelected ? DARK_GREEN_COLOR : GREY_BG_COLOR,
        color: isSelected ? "#fff" : "#000",
        boxShadow: "none",
        padding: "10px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              borderRadius: "40px",
              height: "130px",
              width: "130px",
              background: "black",
              marginRight: "20px",
            }}
          >
            <img
              src=""
              alt=""
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                borderRadius: "40px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ marginBottom: "16px" }}>{broker.Name}</Typography>
            <Typography sx={{ marginBottom: "6px" }}>{broker.Name}</Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <StarBorderIcon />
              <Typography>4.5</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "25px 0",
          }}
        >
          <Typography>Min Deposit</Typography>
          <Typography>100$</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <GreenButton onClick={() => handleChoose(broker.ID)}>
            Choose the provider
          </GreenButton>
          <WhiteButton onClick={() => handleCompare(broker)}>
            {isSelected ? "Remove" : "Add To Compare"}
          </WhiteButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TraderCardDetail;

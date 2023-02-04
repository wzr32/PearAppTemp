import { Box, Container, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

const TraderPresentation = ({ logoUrl = "", name, description }) => {
  const [value, setValue] = useState(4);
  return (
    <Box>
      <Container>
        <Box
          sx={{
            margin: "240px auto 156px",
            display: "flex",
            gap: "80px",
          }}
        >
          <Box
            sx={{
              width: "150px",
              height: "150px",
              background: "black",
              borderRadius: "15px",
            }}
          >
            <img
              src={logoUrl}
              alt={name}
              style={{ objectFit: "contain", height: "100%", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            <Typography fontWeight="bold">{name}</Typography>
            <Typography variant="caption">{description || name}</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TraderPresentation;

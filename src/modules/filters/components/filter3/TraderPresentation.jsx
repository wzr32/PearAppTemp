import React, { useState } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";
import { LIGHT_GREEN_COLOR } from "../../../../shared/config/Colors";
import brokerDummyLogo from "../../../../shared/assets/presencia_logo.png";

const TraderPresentation = ({ logoUrl, name, description }) => {
  const [value, setValue] = useState(4.5);
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
              src={logoUrl || brokerDummyLogo}
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
            <Box sx={{ display: "flex", alignItems: "center", gap: "1em" }}>
              <Rating
                name="simple-controlled"
                value={value}
                precision={0.5}
                readOnly
                sx={{ color: LIGHT_GREEN_COLOR }}
              />
              <Typography fontWeight="bold" variant="h6">
                {value}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TraderPresentation;

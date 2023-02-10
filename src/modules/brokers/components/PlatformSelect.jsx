import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import {
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  Check as CheckIcon,
} from "@mui/icons-material";

const platformOpt = [
  {
    id: "cdfs",
    name: "CDFs",
  },
  {
    id: "crypto",
    name: "Crypto",
  },
  {
    id: "etfs",
    name: "ETFs",
  },
];

const PlatformSelect = () => {
  const [wouldInvest, setWouldInvest] = useState(null);

  return (
    <Container>
      <Box sx={{ margin: "120px 0" }}>
        <Typography
          variant="h5"
          color={DARK_GREEN_COLOR}
          margin={"1.5rem 0"}
          fontWeight="bold"
        >
          What Type of Plataform You Select?
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {platformOpt.map((item, index) => (
            <Box
              key={`platform-option__${index}`}
              className={
                wouldInvest === item.id
                  ? "invest-class invest-class--active"
                  : "invest-class"
              }
              onClick={() => setWouldInvest(item.id)}
            >
              {wouldInvest === item.id ? (
                <CheckIcon />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
              <Typography fontWeight="bold" variant="h6">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
        >
          <GreenButton component={NavLink} to="/brokers">
            Next
          </GreenButton>
        </Box>
      </Box>
    </Container>
  );
};

export default PlatformSelect;

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

const investOpt = [
  {
    id: "kyc",
    name: "KYC",
  },
  {
    id: "non-kyc",
    name: "Non KYC",
  },
];

const WouldInvest = () => {
  const [invest, setInvest] = useState(null);

  const handleClick = (id) => {
    setInvest(id);
  };

  console.log("invest id =>> ", invest);

  return (
    <Container>
      <Box sx={{ margin: "120px 0" }}>
        <Typography>What Type of Plataform You Select?</Typography>

        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {investOpt.map((item, index) => (
            <Box
              key={`would-invest-option${index}`}
              className={
                invest === item.id
                  ? "invest-class invest-class--active"
                  : "invest-class"
              }
              onClick={() => handleClick(item.id)}
            >
              <Typography>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default WouldInvest;

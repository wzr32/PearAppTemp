import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";

const investOpt = [
  {
    id: "someone",
    name: "Someone to manage the investments for me",
  },
  {
    id: "myself",
    name: "To manage everything myself",
  },
];

const WouldInvest = () => {
  const [invest, setInvest] = useState(null);

  const handleClick = (id) => {
    setInvest(id);
  };

  return (
    <Container>
      <Box sx={{ margin: "120px 0" }}>
        <Typography
          variant="h5"
          color={DARK_GREEN_COLOR}
          margin={"1.5rem 0"}
          fontWeight="bold"
        >
          I would Invest
        </Typography>

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
              <Typography fontWeight="bold" variant="h6">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default WouldInvest;

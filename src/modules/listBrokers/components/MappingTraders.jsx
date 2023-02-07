import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TraderCardDetail from "./elements/TraderCardDetail";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { useNavigate } from "react-router-dom";

const MappingTraders = ({ brokers, handleCompare, toCompare }) => {
  const navigate = useNavigate();

  const saveCompare = async () => {
    if (localStorage.getItem("compareItems")) {
      await localStorage.removeItem("compareItems");
    }
    await localStorage.setItem("compareItems", JSON.stringify(toCompare));
  };

  const handleNavCompare = async () => {
    await saveCompare();

    navigate("/compare");
  };

  const handleChoose = (id) => {
    navigate(`/broker/${id}`);
  };

  return (
    <Box
      sx={{
        marginBottom: "240px",
      }}
    >
      <Container>
        {toCompare.length === 2 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3em",
            }}
          >
            <GreenButton onClick={handleNavCompare}>Compare</GreenButton>
          </Box>
        )}
        {brokers.length > 1 ? (
          <Grid container spacing={2}>
            {brokers.map((broker, index) => (
              <Grid key={`mapping-traders_${index + 0}`} item={12} md={6}>
                <TraderCardDetail
                  broker={broker}
                  handleCompare={handleCompare}
                  handleChoose={handleChoose}
                  toCompare={toCompare}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography textAlign="center" component="h4">
            No brokers data
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default MappingTraders;

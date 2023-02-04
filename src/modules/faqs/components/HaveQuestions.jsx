import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { GreenButton } from "../../../shared/components/buttons/CustomButtons";
import { DARK_GREEN_COLOR } from "../../../shared/config/Colors";

const HaveQuestions = () => {
  return (
    <Container>
      <Box
        sx={{
          background: DARK_GREEN_COLOR,
          color: "#fff",
          borderRadius: "20px",
          padding: "40px 50px",
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} md={10}>
            <Typography>Still have questions?</Typography>
            <Typography>
              Can’t find a answer your’e looking for? chat to our team.{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <GreenButton>Asked</GreenButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HaveQuestions;

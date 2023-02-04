import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { GreenButton } from "../../shared/components/buttons/CustomButtons";

import TraderPresentation from "../filters/components/filter3/TraderPresentation";
import MainData from "./components/MainData";
import ThisRating from "./components/ThisRating";
import Api from "../../shared/client/api-client";

const BrokerView = () => {
  const { id } = useParams();
  const [broker, setBroker] = useState(undefined);
  const [loading, setLoading] = useState(true);

  console.log("id broker =>> ", id);

  const brokerCall = async () => {
    try {
      const {
        data: { data },
      } = await Api.get(`/brokers/${id}`);
      setBroker(data[0]);
      console.log(data[0]);
    } catch (err) {
      console.log(`error on getting broker =>> `, err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    brokerCall();
  }, []);

  let component = (
    <Box component="section" sx={{ marginBottom: "150px" }}>
      <Container>
        <TraderPresentation
          logoUrl={broker?.Website || ""}
          name={broker?.Name}
          description={broker?.Description}
        />
        <MainData />
        <ThisRating
          credibility={broker?.Reliability}
          cvs={broker?.Execution}
          reviews={broker?.Customer_Support}
          quality={broker?.Platform_proprietary_quality}
          price={broker?.Platform_off_the_shelf_quality}
        />
        <GreenButton
          sx={{ margin: "0 auto", display: "block", padding: "16px 42px" }}
        >
          <a
            href={broker?.Website || "#"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Go to Provider
          </a>
        </GreenButton>
      </Container>
    </Box>
  );

  if (loading)
    component = (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (!broker || broker === undefined)
    component = (
      <Box>
        <Typography textAlign="center">No data to show</Typography>
      </Box>
    );

  return <>{component}</>;
};

export default BrokerView;

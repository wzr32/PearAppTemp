import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import Api from "../../shared/client/api-client";
import GetStarted from "./components/GetStarted";
import MappingTraders from "./components/MappingTraders";
import SeeAllProviders from "./components/SeeAllProviders";
import WhatIsPear from "./components/WhatIsPear";

const ListBrokersView = () => {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toCompare, setToCompare] = useState([]);

  const brokersCall = async () => {
    try {
      const {
        data: { data },
      } = await Api.get("brokers");
      setBrokers(data);
    } catch (err) {
      console.log("error getting brokers =>> ", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCompare = (elem) => {
    const auxArray = [...toCompare];
    const found = auxArray.find((el) => el.ID === elem.ID);

    if (!found && toCompare.length < 2) {
      auxArray.push(elem);
      setToCompare(auxArray);
    } else {
      setToCompare(auxArray.filter((el) => el.ID !== elem.ID));
    }
  };

  useEffect(() => {
    brokersCall();
  }, []);

  return (
    <section>
      <GetStarted />
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "40px 0" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <MappingTraders
          brokers={brokers}
          handleCompare={handleCompare}
          toCompare={toCompare}
        />
      )}
      <SeeAllProviders />
      <WhatIsPear />
    </section>
  );
};

export default ListBrokersView;

import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Api from "../../../shared/client/api-client";

const Filters = () => {
  const [open, setOpen] = useState(false);
  const [brokers, setBrokers] = useState();
  const [loading, setLoading] = useState(true);

  const brokersCall = async () => {
    try {
      const {
        data: { data },
      } = await Api.get("brokers");
      setBrokers(data);
    } catch (err) {
      console.log("error on brokers list");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    brokersCall();
  }, []);

  return (
    <Container>
      <Autocomplete
        fullWidth
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.Name === value.Name}
        getOptionLabel={(option) => option.Name}
        options={brokers}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search"
            InputProps={{
              ...params.InputProps,
              startAdornment: <SearchIcon />,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </Container>
  );
};

export default Filters;

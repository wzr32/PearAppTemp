import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Api from "../../../shared/client/api-client";
import {
  DARK_GREEN_COLOR,
  GREY_BG_COLOR,
  WHITE_BG_COLOR,
} from "../../../shared/config/Colors";

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
            sx={{            
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                background: "#F4F4F4",
                borderRadius: "4px",
                color: DARK_GREEN_COLOR,
                borderColor: "#F4F4F4 !important",
                "&::placeholder": {
                  color: DARK_GREEN_COLOR,
                  fontWeight: "bold",
                  textAlign: "center",
                },
              },
            }}
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

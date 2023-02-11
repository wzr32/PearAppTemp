import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { DARK_GREEN_COLOR, GREY_BG_COLOR } from "../../../shared/config/Colors";

const MainData = () => {
  return (
    <Box>
      <Box
        sx={{
          margin: "45px 0",
          background: GREY_BG_COLOR,
          borderRadius: "17px",
          padding: "20px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: "1em", md: "2em" },
            color: DARK_GREEN_COLOR,
          }}
        >
          <Typography fontWeight="bold">Main Educator</Typography>
          <Typography fontWeight="bold" textAlign="end">
            Anton Kreil
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: "1em", md: "2em" },
            color: DARK_GREEN_COLOR,
          }}
        >
          <Typography fontWeight="bold">Level</Typography>
          <Typography fontWeight="bold" textAlign="end">
            Intermediate - Advanced
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "45px 0",
          background: GREY_BG_COLOR,
          borderRadius: "17px",
          padding: "20px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: "1em", md: "2em" },
            color: DARK_GREEN_COLOR,
          }}
        >
          <Typography fontWeight="bold">Format</Typography>
          <Typography fontWeight="bold" textAlign="end">
            Online, pre-recorded & presential 1-2-1 mentoring
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "45px 0",
          background: GREY_BG_COLOR,
          borderRadius: "17px",
          padding: "20px 15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: "1em", md: "2em" },
            color: DARK_GREEN_COLOR,
          }}
        >
          <Typography fontWeight="bold">Certification</Typography>
          <Typography fontWeight="bold" textAlign="end">
            Yes, upon passing an exam
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "45px 0",
          background: GREY_BG_COLOR,
          borderRadius: "17px",
          padding: "20px 15px",
        }}
      >
        <Box
          sx={{
            color: DARK_GREEN_COLOR,
          }}
        >
          <Typography fontWeight="bold">Summary</Typography>
          <Typography>
            The Institute of Trading and Portfolio Management was established to
            educate, inform and coach retail traders & investors on how to take
            a more professional approach to Trading and Investing in the
            Financial Markets. They also manage a global portfolio and a
            community of retail traders and investors that support each other.
            They deliver their programmes via online video series as well as
            online mentoring. They also hold regular online events and
            presential mentoring programmes in exotic locations.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainData;

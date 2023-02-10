import * as React from "react";
import { InputBase, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from "../../config/Colors";

const WhiteTextField = styled(InputBase)(({ theme }) => ({
  color: DARK_GREEN_COLOR,
  fontWeight: "bold",
  "& input": {
    background: "#ffffff",
    borderRadius: "4px",
    textAlign: "center",
    color: DARK_GREEN_COLOR,
    fontWeight: "bold",
  },
  "& input::placeholder": {
    color: "red !important",
  },
}));

const GreyTextField = styled(TextField)(({ theme }) => ({
  color: DARK_GREEN_COLOR,
  fontWeight: "bold",
  "& input": {
    background: "#FAFAFA",
    borderRadius: "4px",
    textAlign: "center",
    color: DARK_GREEN_COLOR,
    fontWeight: "bold",
  },
  "& input::placeholder": {
    color: "red !important",
  },
}));

export function WhiteInput({ children, props }) {
  return <WhiteTextField {...props}>{children}</WhiteTextField>;
}

export function GreyInput({ children, props }) {
  return <GreyTextField {...props}>{children}</GreyTextField>;
}

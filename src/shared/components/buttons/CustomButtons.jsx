import * as React from 'react';
import Button from '@mui/material/Button';
// import Button from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { DARK_GREEN_COLOR } from '../../config/Colors';

const WhiteCustomButton = styled(Button)(({ theme }) => ({
  background: "#ffffff",
  color: DARK_GREEN_COLOR,
  fontWeight: "bold"
}));

const GreenCustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgb(15,188,153)",
  background: "linear-gradient(0deg, rgba(15,188,153,1) 0%, rgba(28,243,200,1) 100%)",
  color: "#FFFFFF",
  fontWeight: "bold"
}));

export function WhiteButton({ children, ...rest }) {
  return <WhiteCustomButton {...rest}>{children}</WhiteCustomButton>;
};

export function GreenButton({ children, ...rest }) {
  return <GreenCustomButton {...rest}>{children}</GreenCustomButton>;
};

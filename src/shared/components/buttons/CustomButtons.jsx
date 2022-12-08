import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { DARK_GREEN_COLOR, LIGHT_GREEN_COLOR } from '../../config/Colors';

const WhiteCustomButton = styled(Button)(({ theme }) => ({
  background: "#ffffff",
  color: DARK_GREEN_COLOR,
  fontWeight: "bold"
}));

const GreenCustomButton = styled(Button)(({ theme }) => ({
  background: LIGHT_GREEN_COLOR,
  color: "#FFFFFF",
  fontWeight: "bold"
}));

export function WhiteButton({ children }) {
  return <WhiteCustomButton>{children}</WhiteCustomButton>;
};

export function GreenButton({ children }) {
  return <GreenCustomButton>{children}</GreenCustomButton>;
};

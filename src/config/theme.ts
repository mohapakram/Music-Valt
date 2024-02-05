"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const colors = {
  red: "#CA2828",
  darkGrey: "#272727",
  grey: "#9F9F9F",
  black: "#101010",
  white: "#0000",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CA2828", // Replace with your primary color
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

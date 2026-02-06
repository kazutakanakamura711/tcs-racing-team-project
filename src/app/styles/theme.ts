// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  breakpoints: {
    customSm: "350px",
    customMd: "400px",
    customLg: "450px",
    sm: "480px",
    custom: "558px",
    md: "768px",
    lg: "992",
    xl: "1280px",
    "2xl": "1536px",
  },
});

export default customTheme;

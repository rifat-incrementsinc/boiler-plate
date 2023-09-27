import { createTheme } from "@mui/material";
import { Palette } from "./Palette";
import { typography } from "./Typography";

let theme = createTheme({
  palette: Palette,
  typography: typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 325,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});
export default theme;

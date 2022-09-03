import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  colors: {
    primary: "blue",
  },
});

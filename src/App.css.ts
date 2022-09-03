import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import reactLogo from "./logo.svg";

export const App = style({
  textAlign: "center",
});

export const title = style({
  color: vars.colors.primary,
});

export const logo = style({
  width: 200,
  height: 200,
  display: "inline-block",
  backgroundImage: `url("${reactLogo}")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

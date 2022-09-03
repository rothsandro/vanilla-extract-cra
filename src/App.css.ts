import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
import reactLogo from "./logo.svg";

export const title = style({
  color: vars.colors.primary,
  textAlign: "center",
});

export const logo = style({
  width: 200,
  height: 200,
  margin: "0 auto",
  display: "block",
  backgroundImage: `url("${reactLogo}")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the title", () => {
  render(<App />);
  const title = screen.getByText("create-react-app + vanilla-extract = ❤️");
  expect(title).toBeInTheDocument();

  // The color is provided by the theme which uses CSS Custom props
  // jsdom does not yet support CSS Custom props
  // See https://github.com/jsdom/jsdom/pull/3299
  // expect(title).toHaveStyle("color: blue");

  // Other CSS properties that don't use custom props can be used
  expect(title).toHaveStyle("text-align: center");
});

import { render, screen } from "@testing-library/react";
import AccessibleName from "./AccessibleName";

test("can select by accessible name", () => {
  render(<AccessibleName />);
  screen.getByRole("button", {
    // name:"Submit"
    name: /Submit/i,
  });

  screen.getByRole("button", {
    name: /Cancel/i,
  });
});

//? Accessible name is the text inside an element

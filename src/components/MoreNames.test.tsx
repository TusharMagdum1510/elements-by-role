import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoreNames from "./MoreNames";

test("shows an email and search input", async () => {
  render(<MoreNames />);

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const searchInput = screen.getByRole("textbox", {
    name: /search/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

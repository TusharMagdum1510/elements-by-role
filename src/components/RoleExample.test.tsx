import { render, screen } from "@testing-library/react";
import RoleExample from "./RoleExample";
import "@testing-library/jest-dom";

test("can find elements by role", async () => {
  render(<RoleExample />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "checkbox",
    "spinbutton",
    "radio",
    "textbox",
    "listitem",
    "list",
  ];

  for (const role of roles) {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();
  }
});


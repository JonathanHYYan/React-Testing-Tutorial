import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";
import { count } from "console";
import { act } from "react-dom/test-utils";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("0");
  });

  test("renders 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    // All user event API's are aysnchronous so you will need to use
    await act(async () => {
      await user.click(incrementButton);
    });
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders 2 after clicking increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await act(async () => {
        await user.click(incrementButton);
        await user.click(incrementButton);
      });
      const countElement = screen.getByRole("heading");
      expect(countElement).toHaveTextContent("2");
  });

  // Other Pointer Interactions include:
  // dblClick()
  // tripleClick()
  // hover()
  // unhover()

  // Pointer APIs / Custom interaction(s)
  // pointer({keys: '[MouseLeft]'}) <-- left click
  // pointer({keys: '[MouseLeft[MouseRight]'}) <-- left then right click
  // pointer('[MouseLeft[MouseRight]') <-- when only keytype is key a string will suffice
  // pointer('[MouseLeft>]') <-- left click and hold
  // pointer('[/MouseRight]') <-- release of left click

});

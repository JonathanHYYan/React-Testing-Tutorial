import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
    test.skip("renders correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText("Hello");
      expect(textElement).toBeInTheDocument();
    });
  
    describe("Nested", () => {
      test.only("renders a name", () => {
        render(<Greet name="Mortal" />);
        const textElement = screen.getByText("Hello Mortal");
        expect(textElement).toBeInTheDocument();
      });
    });
  });
  
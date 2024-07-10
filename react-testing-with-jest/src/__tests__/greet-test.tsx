import { render, screen } from "@testing-library/react";
import { Greet } from "../component/greet/greet";

describe("Greet", () => {
    xit("renders correctly", () => {
      render(<Greet />);
      const textElement = screen.getByText("Hello");
      expect(textElement).toBeInTheDocument();
    });
  
    describe("Nested", () => {
      fit("renders a name", () => {
        render(<Greet name="Mortal" />);
        const textElement = screen.getByText("Hello Mortal");
        expect(textElement).toBeInTheDocument();
      });
    });
  });
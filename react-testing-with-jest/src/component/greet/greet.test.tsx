import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Tests that never fail are useless, the point is that they fail when the application misbehaves.z
// test('Greet renders correctly', ()=>{
//     render(<Greet/>);
//     const textElement = screen.getByText(/hello/i);
//     expect(textElement).toBeInTheDocument()
// })

// TDD Methodology

/**
 * Greet should render the text hello and if a name is passed into a component
 * It should render hello followed by the naem
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

});

/**
 * React testing library on run fires Jest Watch Mode which will test only the tests that have changes to keep the
 * test time as effecient as possible
 */

/**
 * When you run npm test you can press w to watch usage and select a variety of testing options as well
 * as add methods to your test method such as skip and only.
 */

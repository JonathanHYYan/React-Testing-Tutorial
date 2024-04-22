import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

// Tests that never fail are useless, the point is that they fail when the application misbehaves.z
test('Greet renders correctly', ()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument()
})
import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

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

test('Greet renders correctly', ()=> {
    render(<Greet />);
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument();
})

test('Greet renders with a name', ()=>{
    render(<Greet name='Mortal'/>)
    const textElement = screen.getByText('Hello Mortal')
    expect(textElement).toBeInTheDocument()
})
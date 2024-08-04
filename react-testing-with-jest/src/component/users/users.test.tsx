import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe("Users", ()=>{
    test('renders correctly', () => {
        render(<Users/>);
        const textElement = screen.getByText("Users");
        expect(textElement).toBeInTheDocument();
    });

    test('redners a list of users', () => {
        render(<Users/>);
    });
});
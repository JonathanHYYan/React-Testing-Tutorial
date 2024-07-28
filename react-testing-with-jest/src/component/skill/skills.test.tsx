import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills', () => { 
    const skills = ['HTML', 'CSS', 'JavaScript'];

    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills}/>)
        // Will fail if using getByRole because multiple elements will be returned.
        const listItemsElements = screen.getAllByRole('listitem');
        // Checks the test data quantity is being rendered
        expect(listItemsElements).toHaveLength(skills.length);
    })

    test('renders login button', () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole('button', {name:'Login'});
        expect(loginButton).toBeInTheDocument();
    })

})
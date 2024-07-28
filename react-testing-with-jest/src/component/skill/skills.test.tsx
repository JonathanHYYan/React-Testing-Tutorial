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
 
    test('Start Learning button is not rendered', () => {
        render(<Skills skills={skills}/>)
        // .not annotation in a getByRole will error the test because
        // getByRole always errors when something is not rendered.
        // const learningStartButton = screen.getByRole('button', {name:'Start Learning'});
        // Here we use queryByRole which returns null if no elements match
        // Rather than what is rendered in the DOM
        const learningStartButton = screen.queryByRole('button', {name:'Start Learning'});
        expect(learningStartButton).not.toBeInTheDocument();
    })

    test('Start Learning button eventually displayed', async () => {
        render(<Skills skills={skills}/>)
        // findByRole has a default timeout of 1000ms but you can set a time
        // as shown below
        const learningStartButtonDelayed = await screen.findByRole('button', {name: 'Start Learning'}, {timeout: 2000});
        expect(learningStartButtonDelayed).toBeInTheDocument();
    })

    // Manual Queries is using the regular querySelectorDom API to find elements.
    // i.e. const = container.querySelector('[data-foo="bar"]')
    // This is not recommended because it is not something an end user can
    // To re-iterate the testing revolves around what the end user can
    // See.
})
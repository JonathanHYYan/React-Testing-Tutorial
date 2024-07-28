import { logRoles, render, screen } from "@testing-library/react";
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

    // test('Start Learning button eventually displayed', async () => {
    //     render(<Skills skills={skills}/>)
    //     // findByRole has a default timeout of 1000ms but you can set a time
    //     // as shown below
    //     // screen.debug();
    //     const learningStartButtonDelayed = await screen.findByRole('button', {name: 'Start Learning'}, {timeout: 2000});
    //     // The debug method shows you the DOM tree at that point in the code.
    //     // This is a helpful way to see what is being rendered in real time
    //     // Per line of code.
    //     // screen.debug();
    //     expect(learningStartButtonDelayed).toBeInTheDocument();
    // })

    // Manual Queries is using the regular querySelectorDom API to find elements.
    // i.e. const = container.querySelector('[data-foo="bar"]')
    // This is not recommended because it is not something an end user can
    // To re-iterate the testing revolves around what the end user can
    // See.


    // Using logRoles
    test('Start Learning button eventually displayed', async () => {

        // Great way to find your roles and names to write your test
        // Queries with.
        const view = render(<Skills skills={skills}/>)
        logRoles(view.container);
        // findByRole has a default timeout of 1000ms but you can set a time
        // as shown below
        // screen.debug();
        const learningStartButtonDelayed = await screen.findByRole('button', {name: 'Start Learning'}, {timeout: 2000});
        // The debug method shows you the DOM tree at that point in the code.
        // This is a helpful way to see what is being rendered in real time
        // Per line of code.
        // screen.debug();
        expect(learningStartButtonDelayed).toBeInTheDocument();
    })
})
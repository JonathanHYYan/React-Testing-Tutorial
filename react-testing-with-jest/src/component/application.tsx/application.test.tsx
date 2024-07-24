import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe('Application', ()=>{
    test('renders correctly', ()=>{
        render(<Application/>);
        // getByRole can take an additional array where you specify which
        // screen element you are looking for:
        // label of the form element i.e. in this case the Name innerHTML,
        // Text content of a button
        // Or the value of an aria-lable attribute.
        const nameElement = screen.getByRole('textbox', {
            name:'Name',
        });
        expect(nameElement).toBeInTheDocument();

        // A Secondary method of locating dom element is getByLabelText
        // When multiple elements share label innerHTML we can add a 
        // Selector option.
        const nameElementbyLabel = screen.getByLabelText('Name', {selector: 'input'});
        expect(nameElementbyLabel).toBeInTheDocument();

        // Another secondary method of locating a dom element for
        // Testing is getByPlaceholderText
        const nameElementByPlaceholder = screen.getByPlaceholderText('fullname');
        expect(nameElementByPlaceholder).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const inputByDisplay = screen.getByDisplayValue('Malle');
        expect(inputByDisplay).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();
 
        const pageHeading = screen.getByRole('heading', {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const termsElementbByLabel = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElementbByLabel).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();

    })
});
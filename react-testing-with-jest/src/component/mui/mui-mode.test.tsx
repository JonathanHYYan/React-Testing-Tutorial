import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe('MuiMode', () => {
    test('renders mode text correctly', () => {
        render(<MuiMode/>);
        const headerElement = screen.getByRole('heading');
        expect(headerElement).toHaveTextContent('dark mode');
    });
});
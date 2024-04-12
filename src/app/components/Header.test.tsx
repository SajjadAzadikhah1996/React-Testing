import Header from "@/app/components/Header";
import {render, screen} from "@/app/test-utils";

it('Header component renders theme mode correctly.', () => {
    render(<Header/>);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
});
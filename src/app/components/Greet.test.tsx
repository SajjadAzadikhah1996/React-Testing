import {render, screen} from "@testing-library/react";
import Greet from "@/app/components/Greet";

describe('Greet Component', () => {
    it('Renders the default name.', () => {
        render(<Greet/>)
        const headingElement = screen.getByText('Hello, World!')
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveClass(/text-red/);
        expect(headingElement).toHaveTextContent('Hello, World!');
        expect(headingElement).not.toHaveTextContent('Bye');
    });
})
import {render, screen} from "@testing-library/react";
import Greet from "@/app/components/Greet";

describe('Greet Component', () => {
    it('Renders with a default message.', () => {
        render(<Greet/>);
        const headingElement = screen.getByRole('heading', {level: 1});
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.textContent).toBe('Hello, World!');
    });
})
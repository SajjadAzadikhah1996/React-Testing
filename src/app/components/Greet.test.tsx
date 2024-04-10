import {render, screen} from "@testing-library/react";
import Greet from "@/app/components/Greet";

describe('Login Component', () => {
    it('getByRole.', () => {
        render(<Greet/>)
        // Matching a string:
        const headingElement1 = screen.getByText('Hello World') // full string match
        const headingElement2 = screen.getByText('llo Worl', {exact: false}) // substring match
        const headingElement3 = screen.getByText('hello world', {exact: false}) // ignore case

        // Matching a regex:
        const headingElement4 = screen.getByText(/World/) // substring match
        const headingElement5 = screen.getByText(/world/i) // substring match, ignore case
        const headingElement6 = screen.getByText(/^hello world$/i) // full string match, ignore case
        const headingElement7 = screen.getByText(/Hello W?oRlD/i) // substring match, ignore case, searches for "hello world" or "hello orld"

        // Matching with a custom function:
        const headingElement8 = screen.getByText((content, _element) => content.startsWith('Hello'))

        expect(headingElement1);
        expect(headingElement2);
        expect(headingElement3);
        expect(headingElement4);
        expect(headingElement5);
        expect(headingElement6);
        expect(headingElement7);
        expect(headingElement8);
    });
})
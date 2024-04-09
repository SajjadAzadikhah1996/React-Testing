/*
* Greet.tsx should render the text <Hello, World!> as default.
* If a name is passed into the component it should render Hello followed by the name
* */

import {render, screen} from "@testing-library/react";
import Greet from "@/app/components/Greet";

describe('Greet Component', () => {
    it('Renders the default name.', () => {
        render(<Greet/>)
        const headingElement = screen.getByRole('heading', {level: 1})
        expect(headingElement.textContent).toBe('Hello, World!');
    });
    it('Renders with a name.', () => {
        render(<Greet name='John'/>)
        const headingElement = screen.getByRole('heading', {level: 1})
        expect(headingElement.textContent).toBe('Hello, John!');
    });
})
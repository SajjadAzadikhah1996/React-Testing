import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Counter from "@/app/components/Counter";

describe('Counter Component', function () {
    describe('Payload input', function () {
        it('renders.', function () {
            render(<Counter/>);
            const inputElement = screen.getByLabelText(/custom payload/i) as HTMLInputElement;
            expect(inputElement).toBeInTheDocument();
            expect(inputElement).toBeVisible();
            expect(inputElement).not.toHaveClass(/(hidden|invisible)/i)
        })

        it('changeable.', async function () {
            userEvent.setup();
            render(<Counter/>);
            const inputElement = screen.getByLabelText(/custom payload/i) as HTMLInputElement;
            await userEvent.clear(inputElement);
            await userEvent.type(inputElement, '2');
            expect(inputElement.valueAsNumber).toBe(2);
        })
    })

    describe('Buttons', function () {
        it('renders.', function () {
            render(<Counter/>);
            const increaseButton = screen.getByRole('button', {name: /increase/i}) as HTMLButtonElement;
            const decreaseButton = screen.getByRole('button', {name: /decrease/i}) as HTMLButtonElement;
            const resetButton = screen.getByRole('button', {name: /reset/i}) as HTMLButtonElement;

            expect(increaseButton).toBeInTheDocument();
            expect(decreaseButton).toBeInTheDocument();
            expect(resetButton).toBeInTheDocument();

            expect(increaseButton).toBeVisible();
            expect(decreaseButton).toBeVisible();
            expect(resetButton).toBeVisible();

            expect(increaseButton).not.toHaveClass(/(hidden|invisible)/i)
            expect(decreaseButton).not.toHaveClass(/(hidden|invisible)/i)
            expect(resetButton).not.toHaveClass(/(hidden|invisible)/i)
        })

        it('reset button resets counter to zero.', function () {
            userEvent.setup();
            render(<Counter/>);
            const counterElement = screen.getByText(/0/i) as HTMLSpanElement;
            const resetButton = screen.getByRole('button', {name: /reset/i}) as HTMLButtonElement;
            userEvent.click(resetButton);
            expect(counterElement.textContent).toBe('0');
        })
    })
})
import {render, screen} from "@testing-library/react";
import Counter from "@/app/components/Counter";
import {userEvent} from "@testing-library/user-event";

describe('Counter.tsx', () => {
    it('Renders initial count.', () => {
        render(<Counter count = {0}/>);
        const initSpanElement = screen.getByText(/0/i);
        expect(initSpanElement).toBeInTheDocument();
    });

    it('Handlers are called.', async () => {
        userEvent.setup();
        const increase = jest.fn();
        const decrease = jest.fn();
        render(<Counter count = {0} increase = {increase} decrease = {decrease}/>);
        const increaseButton = screen.getByRole('button', { name: 'Increase' });
        const decreaseButton = screen.getByRole('button', { name: 'Decrease' });
        await userEvent.click(increaseButton);
        await userEvent.click(decreaseButton);
        expect(increase).toHaveBeenCalledTimes(1);
        expect(decrease).toHaveBeenCalledTimes(1);
    });
});
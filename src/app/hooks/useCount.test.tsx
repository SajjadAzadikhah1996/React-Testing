import {renderHook, act} from "@testing-library/react";
import useCounter from "@/app/hooks/useCounter";

describe('Counter Component', () => {
    it('Renders the initial count.', () => {
        // throws error because hooks does not return any jsx
        // also a hook can not be called outside a function component

        // render(useCounter)

        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    it('Accepts and Renders the same initial count.', () => {
        const { result } = renderHook(useCounter, { initialProps: 5 });
        expect(result.current.count).toBe(5);
    });

    it('Increases the count.', () => {
        const { result } = renderHook(useCounter);
        /*
         act() is a functions that makes sure all updates related have been processed and
         applied to the DOM before you make any assertions.
        */

        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    it('Decreases the count.', () => {
        const { result } = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    });
});
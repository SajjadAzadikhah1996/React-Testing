import {renderHook} from "@testing-library/react";
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
});
import {render, screen} from "@testing-library/react";
import App from "@/app/components/App";

describe('Login Component', () => {
    it('Renders based on authenticated user.', async () => {
        render(<App/>)
        const signOutButtonElement = await screen.findByRole('button', {name: 'SignOut'}, {timeout: 2000}); //default is 1000ms
        expect(signOutButtonElement).toBeInTheDocument();
    });
})
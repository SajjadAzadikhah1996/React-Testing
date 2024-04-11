import {logRoles, render, screen} from "@testing-library/react";
import App from "@/app/components/App";

describe('Login Component', () => {
    it('Renders based on authenticated user.', async () => {
        const view = render(<App/>)
        screen.debug(view.container);
        // logRoles(view.container);
        // screen.logTestingPlaygroundURL(view.container)

        const signOutButtonElement = await screen.findByRole('button', {name: 'SignOut'}, /*{timeout: 2000}*/);
        screen.debug(view.container);
        // logRoles(view.container);
        expect(signOutButtonElement).toBeInTheDocument();
    });
})
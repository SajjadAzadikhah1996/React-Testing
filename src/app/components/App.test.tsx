import {render, screen} from "@testing-library/react";
import App from "@/app/components/App";

describe('Login Component', () => {
    it('Renders', () => {
        render(<App/>)
        const signInButtonElement = screen.getByRole('button', {name: 'SignIn'});
        const signOutButtonElement = screen.queryByRole('button', {name: 'SignOut'});
        expect(signInButtonElement).toBeInTheDocument();
        expect(signOutButtonElement).not.toBeInTheDocument();
    });
})
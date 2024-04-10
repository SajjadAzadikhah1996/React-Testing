import {render, screen} from "@testing-library/react";
import SignIn from "@/app/components/SignIn";

describe('Login Component', () => {
    // getByRole
    // https://testing-library.com/docs/queries/byrole
    it('getByRole.', () => {
        render(<SignIn/>)
        const emailInputElement = screen.getByRole('textbox', {name: /email/i})
        expect(emailInputElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox', {name: /remember me/i})
        expect(checkboxElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button', {name: /submit/i})
        expect(submitButtonElement).toBeInTheDocument();

        const githubImgElement = screen.getByRole('img', {name: /github/i})
        expect(githubImgElement).toBeInTheDocument();

        const optionElement = screen.getByRole('combobox')
        expect(optionElement).toBeInTheDocument();
    });

    // getByLabelText
    // https://testing-library.com/docs/queries/bylabeltext
    it('getByLabelText.', () => {
        render(<SignIn/>)
        const passwordInputElement = screen.getByLabelText(/password/i)
        expect(passwordInputElement).toBeInTheDocument();
    });

    // getByPlaceholderText
    // https://testing-library.com/docs/queries/byplaceholdertext
    it('getByPlaceholderText.', () => {
        render(<SignIn/>)
        const searchInputElement = screen.getByPlaceholderText(/search/i)
        expect(searchInputElement).toBeInTheDocument();
    });

    // getByText
    // https://testing-library.com/docs/queries/bytext
    it('getByText.', () => {
        render(<SignIn/>)
        const legendFormElement = screen.getByText('SignIn', {exact: true})
        expect(legendFormElement).toBeInTheDocument();

        const spanElement1 = screen.getByText(/signin with/i)
        expect(spanElement1).toBeInTheDocument();

        const spanElement2 = screen.getByText(/how to send verification code/i)
        expect(spanElement2).toBeInTheDocument();
    });


    // getByDisplayValue
    // https://testing-library.com/docs/queries/bydisplayvalue
    it('getByDisplayValue.', () => {
        render(<SignIn/>)
        const selectElement = screen.getByDisplayValue('SMS')
        expect(selectElement).toBeInTheDocument();
    });

    // getByAltText
    // https://testing-library.com/docs/queries/byalttext
    it('getByAltText.', () => {
        render(<SignIn/>)
        const googleImgElement = screen.getByAltText(/google/i)
        expect(googleImgElement).toBeInTheDocument();
    });

    // getByTitle
    // https://testing-library.com/docs/queries/bytitle
    it('getByTitle.', () => {
        render(<SignIn/>)
        const signInWithElement = screen.getByTitle('OAuth')
        expect(signInWithElement).toBeInTheDocument();
    });

    // getByTestId
    // https://testing-library.com/docs/queries/bytestid
    it('getByTestId.', () => {
        render(<SignIn/>)
        const signInElement = screen.getByTestId('signIn-component')
        expect(signInElement).toBeInTheDocument();
    });
})
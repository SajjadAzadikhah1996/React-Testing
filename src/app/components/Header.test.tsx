import {render, screen} from "@testing-library/react";
import Header from "@/app/components/Header";
import AppServiceProvider from "@/app/providers/AppServiceProvider";

it('Header component renders theme mode correctly.', () => {
    render(<Header/>, {wrapper: AppServiceProvider});
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('dark mode');
});
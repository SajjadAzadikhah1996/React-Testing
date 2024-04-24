import {render, screen} from "@testing-library/react";
import Users from "@/app/components/Users";
import {server} from "@/mocks/node";
import {errorHandlers} from "@/mocks/handlers";

it('Renders users.', async () => {
    render(await Users());
    const usersElement = await screen.findAllByRole('listitem');
    expect(usersElement).toHaveLength(2);
});

it('Renders error.', async () => {
    server.use(...errorHandlers);
    render(await Users());
    const errorElement = await screen.findByTestId('status-text');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('Unauthenticated');
});
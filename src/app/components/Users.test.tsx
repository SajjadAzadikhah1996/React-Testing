import {render, screen} from "@testing-library/react";
import Users from "@/app/components/Users";

it('Renders users.', async () => {
    render(await Users());
    const usersElement = await screen.findAllByRole('listitem');
    expect(usersElement).toHaveLength(2);
});
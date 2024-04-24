export default async function Users() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UsersType = await res.json();

    return (
        <div>
            <h1 className = "text-2xl">Users</h1>
            <ul>
                {
                    users.map(user => (
                        <li key = {user.name}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}
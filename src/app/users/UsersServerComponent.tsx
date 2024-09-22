const fetchUsers = async (): Promise<any[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    return data.json();
};

const UsersServerComponent = async () => {
    const users = await fetchUsers();

    return (
        <div>
            <div>{users.map(user => JSON.stringify(user))}</div>
        </div>
    );
};

export default UsersServerComponent;
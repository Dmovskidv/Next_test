'use client'

import UsersServerComponent from './UsersServerComponent';
import UsersWrapper from './UsersWrapper';

const Users = () => {
    return (
        <UsersWrapper>
            <UsersServerComponent />
        </UsersWrapper>
    );
};

export default Users;
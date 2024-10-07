import UserItem from "./UserItem.tsx";
import {User} from "../../types.ts";
import * as React from "react";

interface Props {
    users: User[]
}

const UserList: React.FC<Props> = ({users}) => {

    return (
        <>
            {users.map(user => (
                <UserItem name={user.name} email={user.email} status={user.status} roles={user.roles} id={user.id} key={user.id} />
            ))}
        </>
    );
};

export default UserList;
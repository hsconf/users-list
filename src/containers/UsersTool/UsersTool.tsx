import UserForm from "../../components/UserForm/UserForm.tsx";
import UserList from "../../components/UserList/UserList.tsx";
import {useState} from "react";
import {User} from "../../types.ts";

const UsersTool = () => {

    const [users, setUsers] = useState<User[]>([
        {id: '1d2sf0', name: 'John', email: 'temp@mail.net', status: false, roles: 'admin'}
    ]);

    const newUser = (user: User) => {
        setUsers([...users, user]);
    }

    return (
        <div className="row mt-5">
            <div className="col-6">
                <UserForm newUser={newUser} />
            </div>
        <div className="col-6">
                <UserList users={users}/>
        </div>
        </div>
    );
};

export default UsersTool;
import UserForm from "../../components/UserForm/UserForm.tsx";
import UserList from "../../components/UserList/UserList.tsx";
import {useState} from "react";
import {User} from "../../types.ts";

const UsersTool = () => {

    const [users, setUsers] = useState<User[]>([
        {name: 'John', email: 'temp@mail.net', status: false, roles: 'admin'},
        {name: 'John', email: 'temp@mail.net', status: false, roles: 'admin'},
        {name: 'John', email: 'temp@mail.net', status: false, roles: 'admin'},
        {name: 'John', email: 'temp@mail.net', status: false, roles: 'admin'}
    ]);

    return (
        <div className="row mt-5">
            <div className="col-6">
                <UserForm />
            </div>
        <div className="col-6">
                <UserList users={users}/>
        </div>
        </div>
    );
};

export default UsersTool;
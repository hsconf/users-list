import { useState } from "react";
import {User, UserMutation} from "../../types.ts";
import * as React from "react";

interface Props {
    newUser: (newUser: User) => void;
}

const UserForm: React.FC<Props> = ({newUser}) => {
    const [user, setUser] = useState<UserMutation>({
        name: '',
        email: '',
        status: false,
        roles: '',
    });

    console.log(user);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;

        if (type === 'checkbox') {
            const { checked } = event.target as HTMLInputElement;
            setUser(prevUser => ({
                ...prevUser,
                [name]: checked,
            }));
        } else {
            setUser(prevUser => ({
                ...prevUser,
                [name]: value,
            }));
        }
    };

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        newUser({
            id: Math.random().toString(),
            ...user,
        })

        setUser({
            name: '',
            email: '',
            status: false,
            roles: '',
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                className="form-control mb-2"
                placeholder="Enter user name"
                required
                value={user.name}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="email"
                id="email"
                className="form-control mb-2"
                placeholder="Enter email"
                required
                value={user.email}
                onChange={onChangeHandler}
            />
            <label htmlFor="status">Status</label>
            <input
                type="checkbox"
                name="status"
                id="status"
                className="form-check-input mb-2 ms-2"
                checked={user.status}
                onChange={onChangeHandler}
            />
            <select
                name="roles"
                id="roles"
                className="form-control mb-2"
                required
                value={user.roles}
                onChange={onChangeHandler}
            >
                <option value="">Select role</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" className="btn btn-success w-100">Save</button>
        </form>
    );
};

export default UserForm;

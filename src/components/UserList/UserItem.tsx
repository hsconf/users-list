import * as React from "react";

interface UserItem {
    name: string;
    email: string;
    status: boolean;
    roles: string;
    id: string;
}

const UserItem: React.FC<UserItem> = ({name, email, status, roles}) => {
    return (
        <div className="card p-3 mb-1">
            <div>
                <div className="card-text">Name: {name}</div>
                <div className="card-text">Email: {email}</div>
                <div className="card-text ">Status: <span className={`${status ? 'text-success' : 'text-danger'}`}>{status ? 'online' : 'offline'}</span></div>
                <div className="card-text">Role: {roles}</div>
            </div>
        </div>
    );
};

export default UserItem;
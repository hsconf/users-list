export interface User {
    id: string;
    name: string;
    email: string;
    status: boolean;
    roles: string;
}

export interface UserMutation {
    name: string;
    email: string;
    status: boolean;
    roles: string;
}
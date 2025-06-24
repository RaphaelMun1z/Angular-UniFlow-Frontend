// user.model.ts
export enum UserRole {
    GUEST = 'GUEST',
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface User {
    email: string;
    role: UserRole;
    // outros campos
}
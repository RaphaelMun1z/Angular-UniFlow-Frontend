// user.model.ts
export enum UserRole {
    GUEST = 'GUEST',
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface User {
    email: string;
    role: UserRole;
}

export interface Tab {
    id: string;
    label: string;
    route: string;
}

export interface Operation {
    id: number;
    title: string;
    description: string;
    icon: string;
    iconBgColor: string;
    iconColor: string;
    tabId: string;
}

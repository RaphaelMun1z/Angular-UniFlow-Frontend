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

type ActivityStatus = 'current' | 'pending' | 'completed' | 'failed';

interface ActivityOwner {
    name: string;
    role: string;
    avatar: string;
}

interface ActivityUpdate {
    text: string;
    time: string;
    authorAvatar: string;
}

interface Activity {
    id: number;
    icon: string;
    iconIsUrl: boolean;
    company: string;
    statusTag: {
        text: string;
        color: string;
    };
    title: string;
    tags: string[];
    owner: ActivityOwner;
    status: ActivityStatus;
    highlighted?: boolean;
    progress: number;
    recentUpdates: ActivityUpdate[];
}
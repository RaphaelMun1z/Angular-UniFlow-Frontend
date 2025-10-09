import { Component, Input } from '@angular/core';

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

@Component({
    selector: 'app-user-info',
    imports: [],
    templateUrl: './user-info.component.html',
    styleUrl: './user-info.component.scss'
})

export class UserInfoComponent {
    @Input() activity!: Activity; 
}

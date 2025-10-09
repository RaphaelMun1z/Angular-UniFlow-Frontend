import { CommonModule } from '@angular/common';
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
    selector: 'app-card-body',
    imports: [CommonModule],
    templateUrl: './card-body.component.html',
    styleUrl: './card-body.component.scss'
})

export class CardBodyComponent {
    @Input() activity!: Activity;
}

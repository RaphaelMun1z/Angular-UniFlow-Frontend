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
    selector: 'app-card-header',
    imports: [CommonModule],
    templateUrl: './card-header.component.html',
    styleUrl: './card-header.component.scss'
})

export class CardHeaderComponent {
    @Input() activity!: Activity;
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserInfoComponent } from "./components/user-info/user-info.component";

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
    selector: 'app-card-footer',
    imports: [CommonModule, UserInfoComponent],
    templateUrl: './card-footer.component.html',
    styleUrl: './card-footer.component.scss'
})

export class CardFooterComponent {
    @Input() activity!: Activity; 
}

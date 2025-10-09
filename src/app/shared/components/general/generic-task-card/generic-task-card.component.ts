import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { CardHeaderComponent } from "./components/card-header/card-header.component";
import { CardBodyComponent } from "./components/card-body/card-body.component";
import { CardFooterComponent } from "./components/card-footer/card-footer.component";

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
    selector: 'app-generic-task-card',
    imports: [CommonModule, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
    templateUrl: './generic-task-card.component.html',
    styleUrl: './generic-task-card.component.scss'
})

export class GenericTaskCardComponent {
    @Input() activity!: Activity;
}

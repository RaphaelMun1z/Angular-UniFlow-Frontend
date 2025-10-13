import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-timeline-item',
    imports: [],
    templateUrl: './timeline-item.component.html',
    styleUrl: './timeline-item.component.scss'
})

export class TimelineItemComponent {
    @Input() date: string | undefined;
    @Input() title: string | undefined;
    @Input() description: string | undefined;
}

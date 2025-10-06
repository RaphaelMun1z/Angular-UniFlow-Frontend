import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-timeline-item',
    imports: [],
    templateUrl: './timeline-item.component.html',
    styleUrl: './timeline-item.component.scss'
})

export class TimelineItemComponent {
    @Input() date: String | undefined;
    @Input() title: String | undefined;
    @Input() description: String | undefined;
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-stat-item',
    imports: [],
    templateUrl: './stat-item.component.html',
    styleUrl: './stat-item.component.scss'
})
export class StatItemComponent {
    @Input() title!: string;
    @Input() i_value!: string;
}

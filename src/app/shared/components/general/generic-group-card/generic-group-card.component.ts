import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Group {
    logo: string;
    logoBgColor: string;
    title: string;
    description: string;
    tags: string[];
}

@Component({
    selector: 'app-generic-group-card',
    imports: [CommonModule],
    templateUrl: './generic-group-card.component.html',
    styleUrl: './generic-group-card.component.scss'
})

export class GenericGroupCardComponent {
    @Input() group!: Group;
}

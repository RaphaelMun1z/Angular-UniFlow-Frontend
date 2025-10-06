import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface SectionLink {
    id: string;
    title: string;
}

@Component({
    selector: 'app-table-of-contents',
    imports: [CommonModule],
    templateUrl: './table-of-contents.component.html',
    styleUrl: './table-of-contents.component.scss'
})

export class TableOfContentsComponent {
    @Input() sections: SectionLink[] = [];
}

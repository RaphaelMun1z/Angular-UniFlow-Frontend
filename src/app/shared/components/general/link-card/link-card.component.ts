import { Component, inject, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface LinkCardItem {
    title: string;
    description: string;
    icon: string;
    link: string;
}

@Component({
    selector: 'app-link-card',
    imports: [],
    templateUrl: './link-card.component.html',
    styleUrl: './link-card.component.scss'
})

export class LinkCardComponent {
    sanitizer = inject(DomSanitizer);
    
    @Input() item!: LinkCardItem;  
}

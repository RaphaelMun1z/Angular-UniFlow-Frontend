import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-header-alt',
    imports: [],
    templateUrl: './section-header-alt.component.html',
    styleUrl: './section-header-alt.component.scss'
})

export class SectionHeaderAltComponent {
    @Input() title!: string;
    @Input() subtitle!: string;
}

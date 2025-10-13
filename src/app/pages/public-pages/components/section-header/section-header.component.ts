import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-section-header',
    imports: [],
    templateUrl: './section-header.component.html',
    styleUrl: './section-header.component.scss'
})

export class SectionHeaderComponent {
    @Input() title = "Nossa História";
    @Input() description = "Revolucionando a gestão acadêmica com tecnologia e paixão por educar.";
}

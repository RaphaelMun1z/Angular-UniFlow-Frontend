import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-admin-groups-global-settings-page',
    imports: [],
    templateUrl: './admin-groups-global-settings-page.component.html',
    styleUrl: './admin-groups-global-settings-page.component.scss'
})

export class AdminGroupsGlobalSettingsPageComponent {
    sanitizer = inject(DomSanitizer);
    
    constructor() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        // Add padding to the body to account for the fixed footer
        document.body.style.paddingBottom = '90px';
    }
}

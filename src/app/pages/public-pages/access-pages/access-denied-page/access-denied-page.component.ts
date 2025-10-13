import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-access-denied-page',
    imports: [CommonModule, RouterLink],
    templateUrl: './access-denied-page.component.html',
    styleUrl: './access-denied-page.component.scss'
})

export class AccessDeniedPageComponent {
    
}

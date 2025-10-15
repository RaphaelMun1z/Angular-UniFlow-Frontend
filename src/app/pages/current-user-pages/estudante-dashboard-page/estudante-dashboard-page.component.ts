import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-estudante-dashboard-page',
    imports: [CommonModule],
    templateUrl: './estudante-dashboard-page.component.html',
    styleUrl: './estudante-dashboard-page.component.scss'
})

export class EstudanteDashboardPageComponent {
    isJoinGroupModalOpen = false;
}

import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-estudante-dashboard-page',
    imports: [FooterComponent, NavbarAltTwoComponent, CommonModule],
    templateUrl: './estudante-dashboard-page.component.html',
    styleUrl: './estudante-dashboard-page.component.scss'
})

export class EstudanteDashboardPageComponent {
    isJoinGroupModalOpen = false;
}

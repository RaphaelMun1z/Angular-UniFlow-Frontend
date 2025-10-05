import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-alt-two/navbar-alt-two.component";
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

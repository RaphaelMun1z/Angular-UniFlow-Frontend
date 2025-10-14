import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component";

@Component({
  selector: 'app-professor-dashboard-page',
  imports: [FooterComponent, NavbarAltTwoComponent],
  templateUrl: './professor-dashboard-page.component.html',
  styleUrl: './professor-dashboard-page.component.scss'
})
export class ProfessorDashboardPageComponent {

}

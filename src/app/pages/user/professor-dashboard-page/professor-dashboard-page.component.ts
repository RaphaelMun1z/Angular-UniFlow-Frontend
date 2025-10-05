import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltTwoComponent } from "../../../shared/components/navbar-alt-two/navbar-alt-two.component";

@Component({
  selector: 'app-professor-dashboard-page',
  imports: [FooterComponent, NavbarAltTwoComponent],
  templateUrl: './professor-dashboard-page.component.html',
  styleUrl: './professor-dashboard-page.component.scss'
})
export class ProfessorDashboardPageComponent {

}

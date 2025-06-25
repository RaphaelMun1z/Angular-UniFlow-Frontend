import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-plan-management-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './plan-management-page.component.html',
  styleUrl: './plan-management-page.component.scss'
})
export class PlanManagementPageComponent {

}

import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-user-plan-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './user-plan-page.component.html',
  styleUrl: './user-plan-page.component.scss'
})
export class UserPlanPageComponent {

}

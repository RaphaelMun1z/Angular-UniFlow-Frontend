import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltNoAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component';

@Component({
  selector: 'app-user-plan-page',
  imports: [NavbarAltNoAuthComponent, FooterComponent],
  templateUrl: './user-plan-page.component.html',
  styleUrl: './user-plan-page.component.scss'
})
export class UserPlanPageComponent {

}

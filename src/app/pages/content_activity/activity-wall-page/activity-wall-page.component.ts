import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
  selector: 'app-activity-wall-page',
  imports: [NavbarAltWithAuthComponent, FooterComponent],
  templateUrl: './activity-wall-page.component.html',
  styleUrl: './activity-wall-page.component.scss'
})
export class ActivityWallPageComponent {

}

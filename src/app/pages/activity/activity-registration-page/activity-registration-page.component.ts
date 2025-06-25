import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-activity-registration-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './activity-registration-page.component.html',
  styleUrl: './activity-registration-page.component.scss'
})
export class ActivityRegistrationPageComponent {

}

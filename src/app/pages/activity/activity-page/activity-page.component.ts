import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-activity-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './activity-page.component.html',
  styleUrl: './activity-page.component.scss'
})
export class ActivityPageComponent {

}

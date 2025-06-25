import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-activity-wall-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './activity-wall-page.component.html',
  styleUrl: './activity-wall-page.component.scss'
})
export class ActivityWallPageComponent {

}

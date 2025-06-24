import { Component } from '@angular/core';
import { NavbarAltOneComponent } from '../../../shared/components/navbar-alt-one/navbar-alt-one.component';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";

@Component({
  selector: 'app-user-dashboard-page',
  imports: [NavbarAltOneComponent, NavbarAltTreeComponent],
  templateUrl: './user-dashboard-page.component.html',
  styleUrl: './user-dashboard-page.component.scss'
})
export class UserDashboardPageComponent {

}

import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-user-management-page',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './user-management-page.component.html',
  styleUrl: './user-management-page.component.scss'
})
export class UserManagementPageComponent {

}

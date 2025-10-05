import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-forgot-password',
  imports: [NavbarAltTreeComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

}

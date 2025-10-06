import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
  selector: 'app-forgot-password',
  imports: [NavbarAltWithAuthComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})

export class ForgotPasswordComponent {

}

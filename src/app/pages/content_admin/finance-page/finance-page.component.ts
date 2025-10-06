import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
  selector: 'app-finance-page',
  imports: [NavbarAltWithAuthComponent, FooterComponent],
  templateUrl: './finance-page.component.html',
  styleUrl: './finance-page.component.scss'
})
export class FinancePageComponent {

}

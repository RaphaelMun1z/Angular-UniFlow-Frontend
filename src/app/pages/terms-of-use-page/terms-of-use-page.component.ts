import { Component } from '@angular/core';
import { NavbarAltOneComponent } from "../../shared/components/navbar-alt-one/navbar-alt-one.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-terms-of-use-page',
  imports: [NavbarAltOneComponent, FooterComponent],
  templateUrl: './terms-of-use-page.component.html',
  styleUrl: './terms-of-use-page.component.scss'
})
export class TermsOfUsePageComponent {

}

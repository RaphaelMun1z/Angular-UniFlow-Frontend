import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarAltNoAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component';

@Component({
  selector: 'app-about-us-page',
  imports: [NavbarAltNoAuthComponent, FooterComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}

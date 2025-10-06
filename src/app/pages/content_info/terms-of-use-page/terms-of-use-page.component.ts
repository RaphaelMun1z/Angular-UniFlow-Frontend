import { Component } from '@angular/core';
import { NavbarAltNoAuthComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-terms-of-use-page',
    imports: [NavbarAltNoAuthComponent, FooterComponent],
    templateUrl: './terms-of-use-page.component.html',
    styleUrl: './terms-of-use-page.component.scss'
})

export class TermsOfUsePageComponent {
    
}

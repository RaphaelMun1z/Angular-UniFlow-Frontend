import { Component } from '@angular/core';
import { NavbarAltNoAuthComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-confirmed-payment-page',
    imports: [NavbarAltNoAuthComponent, FooterComponent],
    templateUrl: './confirmed-payment-page.component.html',
    styleUrl: './confirmed-payment-page.component.scss'
})

export class ConfirmedPaymentPageComponent {
    
}

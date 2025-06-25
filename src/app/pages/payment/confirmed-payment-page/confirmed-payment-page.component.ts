import { Component } from '@angular/core';
import { NavbarAltOneComponent } from "../../../shared/components/navbar-alt-one/navbar-alt-one.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-confirmed-payment-page',
    imports: [NavbarAltOneComponent, FooterComponent],
    templateUrl: './confirmed-payment-page.component.html',
    styleUrl: './confirmed-payment-page.component.scss'
})

export class ConfirmedPaymentPageComponent {
    
}

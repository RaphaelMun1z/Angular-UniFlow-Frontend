import { Component } from '@angular/core';
import { NavbarAltOneComponent } from "../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-payment-page',
    imports: [NavbarAltOneComponent, FooterComponent],
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.scss'
})

export class PaymentPageComponent {
    
}

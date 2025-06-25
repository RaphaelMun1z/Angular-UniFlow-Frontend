import { Component } from '@angular/core';
import { NavbarAltOneComponent } from "../../../shared/components/navbar-alt-one/navbar-alt-one.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-payment-page',
    imports: [NavbarAltOneComponent, FooterComponent],
    templateUrl: './payment-page.component.html',
    styleUrl: './payment-page.component.scss'
})

export class PaymentPageComponent {
    
}

import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-reset-password',
    imports: [NavbarAltTreeComponent, FooterComponent],
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
    
}

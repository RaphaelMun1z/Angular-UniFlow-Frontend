import { Component } from '@angular/core';
import { NavbarAltTreeComponent } from "../../../shared/components/navbar-alt-tree/navbar-alt-tree.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-user-profile-page',
    imports: [NavbarAltTreeComponent, FooterComponent],
    templateUrl: './user-profile-page.component.html',
    styleUrl: './user-profile-page.component.scss'
})

export class UserProfilePageComponent {
    
}

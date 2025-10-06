import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarAltWithAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component';

@Component({
    selector: 'app-user-profile-page',
    imports: [NavbarAltWithAuthComponent, FooterComponent],
    templateUrl: './user-profile-page.component.html',
    styleUrl: './user-profile-page.component.scss'
})

export class UserProfilePageComponent {
    
}

import { Component } from '@angular/core';
import { NavbarAltNoAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
    selector: 'app-user-profile-page',
    imports: [NavbarAltNoAuthComponent, FooterComponent],
    templateUrl: './user-profile-page.component.html',
    styleUrl: './user-profile-page.component.scss'
})

export class UserProfilePageComponent {
    
}

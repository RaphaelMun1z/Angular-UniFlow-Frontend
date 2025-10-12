import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from "../../navbars/navbar-auth/components/user-avatar/user-avatar.component";
import { ProfilePopupComponent } from "../../navbars/navbar-auth/components/profile-popup/profile-popup.component";
import { CommonModule } from '@angular/common';
import { CurrentUser } from '../../../interfaces/User.model';

@Component({
    selector: 'app-profile-button',
    imports: [CommonModule, UserAvatarComponent, ProfilePopupComponent],
    templateUrl: './profile-button.component.html',
    styleUrl: './profile-button.component.scss'
})

export class ProfileButtonComponent {
    @Input() currentUser: CurrentUser | null = null;
    isProfileMenuOpen = false;
    
    openMenu(): void {
        this.isProfileMenuOpen = true;
    }
    
    closeMenu(): void {
        this.isProfileMenuOpen = false;
    }
}

import { Component, Input } from '@angular/core';
import { UserAvatarComponent } from "../../navbars/navbar-auth/components/user-avatar/user-avatar.component";
import { ProfilePopupComponent } from "../../navbars/navbar-auth/components/profile-popup/profile-popup.component";
import { CommonModule } from '@angular/common';

export interface CurrentUser {
    nome: string;
    email: string;
    avatarUrl: string;
    role: 'ESTUDANTE' | 'PROFESSOR' | 'ADMIN';
}

@Component({
    selector: 'app-profile-button',
    imports: [CommonModule, UserAvatarComponent, ProfilePopupComponent],
    templateUrl: './profile-button.component.html',
    styleUrl: './profile-button.component.scss'
})

export class ProfileButtonComponent {
    @Input() currentUser: CurrentUser | null = null;
    isProfileMenuOpen = false;
    
    private closeTimer: any;
    
    openMenu(): void {
        clearTimeout(this.closeTimer);
        this.isProfileMenuOpen = true;
    }
    
    closeMenu(): void {
        this.closeTimer = setTimeout(() => {
            this.isProfileMenuOpen = false;
        }, 200);
    }
}

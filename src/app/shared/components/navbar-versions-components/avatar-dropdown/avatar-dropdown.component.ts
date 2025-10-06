import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
    label: string;
    link: string;
    icon: string;
}

@Component({
    selector: 'app-avatar-dropdown',
    imports: [CommonModule, RouterModule],
    templateUrl: './avatar-dropdown.component.html',
    styleUrl: './avatar-dropdown.component.scss'
})

export class AvatarDropdownComponent {
    avatarUrl?: string = "profile-icon.png";
    userName: any;
    userEmail: any;
    isDropdownOpen = false;
    
    // Itens do menu configuráveis
    @Input() menuItems: MenuItem[] = [
        {
            label: 'Perfil',
            link: '/user/profile',
            icon: 'fas fa-user-circle'
        },
        {
            label: 'Plano Ativo',
            link: '/user/profile/plan',
            icon: 'fas fa-id-card-alt'
        }
    ];
    
    @HostListener('document:click', ['$event'])
    onClickOutside(event: Event) {
        if (!(event.target as HTMLElement).closest('#user-menu-button')) {
            this.isDropdownOpen = false;
        }
    }
    
    toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    
    closeDropdown(): void {
        this.isDropdownOpen = false;
    }
    
    handleLogout(): void {
        this.closeDropdown();
        // Emitir evento ou chamar serviço de logout
        console.log('Logout requested');
    }
}

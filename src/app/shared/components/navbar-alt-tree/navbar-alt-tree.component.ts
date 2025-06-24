import { Component, Input } from '@angular/core';
import { AvatarDropdownComponent } from "../navbar/avatar-dropdown/avatar-dropdown.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar-alt-tree',
    imports: [CommonModule, RouterModule, AvatarDropdownComponent],
    templateUrl: './navbar-alt-tree.component.html',
    styleUrl: './navbar-alt-tree.component.scss'
})

export class NavbarAltTreeComponent {
    @Input() bgStyle: number = 0;
    
    isHamburgerMenuOpen: boolean = false;
    
    hamburgerMenuItems = [
        { 
            label: 'Dashboard', 
            link: '/user/dashboard', 
            icon: 'fas fa-home' 
        },
        { 
            label: 'Administrativo', 
            link: '/admin/dashboard', 
            icon: 'fas fa-shield-alt' 
        },
        { 
            label: 'Financeiro', 
            link: '/admin/finance', 
            icon: 'fas fa-coins' 
        },
        {
            label: 'Grupos',
            link: '/groups/1',
            icon: 'fas fa-users'
        },
        {
            label: 'Mural de Atividades',
            link: '/user/activities/wall',
            icon: 'fas fa-clipboard-list'
        },
        {
            label: 'Atividades Registradas',
            link: '/user/activities/registered',
            icon: 'fas fa-tasks'
        },
    ];
    
    toggleHamburgerMenu(): void {
        this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen;
    }
    
    closeHamburgerMenu(): void {
        this.isHamburgerMenuOpen = false;
    }
}

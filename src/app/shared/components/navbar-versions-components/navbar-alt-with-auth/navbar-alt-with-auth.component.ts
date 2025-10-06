import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePopupComponent } from "./components/profile-popup/profile-popup.component";
import { NotificationsPopupComponent } from "./components/notifications-popup/notifications-popup.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LogoLinkComponent } from "../../general/logo-link/logo-link.component";

export interface CurrentUser {
    nome: string;
    email: string;
    avatarUrl: string;
    role: 'ESTUDANTE' | 'PROFESSOR' | 'ADMIN';
}

@Component({
    selector: 'app-navbar-alt-with-auth',
    imports: [CommonModule, RouterModule, ProfilePopupComponent, NotificationsPopupComponent, UserAvatarComponent, NavigationComponent, LogoLinkComponent, NavigationComponent],
    templateUrl: './navbar-alt-with-auth.component.html',
    styleUrl: './navbar-alt-with-auth.component.scss'
})

export class NavbarAltWithAuthComponent implements OnInit {
    @Input() bgStyle: number = 0;
    
    isNotificationsOpen = false;
    isProfileMenuOpen = false;
    
    currentUser: CurrentUser | null = null;
    unreadNotificationsCount: any;
    
    constructor() {}
    
    ngOnInit(): void {
        this.currentUser = {
            nome: 'Professor Teste',
            email: 'professor.teste@email.com',
            avatarUrl: 'https://i.pravatar.cc/150?u=professor',
            role: 'PROFESSOR' // <-- MUDE AQUI PARA 'ESTUDANTE' ou 'ADMIN' para testar as outras visões
        };
    }
    
}

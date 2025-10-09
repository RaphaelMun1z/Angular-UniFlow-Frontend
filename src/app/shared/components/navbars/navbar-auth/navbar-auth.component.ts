import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePopupComponent } from "./components/profile-popup/profile-popup.component";
import { NotificationsPopupComponent } from "./components/notifications-popup/notifications-popup.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LogoLinkComponent } from "../../general/logo-link/logo-link.component";
import { NotificationButtonComponent } from "../../general/notification-button/notification-button.component";
import { ProfileButtonComponent } from "../../general/profile-button/profile-button.component";

export interface CurrentUser {
    nome: string;
    email: string;
    avatarUrl: string;
    role: 'ESTUDANTE' | 'PROFESSOR' | 'ADMIN';
}

@Component({
    selector: 'app-navbar-auth',
    imports: [CommonModule, RouterModule, NavigationComponent, LogoLinkComponent, NavigationComponent, NotificationButtonComponent, ProfileButtonComponent],
    templateUrl: './navbar-auth.component.html',
    styleUrl: './navbar-auth.component.scss'
})

export class NavbarAuthComponent implements OnInit {
    @Input() bgStyle: number = 0;
    
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

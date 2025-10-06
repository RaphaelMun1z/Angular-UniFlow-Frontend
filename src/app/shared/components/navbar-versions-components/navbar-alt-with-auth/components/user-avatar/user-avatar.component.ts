import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CurrentUser {
    nome: string;
    email: string;
    avatarUrl: string;
    role: 'ESTUDANTE' | 'PROFESSOR' | 'ADMIN';
}

@Component({
    selector: 'app-user-avatar',
    imports: [CommonModule],
    templateUrl: './user-avatar.component.html',
    styleUrl: './user-avatar.component.scss'
})

export class UserAvatarComponent {
    @Input() currentUser: CurrentUser | null = null;
}
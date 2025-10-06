import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface TeamMember {
    nome: string;
    cargo: string;
    bio: string;
    avatarUrl: string;
    socialLinks: {
        plataforma: 'linkedin' | 'github' | 'twitter';
        url: string;
    }[];
}

@Component({
    selector: 'app-team-member-card',
    imports: [CommonModule],
    templateUrl: './team-member-card.component.html',
    styleUrl: './team-member-card.component.scss'
})

export class TeamMemberCardComponent {
    @Input() member!: TeamMember;
}

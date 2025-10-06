import { Component, OnInit } from '@angular/core';
import { TeamMember, TeamMemberCardComponent } from './team-member-card/team-member-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-presentation',
    imports: [CommonModule, TeamMemberCardComponent],
    templateUrl: './team-presentation.component.html',
    styleUrl: './team-presentation.component.scss'
})

export class TeamPresentationComponent implements OnInit {
    
    public teamMembers: TeamMember[] = [];
    
    ngOnInit(): void {
        // Dados mockados (em um app real, viriam de uma API)
        this.teamMembers = [
            {
                nome: 'Carlos Silva',
                cargo: 'CEO & Co-Fundador',
                bio: 'Ex-professor com PhD em Ciência da Computação, lidera nossa visão estratégica.',
                avatarUrl: 'https://i.pravatar.cc/150?u=ceo',
                socialLinks: [
                    { plataforma: 'linkedin', url: '#' },
                    { plataforma: 'github', url: '#' }
                ]
            },
            {
                nome: 'Ana Oliveira',
                cargo: 'CTO & Co-Fundadora',
                bio: 'Especialista em arquitetura de sistemas educacionais com mais de 10 anos de experiência.',
                avatarUrl: 'https://i.pravatar.cc/150?u=cto',
                socialLinks: [
                    { plataforma: 'linkedin', url: '#' }
                ]
            },
            {
                nome: 'Mariana Costa',
                cargo: 'UX Lead',
                bio: 'Designer especializada em experiências educacionais, premiada por sua abordagem centrada no usuário.',
                avatarUrl: 'https://i.pravatar.cc/150?u=ux',
                socialLinks: [
                    { plataforma: 'linkedin', url: '#' }
                ]
            },
            {
                nome: 'Roberto Santos',
                cargo: 'Engenheiro de Software',
                bio: 'Responsável pela arquitetura do nosso módulo de atividades colaborativas e backend.',
                avatarUrl: 'https://i.pravatar.cc/150?u=dev',
                socialLinks: [
                    { plataforma: 'linkedin', url: '#' },
                    { plataforma: 'github', url: '#' }
                ]
            }
        ];
    }
}
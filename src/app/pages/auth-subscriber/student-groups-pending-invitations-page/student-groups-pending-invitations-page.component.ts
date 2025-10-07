import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface InviteRequest {
    id: number;
    groupName: string;
    requestDate: string;
    status: 'Pendente' | 'Aprovado' | 'Recusado';
    groupImageUrl: string;
    adminMessage?: string; // Mensagem opcional do administrador.
}

@Component({
    selector: 'app-student-groups-pending-invitations-page',
    imports: [CommonModule],
    templateUrl: './student-groups-pending-invitations-page.component.html',
    styleUrl: './student-groups-pending-invitations-page.component.scss'
})

export class StudentGroupsPendingInvitationsPageComponent {
    // Dados de exemplo para a demonstração.
    invites: InviteRequest[] = [
        {
            id: 1,
            groupName: 'Grupo de Estudos - Física Quântica',
            requestDate: '2025-10-05',
            status: 'Aprovado',
            groupImageUrl: 'https://placehold.co/100x100/8b5cf6/ffffff?text=FQ',
            adminMessage: 'Bem-vindo(a) ao grupo! Leia as regras fixadas.'
        },
        {
            id: 2,
            groupName: 'Projeto de TCC em IA',
            requestDate: '2025-10-06',
            status: 'Recusado',
            groupImageUrl: 'https://placehold.co/100x100/ec4899/ffffff?text=IA',
            adminMessage: 'O grupo já atingiu o limite máximo de participantes.'
        },
        {
            id: 3,
            groupName: 'Cálculo I - Turma A',
            requestDate: '2025-10-07',
            status: 'Pendente',
            groupImageUrl: 'https://placehold.co/100x100/06b6d4/ffffff?text=C1'
        },
        {
            id: 4,
            groupName: 'Laboratório de Redes',
            requestDate: '2025-09-28',
            status: 'Recusado',
            groupImageUrl: 'https://placehold.co/100x100/10b981/ffffff?text=LR',
            adminMessage: 'Solicitação expirada.'
        }
    ];
    
    // Função auxiliar para retornar classes CSS com base no status.
    getStatusClasses(status: 'Pendente' | 'Aprovado' | 'Recusado'): string {
        switch (status) {
            case 'Aprovado':
            return 'bg-green-100 text-green-800';
            case 'Recusado':
            return 'bg-red-100 text-red-800';
            case 'Pendente':
            return 'bg-amber-100 text-amber-800';
        }
    }
    
    constructor() {
        this.injectFonts();
    }
    
    private injectFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}

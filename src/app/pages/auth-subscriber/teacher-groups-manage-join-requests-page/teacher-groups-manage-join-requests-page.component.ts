import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

interface JoinRequest {
    id: number;
    studentName: string;
    studentImageUrl: string;
    groupName: string;
    requestDate: string;
}

@Component({
    selector: 'app-teacher-groups-manage-join-requests-page',
    imports: [CommonModule, DatePipe],
    templateUrl: './teacher-groups-manage-join-requests-page.component.html',
    styleUrl: './teacher-groups-manage-join-requests-page.component.scss'
})

export class TeacherGroupsManageJoinRequestsPageComponent {
    // Dados de exemplo para a demonstração.
    requests: JoinRequest[] = [
        {
            id: 1,
            studentName: 'Ana Clara',
            studentImageUrl: 'https://i.pravatar.cc/100?img=1',
            groupName: 'Cálculo I - Turma A',
            requestDate: '2025-10-07'
        },
        {
            id: 2,
            studentName: 'Bruno Gomes',
            studentImageUrl: 'https://i.pravatar.cc/100?img=2',
            groupName: 'Projeto de TCC em IA',
            requestDate: '2025-10-06'
        },
        {
            id: 3,
            studentName: 'Carlos Eduardo',
            studentImageUrl: 'https://i.pravatar.cc/100?img=3',
            groupName: 'Cálculo I - Turma A',
            requestDate: '2025-10-05'
        },
        {
            id: 4,
            studentName: 'Daniela Faria',
            studentImageUrl: 'https://i.pravatar.cc/100?img=4',
            groupName: 'Grupo de Estudos - Física Quântica',
            requestDate: '2025-10-04'
        }
    ];
    
    // Lógica para aprovar uma solicitação (remove da lista para simulação).
    approveRequest(requestId: number): void {
        this.requests = this.requests.filter(req => req.id !== requestId);
        console.log(`Aprovada a solicitação ID: ${requestId}`);
    }
    
    // Lógica para recusar uma solicitação (remove da lista para simulação).
    denyRequest(requestId: number): void {
        // Em uma aplicação real, aqui você poderia abrir um modal para o professor
        // escrever o motivo da recusa antes de confirmar a ação.
        const reason = prompt('Opcional: digite o motivo da recusa.');
        this.requests = this.requests.filter(req => req.id !== requestId);
        console.log(`Recusada a solicitação ID: ${requestId}. Motivo: ${reason || 'Nenhum'}`);
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

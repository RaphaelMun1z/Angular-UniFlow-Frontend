import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';

@Component({
    selector: 'app-admin-groups-audit-page',
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-groups-audit-page.component.html',
    styleUrl: './admin-groups-audit-page.component.scss'
})

export class AdminGroupsAuditPageComponent {
    auditLogs = signal([
        { id: 1, date: '07/10/2025 11:45', group: 'Turma de Cálculo I', user: 'admin@sistema.com', action: 'Configuração Alterada', type: 'modification', details: 'Visibilidade alterada para "Privado"' },
        { id: 2, date: '07/10/2025 10:30', group: 'Grupo de Estudos - Física', user: 'joao.silva@email.com', action: 'Membro Adicionado', type: 'member', details: 'usuário maria.santos@email.com' },
        { id: 3, date: '06/10/2025 20:15', group: 'Projeto de TCC - Eng. Civil', user: 'ana.pereira@email.com', action: 'Post Excluído', type: 'deletion', details: 'ID do post: #58923' },
        { id: 4, date: '06/10/2025 18:00', group: 'Turma de Álgebra Linear', user: 'admin@sistema.com', action: 'Grupo Criado', type: 'creation', details: 'Tipo: Turma' },
        { id: 5, date: '05/10/2025 14:12', group: 'Grupo de Estudos - Física', user: 'carlos.rodrigues@email.com', action: 'Membro Removido', type: 'member', details: 'usuário pedro.costa@email.com' },
        { id: 6, date: '05/10/2025 09:45', group: 'Turma de Cálculo I', user: 'beatriz.almeida@email.com', action: 'Arquivo Enviado', type: 'creation', details: 'lista_exercicios.pdf (5.2MB)' },
        { id: 7, date: '04/10/2025 22:30', group: 'Projeto de TCC - Eng. Civil', user: 'admin@sistema.com', action: 'Grupo Arquivado', type: 'modification', details: 'Motivo: Inatividade' },
    ]);
    
    constructor() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}


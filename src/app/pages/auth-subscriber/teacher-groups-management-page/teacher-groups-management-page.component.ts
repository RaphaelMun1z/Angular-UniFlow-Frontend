import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

interface ProfessorGroup {
    id: string;
    title: string;
    description: string;
    type: 'Turma' | 'Grupo de Estudo';
    status: 'Ativo' | 'Arquivado';
    bannerUrl: string;
    memberCount: number;
    pendingRequests: number;
}

@Component({
    selector: 'app-teacher-groups-management-page',
    imports: [CommonModule],
    templateUrl: './teacher-groups-management-page.component.html',
    styleUrl: './teacher-groups-management-page.component.scss'
})

export class TeacherGroupsManagementPageComponent {
    // Estado para controlar o modal
    isActionModalOpen = false;
    selectedGroup: ProfessorGroup | null = null;
    modalPosition = { top: 0, right: 0 };
    
    // Dados de exemplo para a demonstração.
    groups: ProfessorGroup[] = [
        {
            id: 'grp_001',
            title: 'Cálculo I - Turma A',
            description: 'Turma oficial da disciplina de Cálculo I, para o primeiro semestre de 2025. Materiais e avisos serão postados aqui.',
            type: 'Turma',
            status: 'Ativo',
            bannerUrl: 'https://placehold.co/100x100/0d9488/ffffff?text=C',
            memberCount: 45,
            pendingRequests: 3,
        },
        {
            id: 'grp_002',
            title: 'Grupo de Estudos - Física Quântica',
            description: 'Grupo de estudos voluntário para aprofundamento nos tópicos de Física Quântica. Aulas extras e debates.',
            type: 'Grupo de Estudo',
            status: 'Ativo',
            bannerUrl: 'https://placehold.co/100x100/be185d/ffffff?text=F',
            memberCount: 12,
            pendingRequests: 0,
        },
        {
            id: 'grp_003',
            title: 'Laboratório de Redes - 2024',
            description: 'Turma do ano anterior. O conteúdo permanece disponível para consulta mas o grupo está inativo.',
            type: 'Turma',
            status: 'Arquivado',
            bannerUrl: 'https://placehold.co/100x100/57534e/ffffff?text=R',
            memberCount: 38,
            pendingRequests: 0,
        }
    ];
    
    constructor() {
        this.injectFonts();
    }
    
    // Abre o modal com o grupo selecionado e calcula a posição
    openActionModal(group: ProfessorGroup, event: MouseEvent) {
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        this.modalPosition = {
            top: rect.bottom + window.scrollY + 8, // 8px abaixo do botão
            right: window.innerWidth - rect.right,
        };
        this.selectedGroup = group;
        this.isActionModalOpen = true;
    }
    
    // Fecha o modal
    closeActionModal() {
        this.isActionModalOpen = false;
    }
    
    private injectFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}

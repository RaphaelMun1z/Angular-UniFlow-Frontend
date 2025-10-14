import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { ProfessorGroup } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-teacher-groups-management-page',
    imports: [CommonModule],
    templateUrl: './teacher-groups-management-page.component.html',
    styleUrl: './teacher-groups-management-page.component.scss'
})

export class TeacherGroupsManagementPageComponent {
    isActionModalOpen = signal(false);
    selectedGroup = signal<ProfessorGroup | null>(null);
    modalPosition = signal({ top: 0, right: 0 });
    
    @HostListener('document:keydown.escape')
    onEscapeKey(): void {
        if (this.isActionModalOpen()) {
            this.closeActionModal();
        }
    }
    
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
    
    openActionModal(group: ProfessorGroup, event: MouseEvent) {
        const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        this.modalPosition.set({
            top: rect.bottom + window.scrollY + 8,
            right: window.innerWidth - rect.right,
        });
        this.selectedGroup.set(group);
        this.isActionModalOpen.set(true);
    }
    
    closeActionModal() {
        this.isActionModalOpen.set(false);
    }
}

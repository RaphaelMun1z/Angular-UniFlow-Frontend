import { Component, computed, inject } from '@angular/core';
import { GenericNavigationCardComponent } from "../../../../../shared/components/general/generic-navigation-card/generic-navigation-card.component";
import { CommonModule } from '@angular/common';
import { Operation } from '../../../../../shared/interfaces/User.model';
import { AuthService } from '../../../../../core/services/auth.service';
import { TeacherGroupNavigationPageComponent } from "../../../teacher-group-navigation-page/teacher-group-navigation-page.component";
import { NavigationPageComponent } from "../../../../../shared/components/general/navigation-page/navigation-page.component";

const PROFESSOR_OPERATIONS: Operation[] = [
    {
        id: 1,
        title: 'Criar Novo Grupo',
        description: 'Inicie uma nova turma ou grupo de estudos.',
        icon: 'plus-circle',
        iconBgColor: 'bg-indigo-100',
        iconColor: 'text-indigo-600',
        tabId: 'criar'
    },
    {
        id: 2,
        title: 'Gerenciar Grupos',
        description: 'Edite informações e permissões dos seus grupos.',
        icon: 'edit',
        iconBgColor: 'bg-sky-100',
        iconColor: 'text-sky-600',
        tabId: 'gerenciar'
    },
    {
        id: 3,
        title: 'Adicionar Membros',
        description: 'Convide participantes para os grupos existentes.',
        icon: 'users',
        iconBgColor: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        tabId: 'membros'
    }
];

const ADMIN_OPERATIONS: Operation[] = [
    ...PROFESSOR_OPERATIONS,
    {
        id: 4,
        title: 'Visualizar Todos os Grupos',
        description: 'Monitore e gerencie todos os grupos da plataforma.',
        icon: 'view-grid',
        iconBgColor: 'bg-slate-100',
        iconColor: 'text-slate-600',
        tabId: 'visualizar-todos'
    },
    {
        id: 5,
        title: 'Relatórios Gerais',
        description: 'Acesse dados e estatísticas de todos os grupos.',
        icon: 'chart-bar',
        iconBgColor: 'bg-amber-100',
        iconColor: 'text-amber-600',
        tabId: 'relatorios-gerais'
    }
];

const ALUNO_OPERATIONS: Operation[] = [
    {
        id: 1,
        title: 'Meus Grupos',
        description: 'Veja os grupos e turmas que você participa.',
        icon: 'collection',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        tabId: 'meus-grupos'
    },
    {
        id: 2,
        title: 'Procurar Grupos',
        description: 'Encontre e solicite entrada em novos grupos.',
        icon: 'search',
        iconBgColor: 'bg-gray-100',
        iconColor: 'text-gray-600',
        tabId: 'procurar'
    }
];

@Component({
    selector: 'app-groups-operations',
    imports: [CommonModule, GenericNavigationCardComponent, TeacherGroupNavigationPageComponent, NavigationPageComponent],
    templateUrl: './groups-operations.component.html',
    styleUrl: './groups-operations.component.scss'
})

export class GroupsOperationsComponent {
    public authService = inject(AuthService);
    
    public operations = computed(() => {
        const role = this.authService.primaryUserRole();
        switch (role) {
            case 'ROLE_ADMIN':
            return ADMIN_OPERATIONS;
            case 'ROLE_PROFESSOR':
            return PROFESSOR_OPERATIONS;
            case 'ROLE_ESTUDANTE':
            return ALUNO_OPERATIONS;
            default:
            return [];
        }
    });
}

import { Component, computed, inject } from '@angular/core';
import { GenericNavigationCardComponent } from "../../../../../shared/components/general/generic-navigation-card/generic-navigation-card.component";
import { Operation } from '../../../../../shared/interfaces/User.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';

const PROFESSOR_ACTIVITY_OPERATIONS: Operation[] = [
    {
        id: 1,
        title: 'Criar Nova Atividade',
        description: 'Elabore provas, trabalhos ou questionários.',
        icon: 'document-add',
        iconBgColor: 'bg-teal-100',
        iconColor: 'text-teal-600',
        tabId: 'criar-atividade'
    },
    {
        id: 2,
        title: 'Corrigir Atividades',
        description: 'Revise e atribua notas para as tarefas enviadas.',
        icon: 'check-circle',
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-600',
        tabId: 'corrigir-atividades'
    },
    {
        id: 3,
        title: 'Banco de Questões',
        description: 'Gerencie sua biblioteca de questões reutilizáveis.',
        icon: 'archive',
        iconBgColor: 'bg-slate-100',
        iconColor: 'text-slate-600',
        tabId: 'banco-questoes'
    }
];

const ADMIN_ACTIVITY_OPERATIONS: Operation[] = [
    ...PROFESSOR_ACTIVITY_OPERATIONS,
    {
        id: 4,
        title: 'Relatórios de Desempenho',
        description: 'Visualize estatísticas gerais sobre as atividades.',
        icon: 'chart-pie',
        iconBgColor: 'bg-amber-100',
        iconColor: 'text-amber-600',
        tabId: 'relatorios-atividades'
    }
];

const ALUNO_ACTIVITY_OPERATIONS: Operation[] = [
    {
        id: 1,
        title: 'Minhas Atividades',
        description: 'Veja suas tarefas pendentes e notas recebidas.',
        icon: 'document-text',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-600',
        tabId: 'minhas-atividades'
    },
    {
        id: 2,
        title: 'Enviar Tarefa',
        description: 'Faça o upload de um trabalho ou resposta.',
        icon: 'upload',
        iconBgColor: 'bg-gray-100',
        iconColor: 'text-gray-600',
        tabId: 'enviar-tarefa'
    }
];

@Component({
    selector: 'app-tasks-operations',
    imports: [CommonModule, GenericNavigationCardComponent],
    templateUrl: './tasks-operations.component.html',
    styleUrl: './tasks-operations.component.scss'
})

export class TasksOperationsComponent {
    public authService = inject(AuthService);
    
    public activityOperations = computed(() => {
        const role = this.authService.primaryUserRole();
        
        switch (role) {
            case 'ROLE_ADMIN':
            return ADMIN_ACTIVITY_OPERATIONS;
            case 'ROLE_PROFESSOR':
            return PROFESSOR_ACTIVITY_OPERATIONS;
            case 'ROLE_ESTUDANTE':
            return ALUNO_ACTIVITY_OPERATIONS;
            default:
            return [];
        }
    });
}

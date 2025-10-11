import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { GenericTaskCardComponent } from "../../../../../shared/components/general/generic-task-card/generic-task-card.component";
import { AuthService } from '../../../../../core/services/auth.service';
import { Activity, ActivityOwner, ActivityStatus } from '../../../../../core/services/activity.service';
import { GenericTasksPageComponent } from '../../generic-tasks-page.component';

const owners: ActivityOwner[] = [
    { name: 'Ana Silva', role: 'Professora', avatar: 'https://i.pravatar.cc/40?u=ana' },
    { name: 'Carlos Souza', role: 'Professor', avatar: 'https://i.pravatar.cc/40?u=carlos' },
    { name: 'Admin Geral', role: 'Admin', avatar: 'https://i.pravatar.cc/40?u=admin' }
];

const generateMockActivities = (userPrefix: string, count: number): Activity[] => {
    const statuses: ActivityStatus[] = ['Pendente', 'Concluída', 'Atrasada'];
    const statusColors: { [key in ActivityStatus]: string } = {
        'Pendente': 'bg-yellow-100 text-yellow-800',
        'Concluída': 'bg-green-100 text-green-800',
        'Atrasada': 'bg-red-100 text-red-800'
    };
    
    return Array.from({ length: count }, (_, i) => {
        const status = statuses[i % statuses.length];
        return {
            id: i + 1,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
            iconIsUrl: false,
            company: `Turma de ${userPrefix} ${i % 3 + 1}`,
            statusTag: { text: status, color: statusColors[status] },
            title: `Atividade de ${userPrefix} #${i + 1}`,
            tags: ['Prova', 'Online'],
            owner: owners[i % owners.length],
            status: status,
            highlighted: i % 5 === 0,
            progress: Math.floor(Math.random() * 100),
            recentUpdates: [
                { text: 'Prazo estendido.', time: '2h atrás', authorAvatar: 'https://i.pravatar.cc/40?u=carlos' }
            ]
        };
    });
};

const ADMIN_ACTIVITIES = generateMockActivities('Admin', 40);
const PROFESSOR_ACTIVITIES = generateMockActivities('Professor', 25);
const ESTUDANTE_ACTIVITIES = generateMockActivities('Estudante', 15);

@Component({
    selector: 'app-tasks-list',
    imports: [CommonModule, GenericTaskCardComponent, GenericTasksPageComponent],
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.scss'
})

export class TasksListComponent {
    public authService = inject(AuthService);
    
    public selectedStatus = signal<ActivityStatus | 'Todos'>('Pendente');
    
    private sourceActivities = computed<Activity[]>(() => {
        const role = this.authService.primaryUserRole();
        switch (role) {
            case 'ROLE_ADMIN':
            return ADMIN_ACTIVITIES;
            case 'ROLE_PROFESSOR':
            return PROFESSOR_ACTIVITIES;
            case 'ROLE_ESTUDANTE':
            return ESTUDANTE_ACTIVITIES;
            default:
            return [];
        }
    });
    
    public filteredActivities = computed<Activity[]>(() => {
        const activities = this.sourceActivities();
        const status = this.selectedStatus();
        
        if (status === 'Todos') {
            return activities;
        }
        
        return activities.filter(activity => activity.status === status);
    });
    
    public setStatusFilter(status: ActivityStatus | 'Todos'): void {
        this.selectedStatus.set(status);
    }
}

import { CommonModule } from "@angular/common";
import { Component, computed, OnInit, signal } from "@angular/core";
import { GenericTaskCardComponent } from "../../../../../shared/components/general/generic-task-card/generic-task-card.component";
import { GenericTasksPageComponent } from "../../generic-tasks-page.component";
import { UserRole } from "../../../../../core/services/auth.service";
import { Activity } from "../../../../../core/services/activity.service";

interface StatusOption {
    key: string;
    label: string;
}

interface RoleConfig {
    title: string;
    subtitle: string;
    statusOptions: StatusOption[];
}

@Component({
    selector: 'app-tasks-list',
    imports: [CommonModule, GenericTaskCardComponent, GenericTasksPageComponent],
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.scss'
})

export class TasksListComponent implements OnInit {
    role: UserRole = 'ROLE_PROFESSOR';
    status = signal<string>('pendente');
    
    title = '';
    subtitle = '';
    statusOptions: StatusOption[] = [];
    
    ngOnInit() {
        const config = this.getConfigByRole(this.role);
        this.title = config.title;
        this.subtitle = config.subtitle;
        this.statusOptions = config.statusOptions;
    }
    
    getConfigByRole(role: UserRole): RoleConfig {
        const baseConfig: Record<UserRole, RoleConfig> = {
            ROLE_ESTUDANTE: {
                title: 'Minhas Atividades',
                subtitle: 'Veja suas tarefas, prazos e notas.',
                statusOptions: [
                    { key: 'pendente', label: 'Pendentes' },
                    { key: 'concluida', label: 'Concluídas' },
                    { key: 'atrasada', label: 'Atrasadas' },
                ],
            },
            ROLE_PROFESSOR: {
                title: 'Suas Atividades e Avaliações',
                subtitle: 'Crie, corrija e gerencie as atividades para suas turmas.',
                statusOptions: [
                    { key: 'pendente', label: 'Pendentes' },
                    { key: 'avaliacao', label: 'A Avaliar' },
                    { key: 'finalizada', label: 'Finalizadas' },
                ],
            },
            ROLE_ADMIN: {
                title: 'Gerenciamento de Atividades (Admin)',
                subtitle: 'Monitore todas as atividades e relatórios do sistema.',
                statusOptions: [
                    { key: 'todas', label: 'Todas' },
                    { key: 'ativas', label: 'Ativas' },
                    { key: 'inativas', label: 'Inativas' },
                ],
            },
        };
        
        return baseConfig[role] ?? baseConfig.ROLE_ESTUDANTE;
    }
    
    updateStatus(key: string) {
        this.status.set(key);
    }
    
    activities = signal<Activity[]>([
        {
            id: 1,
            icon: 'book-open',
            iconIsUrl: false,
            company: 'Turma A - Matemática',
            statusTag: { text: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
            title: 'Atividade sobre Equações do 2º Grau',
            tags: ['Matemática', 'Álgebra'],
            owner: { name: 'Prof. João Silva', role: 'ROLE_PROFESSOR', avatar: 'https://i.pravatar.cc/150?img=3' },
            status: 'Pendente',
            highlighted: true,
            progress: 40,
            recentUpdates: [
                { text: 'Publicada há 2 dias', time: '2d', authorAvatar: 'https://i.pravatar.cc/150?img=3' },
            ],
        },
        {
            id: 2,
            icon: 'clipboard-check',
            iconIsUrl: false,
            company: 'Turma B - História',
            statusTag: { text: 'Concluída', color: 'bg-green-100 text-green-800' },
            title: 'Trabalho sobre a Revolução Francesa',
            tags: ['História', 'Europa'],
            owner: { name: 'Profª Ana Souza', role: 'ROLE_PROFESSOR', avatar: 'https://i.pravatar.cc/150?img=4' },
            status: 'Concluída',
            progress: 100,
            recentUpdates: [
                { text: 'Atividade corrigida', time: '1d', authorAvatar: 'https://i.pravatar.cc/150?img=4' },
            ],
        },
        {
            id: 3,
            icon: 'clock',
            iconIsUrl: false,
            company: 'Turma C - Física',
            statusTag: { text: 'Atrasada', color: 'bg-red-100 text-red-800' },
            title: 'Relatório de Experimento de Queda Livre',
            tags: ['Física', 'Gravidade'],
            owner: { name: 'Prof. Carlos Lima', role: 'ROLE_PROFESSOR', avatar: 'https://i.pravatar.cc/150?img=5' },
            status: 'Atrasada',
            progress: 60,
            recentUpdates: [
                { text: 'Prazo expirado há 1 dia', time: '1d', authorAvatar: 'https://i.pravatar.cc/150?img=5' },
            ],
        },
    ]);
    
    filteredActivities = computed(() =>
        this.activities().filter(activity => {
        const current = this.status().toLowerCase();
        if (current === 'pendente') return activity.status === 'Pendente';
        if (current === 'concluida' || current === 'finalizada') return activity.status === 'Concluída';
        if (current === 'atrasada') return activity.status === 'Atrasada';
        if (current === 'todas') return true;
        return true;
    })
);
}
import { Component, OnInit, signal } from '@angular/core';
import { GenericGroupCardComponent } from "../../../../../shared/components/general/generic-group-card/generic-group-card.component";
import { CommonModule } from '@angular/common';
import { UserRole } from '../../../../../core/services/auth.service';
import { GenericGroupsPageComponent } from '../../generic-groups-page.component';
import { Group, RoleConfig, StatusOption, Tab } from '../../../../../shared/interfaces/User.model';

@Component({
    selector: 'app-groups-list',
    imports: [CommonModule, GenericGroupCardComponent, GenericGroupsPageComponent],
    templateUrl: './groups-list.component.html',
    styleUrl: './groups-list.component.scss'
})

export class GroupsListComponent implements OnInit {
    role: UserRole = "ROLE_PROFESSOR";
    
    title = "";
    subtitle = "";
    description = "";
    statusOptions: StatusOption[] = [];
    
    status = signal<string>("ativos"); // 🔹 status selecionado
    groups = signal<Group[]>([]);
    currentPage = signal(1);
    itemsPerPage = 6;
    
    ngOnInit() {
        const config = this.getConfigByRole(this.role);
        this.title = config.title;
        this.subtitle = config.subtitle;
        this.description = config.description;
        this.statusOptions = config.statusOptions;
        this.groups.set(this.getMockGroups());
    }
    
    getConfigByRole(role: UserRole): RoleConfig {
        const baseConfig: Record<UserRole, RoleConfig> = {
            ROLE_ESTUDANTE: {
                title: "Grupos que você participa",
                subtitle: "Veja seus grupos e suas atividades.",
                description:
                "Acesse o material compartilhado e acompanhe o progresso dos grupos.",
                statusOptions: [
                    { key: "ativos", label: "Ativos" },
                    { key: "convidado", label: "Convites Pendentes" },
                    { key: "arquivado", label: "Arquivados" },
                ],
            },
            ROLE_PROFESSOR: {
                title: "Seus Grupos e Turmas",
                subtitle: "Gerencie suas turmas e os grupos de alunos.",
                description:
                "Acompanhe os grupos que você criou e veja suas atividades.",
                statusOptions: [
                    { key: "ativos", label: "Ativos" },
                    { key: "encerrado", label: "Encerrados" },
                    { key: "aguardando", label: "Aguardando Aprovação" },
                ],
            },
            ROLE_ADMIN: {
                title: "Gerenciamento de Todos os Grupos",
                subtitle: "Administre todos os grupos existentes na plataforma.",
                description:
                "Visualize e monitore os grupos criados por professores e alunos.",
                statusOptions: [
                    { key: "todos", label: "Todos" },
                    { key: "ativos", label: "Ativos" },
                    { key: "inativos", label: "Inativos" },
                    { key: "bloqueado", label: "Bloqueados" },
                ],
            },
        };
        
        return baseConfig[role] ?? baseConfig.ROLE_ESTUDANTE;
    }
    
    updateStatus(key: string) {
        this.status.set(key);
    }
    
    getMockGroups(): Group[] {
        return [
            {
                logo: "💻",
                logoBgColor: "#E0F2FE",
                title: "Programação Avançada",
                description:
                "Projetos e desafios em Java e C++ para aprimorar lógica e algoritmos.",
                tags: ["Java", "C++", "Algoritmos"],
                status: "ativos",
            },
            {
                logo: "🧩",
                logoBgColor: "#FEF3C7",
                title: "Engenharia de Software",
                description:
                "Discuta arquitetura, padrões de projeto e boas práticas de desenvolvimento.",
                tags: ["Arquitetura", "Padrões de Projeto", "Scrum"],
                status: "encerrado",
            },
            {
                logo: "🗄️",
                logoBgColor: "#DCFCE7",
                title: "Banco de Dados II",
                description:
                "Exercícios e projetos práticos sobre modelagem e consultas SQL.",
                tags: ["PostgreSQL", "Modelagem", "SQL"],
                status: "aguardando",
            },
        ];
    }
    
    filteredGroups() {
        const current = this.status();
        if (current === "todos") return this.groups();
        return this.groups().filter((g) => g.status === current);
    }
    
    paginatedGroups() {
        const filtered = this.filteredGroups();
        const start = (this.currentPage() - 1) * this.itemsPerPage;
        return filtered.slice(start, start + this.itemsPerPage);
    }
    
    tabs = signal<Tab[]>([]);
}
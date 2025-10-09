import { Component, OnInit, signal, computed, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTaskCardComponent } from "../../../shared/components/general/generic-task-card/generic-task-card.component";
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";
import { GenericTabNavigationComponent } from "../../../shared/components/general/generic-tab-navigation/generic-tab-navigation.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";

// --- INTERFACES ---
type ActivityStatus = 'current' | 'pending' | 'completed' | 'failed';

interface ActivityOwner {
    name: string;
    role: string;
    avatar: string;
}

interface ActivityUpdate {
    text: string;
    time: string;
    authorAvatar: string;
}

interface Activity {
    id: number;
    icon: string;
    iconIsUrl: boolean;
    company: string;
    statusTag: { text: string; color: string };
    title: string;
    tags: string[];
    owner: ActivityOwner;
    status: ActivityStatus;
    highlighted?: boolean;
    progress: number;
    recentUpdates: ActivityUpdate[];
}

interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: string; // SVG path data
}

@Component({
    selector: 'app-generic-tasks-page',
    imports: [
        CommonModule,
        GenericTaskCardComponent,
        GenericViewPageComponent,
        GenericPageHeaderComponent,
        GenericTabNavigationComponent,
        PagerComponent,
        GenericFloatingPlusButtonComponent
    ],
    templateUrl: './generic-tasks-page.component.html',
    styleUrl: './generic-tasks-page.component.scss'
})
export class GenericTasksPageComponent implements OnInit {
    activities = signal<Activity[]>([]);
    allActivities = signal<Activity[]>([]);
    activeFilter = signal<ActivityStatus | 'all'>('all');
    
    currentPage: WritableSignal<number> = signal(1);
    itemsPerPage: WritableSignal<number> = signal(8);
    totalItems: number = 0;
    
    filteredActivities = computed<Activity[]>(() => {
        let activities = this.allActivities();
        const filter = this.activeFilter();
        if (filter !== 'all') activities = activities.filter(a => a.status === filter);
        
        const statusOrder: Record<ActivityStatus, number> = {
            'current': 1, 'pending': 2, 'completed': 3, 'failed': 4
        };
        
        return [...activities].sort((a, b) => {
            if (a.highlighted && !b.highlighted) return -1;
            if (!a.highlighted && b.highlighted) return 1;
            return statusOrder[a.status] - statusOrder[b.status];
        });
    });
    
    paginatedActivities = computed(() => {
        const start = (this.currentPage() - 1) * this.itemsPerPage();
        const end = start + this.itemsPerPage();
        return this.filteredActivities().slice(start, end);
    });
    
    totalPages = computed(() => Math.ceil(this.filteredActivities().length / this.itemsPerPage()));
    
    // --- Lifecycle ---
    ngOnInit(): void {
        this.loadMockData();
    }
    
    nextPage(): void {
        if (this.currentPage() < this.totalPages()) this.currentPage.update(p => p + 1);
    }
    
    previousPage(): void {
        if (this.currentPage() > 1) this.currentPage.update(p => p - 1);
    }
    
    goToPage(page: number): void {
        if (page < 1) page = 1;
        if (page > this.totalPages()) page = this.totalPages();
        this.currentPage.set(page);
    }
    
    private loadMockData(): void {
        this.allActivities.set([
            { 
                id: 1, 
                icon: 'https://placehold.co/40x40/000000/FFFFFF?text=A',
                iconIsUrl: true,
                company: 'Amazon', 
                statusTag: { text: 'Freelance', color: 'bg-yellow-100 text-yellow-800' },
                title: 'Revisão de Documentação', 
                tags: ['Tempo Parcial', 'Remoto', 'Prioridade Baixa'],
                owner: { name: 'Jake Durham', role: 'Parceiro @Amazon', avatar: 'https://placehold.co/40x40/60A5FA/FFFFFF?text=JD' },
                status: 'pending',
                progress: 15,
                recentUpdates: [
                    { text: 'Iniciou a revisão do primeiro capítulo.', time: '2h atrás', authorAvatar: 'https://placehold.co/40x40/60A5FA/FFFFFF?text=JD'}
                ]
            },
            { 
                id: 2, 
                icon: 'https://placehold.co/40x40/DE3151/FFFFFF?text=F',
                iconIsUrl: true,
                company: 'Figma', 
                statusTag: { text: 'Urgente', color: 'bg-red-100 text-red-800' },
                title: 'Protótipo de Alta Fidelidade', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Alta'],
                owner: { name: 'John Doe', role: 'Designer de Produto @Figma', avatar: 'https://placehold.co/40x40/F472B6/FFFFFF?text=JD' },
                status: 'current',
                highlighted: true,
                progress: 70,
                recentUpdates: [
                    { text: 'Finalizou as telas de login e dashboard.', time: '35m atrás', authorAvatar: 'https://placehold.co/40x40/F472B6/FFFFFF?text=JD'},
                    { text: 'Solicitou feedback da equipe de produto.', time: '1d atrás', authorAvatar: 'https://placehold.co/40x40/F472B6/FFFFFF?text=JD'}
                ]
            },
            { 
                id: 3, 
                icon: 'https://placehold.co/40x40/1877F2/FFFFFF?text=M',
                iconIsUrl: true,
                company: 'Meta', 
                statusTag: { text: 'Equipe', color: 'bg-blue-100 text-blue-800' },
                title: 'Brainstorm de Recursos', 
                tags: ['Tempo Integral', 'Híbrido', 'Prioridade Média'],
                owner: { name: 'Emma Watson', role: 'Aquisição de Talentos @Meta', avatar: 'https://placehold.co/40x40/34D399/FFFFFF?text=EW' },
                status: 'current',
                progress: 45,
                recentUpdates: [
                    { text: 'Agendou a reunião de brainstorm.', time: '3d atrás', authorAvatar: 'https://placehold.co/40x40/34D399/FFFFFF?text=EW'}
                ]
            },
            { 
                id: 4, 
                icon: 'https://placehold.co/40x40/007EE5/FFFFFF?text=D',
                iconIsUrl: true,
                company: 'Dropbox', 
                statusTag: { text: 'Equipe', color: 'bg-blue-100 text-blue-800' },
                title: 'Otimização de Banco de Dados', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Alta'],
                owner: { name: 'Steve Rogers', role: 'Engenheiro de Dados @Dropbox', avatar: 'https://placehold.co/40x40/A78BFA/FFFFFF?text=SR' },
                status: 'completed',
                progress: 100,
                recentUpdates: [
                    { text: 'Deploy da otimização realizado com sucesso.', time: '1sem atrás', authorAvatar: 'https://placehold.co/40x40/A78BFA/FFFFFF?text=SR'}
                ]
            },
            { 
                id: 5, 
                icon: 'https://placehold.co/40x40/1DB954/FFFFFF?text=S',
                iconIsUrl: true,
                company: 'Spotify', 
                statusTag: { text: 'Planejamento', color: 'bg-purple-100 text-purple-800' },
                title: 'Playlist Curation Algorithm', 
                tags: ['Tempo Integral', 'Híbrido', 'Prioridade Alta'],
                owner: { name: 'Diana Prince', role: 'Cientista de Dados @Spotify', avatar: 'https://placehold.co/40x40/FBBF24/FFFFFF?text=DP' },
                status: 'pending',
                progress: 25,
                recentUpdates: [
                    { text: 'Coleta de dados iniciais concluída.', time: '4d atrás', authorAvatar: 'https://placehold.co/40x40/FBBF24/FFFFFF?text=DP'}
                ]
            },
            { 
                id: 6, 
                icon: 'https://placehold.co/40x40/000000/FFFFFF?text=A',
                iconIsUrl: true,
                company: 'Apple', 
                statusTag: { text: 'Revisão', color: 'bg-orange-100 text-orange-800' },
                title: 'UI/UX para iOS 19', 
                tags: ['Tempo Integral', 'Presencial', 'Prioridade Alta'],
                owner: { name: 'Bruce Wayne', role: 'Lead de Design @Apple', avatar: 'https://placehold.co/40x40/F87171/FFFFFF?text=BW' },
                status: 'current',
                progress: 80,
                recentUpdates: [
                    { text: 'Ajustes finais no modo escuro.', time: '6h atrás', authorAvatar: 'https://placehold.co/40x40/F87171/FFFFFF?text=BW'}
                ],
                highlighted: true
            },
            { 
                id: 7, 
                icon: 'https://placehold.co/40x40/E50914/FFFFFF?text=N',
                iconIsUrl: true,
                company: 'Netflix', 
                statusTag: { text: 'Equipe', color: 'bg-blue-100 text-blue-800' },
                title: 'Teste de Carga na API de Streaming', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Média'],
                owner: { name: 'Clark Kent', role: 'Engenheiro SRE @Netflix', avatar: 'https://placehold.co/40x40/38BDF8/FFFFFF?text=CK' },
                status: 'completed',
                progress: 100,
                recentUpdates: [
                    { text: 'Relatório de performance gerado.', time: '2sem atrás', authorAvatar: 'https://placehold.co/40x40/38BDF8/FFFFFF?text=CK'}
                ]
            },
            { 
                id: 8, 
                icon: 'https://placehold.co/40x40/000000/FFFFFF?text=U',
                iconIsUrl: true,
                company: 'Uber', 
                statusTag: { text: 'Urgente', color: 'bg-red-100 text-red-800' },
                title: 'Correção de Bug no GPS', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Crítica'],
                owner: { name: 'Barry Allen', role: 'Engenheiro de Android @Uber', avatar: 'https://placehold.co/40x40/FB923C/FFFFFF?text=BA' },
                status: 'failed',
                progress: 95,
                recentUpdates: [
                    { text: 'Rollback da versão anterior efetuado.', time: '5m atrás', authorAvatar: 'https://placehold.co/40x40/FB923C/FFFFFF?text=BA'}
                ],
                highlighted: true
            },
            { 
                id: 9, 
                icon: 'https://placehold.co/40x40/4267B2/FFFFFF?text=G',
                iconIsUrl: true,
                company: 'Google', 
                statusTag: { text: 'Equipe', color: 'bg-blue-100 text-blue-800' },
                title: 'Campanha de Marketing Q4', 
                tags: ['Tempo Integral', 'Híbrido', 'Prioridade Média'],
                owner: { name: 'Lois Lane', role: 'Gerente de Marketing @Google', avatar: 'https://placehold.co/40x40/C084FC/FFFFFF?text=LL' },
                status: 'current',
                progress: 50,
                recentUpdates: [
                    { text: 'Definição de KPIs da campanha.', time: '1d atrás', authorAvatar: 'https://placehold.co/40x40/C084FC/FFFFFF?text=LL'}
                ]
            },
            { 
                id: 10, 
                icon: 'https://placehold.co/40x40/25D366/FFFFFF?text=W',
                iconIsUrl: true,
                company: 'WhatsApp', 
                statusTag: { text: 'Planejamento', color: 'bg-purple-100 text-purple-800' },
                title: 'Integração com Pagamentos', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Alta'],
                owner: { name: 'Hal Jordan', role: 'Gerente de Produto @WhatsApp', avatar: 'https://placehold.co/40x40/4ADE80/FFFFFF?text=HJ' },
                status: 'pending',
                progress: 10,
                recentUpdates: [
                    { text: 'Documento de requisitos iniciado.', time: '2d atrás', authorAvatar: 'https://placehold.co/40x40/4ADE80/FFFFFF?text=HJ'}
                ]
            },
            { 
                id: 11, 
                icon: 'https://placehold.co/40x40/FFFC00/FFFFFF?text=S',
                iconIsUrl: true,
                company: 'Snapchat', 
                statusTag: { text: 'Revisão', color: 'bg-orange-100 text-orange-800' },
                title: 'Novos Filtros de AR', 
                tags: ['Tempo Parcial', 'Remoto', 'Prioridade Baixa'],
                owner: { name: 'Peter Quill', role: 'Artista 3D @Snapchat', avatar: 'https://placehold.co/40x40/FACC15/FFFFFF?text=PQ' },
                status: 'current',
                progress: 90,
                recentUpdates: [
                    { text: 'Aguardando aprovação do time de design.', time: '8h atrás', authorAvatar: 'https://placehold.co/40x40/FACC15/FFFFFF?text=PQ'}
                ]
            },
            { 
                id: 12, 
                icon: 'https://placehold.co/40x40/1DA1F2/FFFFFF?text=T',
                iconIsUrl: true,
                company: 'Twitter', 
                statusTag: { text: 'Equipe', color: 'bg-blue-100 text-blue-800' },
                title: 'Migração para Nova Infraestrutura', 
                tags: ['Tempo Integral', 'Remoto', 'Prioridade Crítica'],
                owner: { name: 'Arthur Curry', role: 'Engenheiro DevOps @Twitter', avatar: 'https://placehold.co/40x40/22D3EE/FFFFFF?text=AC' },
                status: 'completed',
                progress: 100,
                recentUpdates: [
                    { text: 'Migração concluída com 0 downtime.', time: '3sem atrás', authorAvatar: 'https://placehold.co/40x40/22D3EE/FFFFFF?text=AC'}
                ]
            },
        ]);
    }
}
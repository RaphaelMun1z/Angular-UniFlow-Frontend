import { Component, computed, inject, signal } from '@angular/core';
import { GenericGroupCardComponent } from "../../../../../shared/components/general/generic-group-card/generic-group-card.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../../core/services/auth.service';
import { GenericGroupsPageComponent } from '../../generic-groups-page.component';

export interface Group {
    logo: string;
    logoBgColor: string;
    title: string;
    description: string;
    tags: string[];
}

const generateMockGroups = (prefix: string, count: number): Group[] => {
    const logos = [
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>'
    ];
    const colors = ['bg-indigo-600', 'bg-rose-500', 'bg-slate-900', 'bg-teal-500'];
    
    return Array.from({ length: count }, (_, i) => ({
        title: `${prefix} #${i + 1}`,
        description: `Descrição para o grupo ${prefix.toLowerCase()} número ${i + 1}.`,
        logo: logos[i % logos.length],
        logoBgColor: colors[i % colors.length],
        tags: ['Online', 'Projeto', `${prefix}`],
    }));
};

const ADMIN_GROUPS = generateMockGroups('Admin', 35);
const PROFESSOR_GROUPS = generateMockGroups('Professor', 22);
const ESTUDANTE_GROUPS = generateMockGroups('Estudante', 18);

@Component({
    selector: 'app-groups-list',
    imports: [CommonModule, GenericGroupCardComponent, GenericGroupsPageComponent],
    templateUrl: './groups-list.component.html',
    styleUrl: './groups-list.component.scss'
})

export class GroupsListComponent {
    public authService = inject(AuthService);
    
    public currentPage = signal(1);
    public itemsPerPage = signal(8);
    
    private sourceData = computed<Group[]>(() => {
        const role = this.authService.primaryUserRole();
        switch (role) {
            case 'ROLE_ADMIN':
            return ADMIN_GROUPS;
            case 'ROLE_PROFESSOR':
            return PROFESSOR_GROUPS;
            case 'ROLE_ESTUDANTE':
            return ESTUDANTE_GROUPS;
            default:
            return [];
        }
    });
    
    public totalItems = computed(() => this.sourceData().length);
    
    public paginatedGroups = computed<Group[]>(() => {
        const data = this.sourceData();
        const page = this.currentPage();
        const limit = this.itemsPerPage();
        
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        
        return data.slice(startIndex, endIndex);
    });
}

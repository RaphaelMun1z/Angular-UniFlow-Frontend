import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-admin-groups-search-page',
    imports: [CommonModule],
    templateUrl: './admin-groups-search-page.component.html',
    styleUrl: './admin-groups-search-page.component.scss'
})

export class AdminGroupsSearchPageComponent {
    loading = signal(false);
    searched = signal(false);
    foundGroup = signal<any | null>(null);
    
    mockGroupData: { [key: string]: any } = {
        'TURMA123-CALCULO': {
            id: 'grp_abc123',
            name: 'Turma de Cálculo I',
            type: 'Turma',
            members: '45 / 50',
            creationDate: '01/08/2025',
            status: 'Ativo'
        },
        'ESTUDO456-FISICA': {
            id: 'grp_def456',
            name: 'Grupo de Estudos - Física',
            type: 'Grupo de Estudo',
            members: '12 / 20',
            creationDate: '15/07/2025',
            status: 'Ativo'
        }
    };
    
    searchGroup(code: string) {
        if (!code) return;
        
        this.loading.set(true);
        this.searched.set(false); // Reset searched state
        this.foundGroup.set(null);
        
        setTimeout(() => {
            const group = this.mockGroupData[code.toUpperCase()];
            this.foundGroup.set(group || null);
            this.loading.set(false);
            this.searched.set(true);
        }, 1000); // Simulate network delay
    }
    
    constructor() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}

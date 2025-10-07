import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-student-groups-access-by-invite-code-page',
    imports: [CommonModule],
    templateUrl: './student-groups-access-by-invite-code-page.component.html',
    styleUrl: './student-groups-access-by-invite-code-page.component.scss'
})

export class StudentGroupsAccessByInviteCodePageComponent {
    loading = signal(false);
    searched = signal(false);
    foundGroup = signal<any | null>(null);
    
    mockGroupData: { [key: string]: any } = {
        'TURMA123-CALCULO': {
            name: 'Turma de Cálculo I',
            type: 'Turma',
            members: '45 / 50',
            creator: 'Prof. Dr. Alan Turing',
            status: 'Ativo'
        },
        'ESTUDO456-FISICA': {
            name: 'Grupo de Estudos - Física Quântica',
            type: 'Grupo de Estudo',
            members: '12 / 20',
            creator: 'Marie Curie',
            status: 'Ativo'
        }
    };
    
    findGroup(code: string) {
        if (!code) return;
        
        this.loading.set(true);
        this.searched.set(false);
        this.foundGroup.set(null);
        
        setTimeout(() => {
            const group = this.mockGroupData[code.toUpperCase()];
            this.foundGroup.set(group || null);
            this.loading.set(false);
            this.searched.set(true);
        }, 1000); // Simula atraso da rede
    }
    
    constructor() {
        this.injectFonts();
    }
    
    private injectFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}

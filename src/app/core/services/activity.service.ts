import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// --- INTERFACES (movidas para cá ou para um arquivo .model) ---
export type ActivityStatus = 'current' | 'pending' | 'completed' | 'failed';

export interface ActivityOwner {
    name: string;
    role: string;
    avatar: string;
}

export interface ActivityUpdate {
    text: string;
    time: string;
    authorAvatar: string;
}

export interface Activity {
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

@Injectable({
    providedIn: 'root'
})
export class ActivityService {
    
    // Mock de dados completo que simula sua base de dados no back-end
    private allActivities: Activity[] = [
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
        }
    ];
    
    constructor() { }
    
    // Este método simula a chamada ao back-end
    getActivitiesByStatus(status: string | null): Observable<Activity[]> {
        console.log(`Buscando no 'back-end' atividades com status: ${status}`);
        
        if (!status) {
            return of([]).pipe(delay(500));
        }
        
        const filtered = this.allActivities.filter(a => a.status === status);
        
        return of(filtered).pipe(delay(500)); // Simula latência da rede
    }
}
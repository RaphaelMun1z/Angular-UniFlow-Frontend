import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Professor {
    name: string;
    avatarUrl: string;
}

interface Post {
    id: string;
    author: Professor;
    content: string;
    timestamp: string;
    commentsCount: number;
    likesCount: number;
}

interface GroupDetails {
    id: string;
    title: string;
    description: string;
    bannerUrl: string;
    memberCount: number;
    pendingRequests: number;
}

@Component({
    selector: 'app-teacher-group-class-page',
    imports: [CommonModule],
    templateUrl: './teacher-group-class-page.component.html',
    styleUrl: './teacher-group-class-page.component.scss'
})

export class TeacherGroupClassPageComponent {
    activeTab: 'mural' | 'materiais' | 'membros' | 'configuracoes' = 'mural';
    
    professor: Professor = {
        name: 'Prof. Carlos Aguiar',
        avatarUrl: 'https://i.pravatar.cc/100?u=professor'
    };
    
    group: GroupDetails = {
        id: 'grp_001',
        title: 'Cálculo I - Turma A',
        description: 'Turma oficial da disciplina de Cálculo I, para o primeiro semestre de 2025.',
        bannerUrl: 'https://placehold.co/1200x300/0d9488/ffffff?text=Cálculo+I',
        memberCount: 45,
        pendingRequests: 3,
    };
    
    posts: Post[] = [
        {
            id: 'post_002',
            author: this.professor,
            content: 'Prezados, a data final para entrega do Trabalho 1 foi prorrogada para amanhã, 23:59, sem prejuízo na nota. \n\nQualquer dúvida, me procurem.',
            timestamp: '2025-10-06T14:30:00Z',
            commentsCount: 5,
            likesCount: 22,
        },
        {
            id: 'post_001',
            author: this.professor,
            content: 'Olá, pessoal! Sejam bem-vindos à turma de Cálculo I. O plano de ensino e o cronograma de aulas já estão disponíveis na aba "Materiais". \n\nBons estudos a todos!',
            timestamp: '2025-08-01T09:00:00Z',
            commentsCount: 12,
            likesCount: 38,
        }
    ];
    
    constructor() {
        this.injectFonts();
    }
    
    setActiveTab(tab: 'mural' | 'materiais' | 'membros' | 'configuracoes') {
        this.activeTab = tab;
    }
    
    private injectFonts() {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }
}

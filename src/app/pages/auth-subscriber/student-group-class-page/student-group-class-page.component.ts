import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface User {
    name: string;
    avatarUrl: string;
    role?: 'Professor' | 'Aluno' | 'Monitor';
}

interface Comment {
    id: string;
    author: User;
    content: string;
    timestamp: string;
}

interface Post {
    id: string;
    author: User;
    content: string;
    timestamp: string;
    commentsCount: number;
    likesCount: number;
    likedByUser: boolean;
    comments: Comment[];
}

interface Activity {
    id: string;
    title: string;
    dueDate: string;
    status: 'Pendente' | 'Entregue' | 'Atrasado';
}

interface GroupDetails {
    id: string;
    title: string;
    professor: User;
    description: string;
    bannerUrl: string;
    memberCount: number;
    pendingActivities: number;
}

@Component({
    selector: 'app-student-group-class-page',
    imports: [CommonModule],
    templateUrl: './student-group-class-page.component.html',
    styleUrl: './student-group-class-page.component.scss'
})

export class StudentGroupClassPageComponent {
    activeTab: 'visaoGeral' | 'atividades' | 'membros' | 'materiais' | 'discussoes' = 'visaoGeral';
    
    currentUser: User = {
        name: 'Ana Clara',
        avatarUrl: 'https://i.pravatar.cc/100?img=1'
    }
    
    group: GroupDetails = {
        id: 'grp_001',
        title: 'Cálculo I - Turma A',
        professor: { name: 'Prof. Carlos Aguiar', avatarUrl: 'https://i.pravatar.cc/100?u=professor' },
        description: 'Turma oficial da disciplina de Cálculo I, para o primeiro semestre de 2025.',
        bannerUrl: 'https://placehold.co/1200x300/0d9488/ffffff?text=Cálculo+I',
        memberCount: 45,
        pendingActivities: 2
    };
    
    activities: Activity[] = [
        { id: 'act_01', title: 'Entrega do Trabalho 1', dueDate: '2025-10-07', status: 'Pendente' },
        { id: 'act_02', title: 'Lista de Exercícios - Limites', dueDate: '2025-10-14', status: 'Pendente' }
    ];
    
    posts: Post[] = [
        {
            id: 'post_002',
            author: { name: 'Prof. Carlos Aguiar', avatarUrl: 'https://i.pravatar.cc/100?u=professor' },
            content: 'Prezados, a data final para entrega do Trabalho 1 foi prorrogada para amanhã, 23:59, sem prejuízo na nota. \n\nQualquer dúvida, me procurem.',
            timestamp: '2025-10-06T14:30:00Z',
            commentsCount: 2,
            likesCount: 22,
            likedByUser: false,
            comments: [
                { id: 'c_001', author: { name: 'Bruno Gomes', avatarUrl: 'https://i.pravatar.cc/100?img=2' }, content: 'Obrigado, professor!', timestamp: '2025-10-06T15:00:00Z'},
                { id: 'c_002', author: { name: 'Daniela Faria', avatarUrl: 'https://i.pravatar.cc/100?img=4' }, content: 'Perfeito!', timestamp: '2025-10-06T15:05:00Z'},
            ]
        },
        {
            id: 'post_001',
            author: { name: 'Prof. Carlos Aguiar', avatarUrl: 'https://i.pravatar.cc/100?u=professor' },
            content: 'Olá, pessoal! Sejam bem-vindos à turma de Cálculo I. O plano de ensino e o cronograma de aulas já estão disponíveis na aba "Materiais". \n\nBons estudos a todos!',
            timestamp: '2025-08-01T09:00:00Z',
            commentsCount: 1,
            likesCount: 38,
            likedByUser: true,
            comments: [
                { id: 'c_003', author: { name: 'Ana Clara', avatarUrl: 'https://i.pravatar.cc/100?img=1' }, content: 'Obrigada por compartilhar, professor!', timestamp: '2025-08-01T10:15:00Z'},
            ]
        }
    ];
    
    constructor() {
        this.injectFonts();
    }
    
    setActiveTab(tab: 'visaoGeral' | 'atividades' | 'membros' | 'materiais' | 'discussoes') {
        this.activeTab = tab;
    }
    
    private injectFonts() {
        const interFont = document.createElement('link');
        interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
        interFont.rel = 'stylesheet';
        
        const fontAwesome = document.createElement('link');
        fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        fontAwesome.rel = 'stylesheet';
        
        document.head.appendChild(interFont);
        document.head.appendChild(fontAwesome);
    }
}

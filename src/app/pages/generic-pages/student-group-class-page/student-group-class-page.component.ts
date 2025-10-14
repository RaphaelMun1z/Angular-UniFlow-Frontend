import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Activity, GroupDetails, GroupTab, Post, User } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-student-group-class-page',
    imports: [CommonModule],
    templateUrl: './student-group-class-page.component.html',
    styleUrl: './student-group-class-page.component.scss'
})

export class StudentGroupClassPageComponent implements OnInit {
    
    activeTab: GroupTab = 'visaoGeral';
    currentUser!: User;
    group!: GroupDetails;
    activities: Activity[] = [];
    posts: Post[] = [];
    pendingActivitiesCount = 0;
    
    ngOnInit(): void {
        this.loadMockData();
    }
    
    setActiveTab(tab: GroupTab): void {
        this.activeTab = tab;
    }
    
    private loadMockData(): void {
        this.currentUser = this._mockCurrentUser;
        this.group = this._mockGroup;
        this.activities = this._mockActivities;
        this.posts = this._mockPosts;
        this.pendingActivitiesCount = this._mockActivities.length;
    }
    
    // --- DADOS MOCADOS (MOCK DATA) ---
    
    private readonly _mockCurrentUser: User = {
        id: 'usr_001', // ID adicionado
        name: 'Ana Clara',
        avatar: 'https://i.pravatar.cc/100?img=1',
        role: 'professor'
    };
    
    private readonly _mockGroup: GroupDetails = {
        id: 'grp_001',
        title: 'Cálculo I - Turma A',
        professor: {
            id: 'prof_01',
            name: 'Prof. Carlos Aguiar',
            avatar: 'https://i.pravatar.cc/100?u=professor',
            role: 'professor'
        },
        memberCount: 45,
        membersSample: [
            {
                id: 'usr_002', name: 'Bruno Gomes', avatar: 'https://i.pravatar.cc/100?img=2',
                role: 'professor'
            },
            {
                id: 'usr_003', name: 'Carla Dias', avatar: 'https://i.pravatar.cc/100?img=3',
                role: 'professor'
            },
            {
                id: 'usr_004', name: 'Daniela Faria', avatar: 'https://i.pravatar.cc/100?img=4',
                role: 'professor'
            },
            {
                id: 'usr_005', name: 'Eduardo Lima', avatar: 'https://i.pravatar.cc/100?img=5',
                role: 'professor'
            },
        ]
    };
    
    private readonly _mockActivities: Activity[] = [
        {
            id: 'act_01', title: 'Entrega do Trabalho 1', dueDate: '2025-10-14',
            icon: '',
            iconIsUrl: false,
            company: '',
            statusTag: {
                text: '',
                color: ''
            },
            tags: [],
            owner: undefined,
            status: 'current',
            progress: 0,
            recentUpdates: []
        },
        {
            id: 'act_02', title: 'Lista de Exercícios - Limites', dueDate: '2025-10-21',
            icon: '',
            iconIsUrl: false,
            company: '',
            statusTag: {
                text: '',
                color: ''
            },
            tags: [],
            owner: undefined,
            status: 'current',
            progress: 0,
            recentUpdates: []
        }
    ];
    
    private readonly _mockPosts: Post[] = [
        {
            id: 'post_002',
            author: {
                id: 'prof_01', name: 'Prof. Carlos Aguiar', avatar: 'https://i.pravatar.cc/100?u=professor',
                role: 'professor'
            },
            content: 'Prezados, a data final para entrega do Trabalho 1 foi prorrogada para amanhã, 23:59, sem prejuízo na nota. \n\nQualquer dúvida, me procurem.',
            timestamp: '2025-10-11T14:30:00Z',
            commentsCount: 2,
            likesCount: 22,
            likedByUser: false,
            comments: [
                { id: 'c_001', author: {
                    id: 'usr_002', name: 'Bruno Gomes', avatar: 'https://i.pravatar.cc/100?img=2',
                    role: 'professor'
                }, content: 'Obrigado, professor!', timestamp: '2025-10-11T15:00:00Z'},
                { id: 'c_002', author: {
                    id: 'usr_004', name: 'Daniela Faria', avatar: 'https://i.pravatar.cc/100?img=4',
                    role: 'professor'
                }, content: 'Perfeito!', timestamp: '2025-10-11T15:05:00Z'},
            ]
        },
        {
            id: 'post_001',
            author: {
                id: 'prof_01', name: 'Prof. Carlos Aguiar', avatar: 'https://i.pravatar.cc/100?u=professor',
                role: 'professor'
            },
            content: 'Olá, pessoal! Sejam bem-vindos à turma de Cálculo I. O plano de ensino e o cronograma de aulas já estão disponíveis na aba "Materiais". \n\nBons estudos a todos!',
            timestamp: '2025-08-01T09:00:00Z',
            commentsCount: 1,
            likesCount: 38,
            likedByUser: true,
            comments: [
                { id: 'c_003', author: {
                    id: 'usr_001', name: 'Ana Clara', avatar: 'https://i.pravatar.cc/100?img=1',
                    role: 'professor'
                }, content: 'Obrigada por compartilhar, professor!', timestamp: '2025-08-01T10:15:00Z'},
            ]
        }
    ];
}

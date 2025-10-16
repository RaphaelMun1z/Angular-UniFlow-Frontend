import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from "../../../shared/components/general/safe-html.pipe";
import { CourseProgress, MediaContent, SubscriptionPlan, NavLink, UserRole, User } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-dashboard-page',
    imports: [CommonModule, SafeHtmlPipe],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss'
})

export class DashboardPageComponent implements OnInit {
    // --- SIGNALS ---
    currentUser = signal<User>({ id: '0', name: '', avatar: '', role: 'professor' });
    
    // Dados Estudante
    courseProgress = signal<CourseProgress[]>([]);
    continueWatching = signal<MediaContent[]>([]);
    mentors = signal<User[]>([]);
    
    // Dados Admin
    subscriptionPlans = signal<SubscriptionPlan[]>([]);
    monthlyRevenue = signal<number>(0);
    totalRevenue = signal<number>(0);
    
    // --- DADOS MOCKADOS ---
    private allUsers: User[] = [
        { id: '1', name: 'Admin Geral', role: 'admin', avatar: 'https://placehold.co/100x100/A78BFA/FFFFFF?text=A' },
        { id: '2', name: 'Prof. Ana Silva', role: 'professor', avatar: 'https://placehold.co/100x100/F472B6/FFFFFF?text=P' },
        { id: '3', name: 'Jason Ranti', role: 'estudante', avatar: 'https://placehold.co/100x100/60A5FA/FFFFFF?text=J' },
    ];
    
    private allMentors: User[] = [
        { id: '5', name: 'Padhang Satrio', role: 'professor', avatar: 'https://placehold.co/100x100/34D399/FFFFFF?text=PS' },
        { id: '6', name: 'Zakir Horizontal', role: 'professor', avatar: 'https://placehold.co/100x100/FBBF24/FFFFFF?text=ZH' },
        { id: '7', name: 'Leonardo Samuel', role: 'professor', avatar: 'https://placehold.co/100x100/F87171/FFFFFF?text=LS' },
    ];
    
    // --- ÍCONES ---
    private icons = {
        dashboard: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>',
        inbox: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
        lesson: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v11.494m-9-5.747h18"></path>',
        tasks: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>',
        groups: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>',
        code: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>',
        brush: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>'
    };
    
    ngOnInit(): void {
        this.setUserRole('estudante');
    }
    
    // --- LÓGICA DE VISUALIZAÇÃO ---
    navigationLinks = computed<NavLink[]>(() => {
        return [
            { label: 'Dashboard', icon: this.icons.dashboard },
            { label: 'Inbox', icon: this.icons.inbox },
            { label: 'Lesson', icon: this.icons.lesson },
            { label: 'Task', icon: this.icons.tasks },
            { label: 'Group', icon: this.icons.groups },
        ];
    });
    
    setUserRole(role: UserRole): void {
        const userForRole = this.allUsers.find(u => u.role === role)!;
        this.currentUser.set(userForRole);
        if (role === 'admin') this.updateAdminData();
        if (role === 'estudante') this.updateEstudanteData();
    }
    
    getButtonClass(role: UserRole): string {
        const baseClass = 'sim-button';
        return this.currentUser().role === role 
        ? `${baseClass} sim-button-active` 
        : `${baseClass} sim-button-inactive`;
    }
    
    // --- MÉTODOS DE ATUALIZAÇÃO DE DADOS ---
    private updateAdminData(): void {
        this.subscriptionPlans.set([
            { name: 'Plano Básico', subscribers: 1250 },
            { name: 'Plano Professor Pro', subscribers: 430 },
            { name: 'Plano Institucional', subscribers: 85 },
        ]);
        this.monthlyRevenue.set(48590.50);
        this.totalRevenue.set(782430.00);
    }
    
    private updateEstudanteData(): void {
        this.courseProgress.set([
            { title: 'UI/UX Design', watched: 2, total: 8, icon: this.icons.brush, color: 'bg-purple-400' },
            { title: 'Branding', watched: 3, total: 8, icon: this.icons.brush, color: 'bg-pink-400' },
            { title: 'Front-End', watched: 6, total: 12, icon: this.icons.code, color: 'bg-blue-400' },
        ]);
        this.continueWatching.set([
            {
                title: "Guia de Iniciante para se Tornar um Desenvolvedor Front-End", category: 'Front-End', mentor: 'Leonardo Samuel', mentorAvatar: 'https://placehold.co/100x100/F87171/FFFFFF?text=LS', thumbnailUrl: 'https://placehold.co/600x400/333/FFF?text=Video+1',
                mentorName: ''
            },
            {
                title: "Otimizando a Experiência do Usuário com o Melhor UI/UX", category: 'UI/UX Design', mentor: 'Bayu Salto', mentorAvatar: 'https://placehold.co/100x100/60A5FA/FFFFFF?text=BS', thumbnailUrl: 'https://placehold.co/600x400/444/FFF?text=Video+2',
                mentorName: ''
            },
            {
                title: "Revivendo e Atualizando a Imagem da sua Empresa", category: 'Branding', mentor: 'Padhang Satrio', mentorAvatar: 'https://placehold.co/100x100/34D399/FFFFFF?text=PS', thumbnailUrl: 'https://placehold.co/600x400/555/FFF?text=Video+3',
                mentorName: ''
            },
        ]);
        this.mentors.set(this.allMentors);
    }
}
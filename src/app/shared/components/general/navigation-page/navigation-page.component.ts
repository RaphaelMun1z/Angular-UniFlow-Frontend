import { Component, inject, Input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LinkCardComponent } from '../link-card/link-card.component';
import { SectionHeaderAltComponent } from '../section-header-alt/section-header-alt.component';

interface NavLink {
    title: string;
    description: string;
    link: string;
    icon: string;
}

const STUDENT_NAV_LINKS: NavLink[] = [
    {
        title: 'Meus Grupos',
        description: 'Acesse todas as suas turmas e grupos de estudo.',
        link: '/app/estudante/grupos/listar',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`
    },
    {
        title: 'Entrar com Código',
        description: 'Use um código de convite para entrar em uma turma.',
        link: '/app/estudante/grupos/ingressar',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 017.743-5.743z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M7 15l-4-4m0 0l4-4m-4 4h18"></path>`
    },
    {
        title: 'Criar Grupo de Estudo',
        description: 'Inicie seu próprio grupo para colaborar com colegas.',
        link: '/app/estudante/grupos/cadastrar',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>`
    }
];

const TEACHER_NAV_LINKS: NavLink[] = [
    {
        title: 'Gerenciar Turmas',
        description: 'Crie, edite e administre todas as suas turmas.',
        link: '/app/professor/turmas/listar',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>`
    },
    {
        title: 'Gerar Códigos de Convite',
        description: 'Crie códigos para que os alunos possam entrar nas turmas.',
        link: '/app/professor/turmas/convites',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563.097-1.159.162-1.77.162a9 9 0 1 1 5.488-15.116.75.75 0 0 1 .043 1.052l-2.284 3.424a.75.75 0 0 1-1.28-.532V4.5a3 3 0 0 0-3-3m-3.75 3.75a3 3 0 0 0-3 3v3.75a.75.75 0 0 1-1.28.532l-2.284-3.424a.75.75 0 0 1 .043-1.052A9 9 0 0 1 9 3.75Z" />`
    },
    {
        title: 'Banco de Atividades',
        description: 'Crie e gerencie atividades para aplicar em suas turmas.',
        link: '/app/professor/atividades',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />`
    }
];

const ADMIN_NAV_LINKS: NavLink[] = [
    {
        title: 'Painel de Gerenciamento',
        description: 'Visão geral da plataforma, usuários e planos.',
        link: '/admin/dashboard',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />`
    },
    {
        title: 'Gerenciar Usuários',
        description: 'Edite, adicione ou remova usuários da plataforma.',
        link: '/admin/users',
        icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.682A3.375 3.375 0 0 1 15 12.25Z" />`
    }
];

@Component({
    selector: 'app-navigation-page',
    imports: [SectionHeaderAltComponent, LinkCardComponent],
    templateUrl: './navigation-page.component.html',
    styleUrl: './navigation-page.component.scss'
})

export class NavigationPageComponent {
    userType: string | undefined = "student";
    
    sanitizer = inject(DomSanitizer);
    
    @Input() title: string = 'Meus Grupos e Comunidades';
    @Input() subtitle: string = 'Acesse seus grupos, junte-se a novas turmas e colabore com seus colegas.';
    
    userNavLinks = signal<NavLink[]>([]);
    
    ngOnInit(): void {
        this.loadNavLinks();
    }
    
    private loadNavLinks(): void {
        switch (this.userType) {
            case 'student':
            this.userNavLinks.set(STUDENT_NAV_LINKS);
            // Você também pode customizar o título e subtítulo aqui se quiser
            this.title = 'Área do Estudante';
            this.subtitle = 'Acesse seus grupos, junte-se a novas turmas e colabore.';
            break;
            case 'teacher':
            this.userNavLinks.set(TEACHER_NAV_LINKS);
            this.title = 'Painel do Professor';
            this.subtitle = 'Gerencie suas turmas, atividades e convites.';
            break;
            case 'admin':
            this.userNavLinks.set(ADMIN_NAV_LINKS);
            this.title = 'Administração';
            this.subtitle = 'Gerencie todos os aspectos da plataforma.';
            break;
            default:
            // Define um valor padrão ou deixa vazio caso o perfil não seja reconhecido
            this.userNavLinks.set([]);
            break;
        }
    }
}

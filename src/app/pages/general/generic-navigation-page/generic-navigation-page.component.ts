import { Component } from '@angular/core';
import { UserRedirectionPanelPageComponent } from "../../../shared/components/general/user-redirection-panel-page/user-redirection-panel-page.component";

interface ManagementCard {
    icon: string;
    title: string;
    description: string;
    route: string;
    iconBgColor: string;
    iconTextColor: string;
}

interface ManagementTab {
    label: string;
    cards: ManagementCard[];
}

@Component({
    selector: 'app-generic-navigation-page',
    imports: [UserRedirectionPanelPageComponent],
    templateUrl: './generic-navigation-page.component.html',
    styleUrl: './generic-navigation-page.component.scss'
})
export class GenericNavigationPageComponent {
    userLevel: 'admin' | 'professor' | 'estudante' = 'estudante';
    
    adminTabs: ManagementTab[] = [
        {
            label: 'Usuários',
            cards: [
                {
                    icon: 'person',
                    title: 'Gerenciar Usuários',
                    description: 'Adicione, edite ou remova usuários do sistema.',
                    route: '/admin/usuarios',
                    iconBgColor: 'bg-blue-100',
                    iconTextColor: 'text-blue-700'
                }
            ]
        },
        {
            label: 'Grupos',
            cards: [
                {
                    icon: 'groups',
                    title: 'Gerenciar Grupos',
                    description: 'Crie, edite ou exclua grupos de usuários.',
                    route: '/admin/grupos',
                    iconBgColor: 'bg-green-100',
                    iconTextColor: 'text-green-700'
                }
            ]
        },
        {
            label: 'Configurações',
            cards: [
                {
                    icon: 'settings',
                    title: 'Configurações do Sistema',
                    description: 'Ajuste preferências e parâmetros globais.',
                    route: '/admin/configuracoes',
                    iconBgColor: 'bg-gray-100',
                    iconTextColor: 'text-gray-700'
                }
            ]
        }
    ];
    
    professorTabs: ManagementTab[] = [
        {
            label: 'Minhas Turmas',
            cards: [
                {
                    icon: 'class',
                    title: 'Turmas',
                    description: 'Gerencie suas turmas e alunos.',
                    route: '/professor/turmas',
                    iconBgColor: 'bg-indigo-100',
                    iconTextColor: 'text-indigo-700'
                }
            ]
        },
        {
            label: 'Notas',
            cards: [
                {
                    icon: 'grading',
                    title: 'Notas',
                    description: 'Lance e visualize notas dos alunos.',
                    route: '/professor/notas',
                    iconBgColor: 'bg-yellow-100',
                    iconTextColor: 'text-yellow-700'
                }
            ]
        },
        {
            label: 'Conteúdos',
            cards: [
                {
                    icon: 'menu_book',
                    title: 'Conteúdos',
                    description: 'Adicione e gerencie materiais de aula.',
                    route: '/professor/conteudos',
                    iconBgColor: 'bg-pink-100',
                    iconTextColor: 'text-pink-700'
                }
            ]
        }
    ];
    
    estudanteTabs: ManagementTab[] = [
        {
            label: 'Disciplinas',
            cards: [
                {
                    icon: 'school',
                    title: 'Minhas Disciplinas',
                    description: 'Acesse conteúdos e atividades das disciplinas.',
                    route: '/estudante/disciplinas',
                    iconBgColor: 'bg-blue-100',
                    iconTextColor: 'text-blue-700'
                }
            ]
        },
        {
            label: 'Notas',
            cards: [
                {
                    icon: 'grading',
                    title: 'Minhas Notas',
                    description: 'Consulte suas notas e avaliações.',
                    route: '/estudante/notas',
                    iconBgColor: 'bg-green-100',
                    iconTextColor: 'text-green-700'
                }
            ]
        },
        {
            label: 'Grupos',
            cards: [
                {
                    icon: 'groups',
                    title: 'Meus Grupos',
                    description: 'Participe e interaja em grupos de estudo.',
                    route: '/estudante/grupos',
                    iconBgColor: 'bg-purple-100',
                    iconTextColor: 'text-purple-700'
                }
            ]
        }
    ];
    
    constructor() {}
}
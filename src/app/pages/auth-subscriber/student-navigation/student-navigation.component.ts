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
    selector: 'app-student-navigation',
    imports: [UserRedirectionPanelPageComponent],
    templateUrl: './student-navigation.component.html',
    styleUrl: './student-navigation.component.scss'
})

export class StudentNavigationComponent {
    tabs: ManagementTab[] = [
        {
            label: 'Gerenciamento Principal',
            cards: [
                {
                    title: 'Gerenciar Grupos',
                    description: 'Crie, edite e organize seus grupos de estudo e turmas.',
                    route: '/admin/groups',
                    iconBgColor: 'bg-indigo-100',
                    iconTextColor: 'text-indigo-600',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962a3.75 3.75 0 0 1 5.25 0m-5.25 0a3.75 3.75 0 0 0-5.25 0M3 13.5a9 9 0 0 1 18 0a3.75 3.75 0 0 1-7.5 0a3.75 3.75 0 0 0-7.5 0Z" /></svg>`
                },
                {
                    title: 'Gerenciar Assinantes',
                    description: 'Visualize e administre todos os usuários e seus status.',
                    route: '/admin/subscribers',
                    iconBgColor: 'bg-sky-100',
                    iconTextColor: 'text-sky-600',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.682A3.375 3.375 0 0 1 15 12.25z" /></svg>`
                },
                {
                    title: 'Gerenciar Planos',
                    description: 'Configure os diferentes tipos de planos e assinaturas.',
                    route: '/admin/plans',
                    iconBgColor: 'bg-amber-100',
                    iconTextColor: 'text-amber-600',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`
                }
            ]
        },
        {
            label: 'Configurações',
            cards: [
                {
                    title: 'Configurações da Conta',
                    description: 'Ajuste as informações principais e preferências da sua conta.',
                    route: '/settings/account',
                    iconBgColor: 'bg-gray-100',
                    iconTextColor: 'text-gray-600',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>`
                },
                {
                    title: 'Integrações',
                    description: 'Conecte ferramentas e serviços de terceiros à sua plataforma.',
                    route: '/settings/integrations',
                    iconBgColor: 'bg-green-100',
                    iconTextColor: 'text-green-600',
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>`
                }
            ]
        }
    ];
}

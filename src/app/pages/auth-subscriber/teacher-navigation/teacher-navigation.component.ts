import { Component, signal } from '@angular/core';
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

interface Tab {
    id: string;
    label: string;
    route: string; // Caminho para o RouterLink
}

@Component({
    selector: 'app-teacher-navigation',
    imports: [UserRedirectionPanelPageComponent],
    templateUrl: './teacher-navigation.component.html',
    styleUrl: './teacher-navigation.component.scss'
})

export class TeacherNavigationComponent {
    tabs = signal<Tab[]>([
        { id: 'pendentes', label: 'Pendentes', route: '/tasks/pendentes' },
        { id: 'atrasadas', label: 'Atrasadas', route: '/tasks/atrasadas' },
        { id: 'entregues',  label: 'Entregues',  route: '/tasks/entregues' },
        { id: 'avaliadas', label: 'Avaliadas', route: '/tasks/avaliadas' },
    ]);
}

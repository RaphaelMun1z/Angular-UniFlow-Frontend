import { Component, Input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericPageHeaderComponent } from "../generic-page-header/generic-page-header.component";
import { GenericTabNavigationComponent } from "../generic-tab-navigation/generic-tab-navigation.component";
import { GenericFloatingPlusButtonComponent } from "../generic-floating-plus-button/generic-floating-plus-button.component";
import { GenericNavigationCardComponent, Operation } from "../generic-navigation-card/generic-navigation-card.component";
import { PagerComponent } from "../pager/pager.component";
import { GenericViewPageComponent } from "../../../../pages/general/generic-view-page/generic-view-page.component";

interface Tab {
    id: string;
    label: string;
    route: string; // Caminho para o RouterLink
}

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
    selector: 'app-user-redirection-panel-page',
    imports: [CommonModule, RouterModule, GenericPageHeaderComponent, GenericTabNavigationComponent, GenericFloatingPlusButtonComponent, GenericNavigationCardComponent, PagerComponent, GenericViewPageComponent],
    templateUrl: './user-redirection-panel-page.component.html',
    styleUrl: './user-redirection-panel-page.component.scss'
})

export class UserRedirectionPanelPageComponent {
    @Input() title: string = 'Meu Painel';
    @Input() subtitle: string = 'Acesse as principais áreas administrativas da sua conta.';
    //@Input() tabs: ManagementTab[] = [];
    
    currentPage: WritableSignal<number> = signal(1);
    itemsPerPage: WritableSignal<number> = signal(8);
    totalItems: number = 0;
    
    activeTabIndex = 0;
    
    public operations: Operation[] = [
        {
            id: 1,
            title: 'Criar Grupo',
            description: 'Inicie um novo grupo de trabalho do zero.',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
            iconBgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            route: '/grupos/criar', // Rota de destino
        },
        {
            id: 2,
            title: 'Editar Grupo',
            description: 'Modifique um grupo existente.',
            icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z',
            iconBgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            route: '/grupos/editar', // Rota de destino
        },
        {
            id: 3,
            title: 'Deletar Grupo',
            description: 'Remova permanentemente um grupo.',
            icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
            iconBgColor: 'bg-red-100',
            iconColor: 'text-red-600',
            route: '/grupos/deletar', // Rota de destino
        },
    ];
    
    selectTab(index: number) {
        this.activeTabIndex = index;
    }
    
    tabs = signal<Tab[]>([
        { id: 'pendentes', label: 'Pendentes', route: '/tasks/pendentes' },
        { id: 'atrasadas', label: 'Atrasadas', route: '/tasks/atrasadas' },
        { id: 'entregues',  label: 'Entregues',  route: '/tasks/entregues' },
        { id: 'avaliadas', label: 'Avaliadas', route: '/tasks/avaliadas' },
    ]);
}
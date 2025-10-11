import { Component, signal, WritableSignal } from "@angular/core";
import { GenericGroupCardComponent } from "../../../shared/components/general/generic-group-card/generic-group-card.component";
import { CommonModule } from "@angular/common";
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";
import { GenericTabNavigationComponent } from "../../../shared/components/general/generic-tab-navigation/generic-tab-navigation.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";

export interface Group {
    logo: string;
    logoBgColor: string;
    title: string;
    description: string;
    tags: string[];
}

interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: string; // SVG path data
}

interface Tab {
    id: string;
    label: string;
    route: string; // Caminho para o RouterLink
}

@Component({
    selector: 'app-generic-groups-page',
    imports: [CommonModule, GenericGroupCardComponent, GenericViewPageComponent, PagerComponent, GenericFloatingPlusButtonComponent, GenericTabNavigationComponent, GenericPageHeaderComponent],
    templateUrl: './generic-groups-page.component.html',
    styleUrl: './generic-groups-page.component.scss'
})

export class GenericGroupsPageComponent {
    title = signal<string>('');
    
    groups: Group[] = [
        {
            title: 'UI / UX Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
            logoBgColor: 'bg-indigo-600',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'Sr. Product Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
            logoBgColor: 'bg-rose-500',
            tags: ['Full Time', 'Min 1 Year', 'Mid Level'],
        },
        {
            title: 'User Experience Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
            logoBgColor: 'bg-slate-900',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'UI / UX Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
            logoBgColor: 'bg-indigo-600',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'Sr. Product Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
            logoBgColor: 'bg-rose-500',
            tags: ['Full Time', 'Min 1 Year', 'Mid Level'],
        },
        {
            title: 'User Experience Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
            logoBgColor: 'bg-slate-900',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'UI / UX Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
            logoBgColor: 'bg-indigo-600',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'Sr. Product Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
            logoBgColor: 'bg-rose-500',
            tags: ['Full Time', 'Min 1 Year', 'Mid Level'],
        },
        {
            title: 'User Experience Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
            logoBgColor: 'bg-slate-900',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'UI / UX Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
            logoBgColor: 'bg-indigo-600',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
        {
            title: 'Sr. Product Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
            logoBgColor: 'bg-rose-500',
            tags: ['Full Time', 'Min 1 Year', 'Mid Level'],
        },
        {
            title: 'User Experience Designer',
            description: 'The User Experience Designer position exists to create compelling and elegant digital user experiences through design...',
            logo: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
            logoBgColor: 'bg-slate-900',
            tags: ['Full Time', 'Min 1 Year', 'Senior Level'],
        },
    ];
    
    sidebarLinks = signal<SidebarLink[]>([
        { id: 'grupos', label: 'Meus Grupos', link: '/app/grupos', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />' },
        { id: 'tasks', label: 'Minhas Atividades', link: '/app/atividades', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' }
    ]);
    
    totalItems: number = 1;
    itemsPerPage: WritableSignal<number> = signal(1);
    currentPage: WritableSignal<number> = signal(1);
    
    tabs = signal<Tab[]>([
        { id: 'pendentes', label: 'Pendentes', route: '/tasks/pendentes' },
        { id: 'atrasadas', label: 'Atrasadas', route: '/tasks/atrasadas' },
        { id: 'entregues',  label: 'Entregues',  route: '/tasks/entregues' },
        { id: 'avaliadas', label: 'Avaliadas', route: '/tasks/avaliadas' },
    ]);
}
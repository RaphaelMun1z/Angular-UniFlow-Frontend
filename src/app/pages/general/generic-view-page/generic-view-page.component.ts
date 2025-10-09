import { Component, Input, signal } from '@angular/core';
import { GenericAsideComponent } from "../../../shared/components/general/generic-aside/generic-aside.component";

interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: string; // SVG path data
}

@Component({
    selector: 'app-generic-view-page',
    imports: [GenericAsideComponent],
    templateUrl: './generic-view-page.component.html',
    styleUrl: './generic-view-page.component.scss'
})

export class GenericViewPageComponent {
    @Input() title: string = 'Página';
    
    sidebarLinks = signal<SidebarLink[]>([
        { id: 'grupos', label: 'Meus Grupos', link: '/app/grupos', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />' },
        { id: 'tasks', label: 'Minhas Atividades', link: '/app/atividades', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' },
        { id: 'panel', label: 'Meu Painel', link: '/app/painel', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' },
    ]);
    
    totalItems = 100;
    itemsPerPage = signal(12); 
    currentPage = signal(1); 
    
    onPageChange(page: number) {
        this.currentPage.set(page);
    }
}

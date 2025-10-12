import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../safe-html.pipe';
import { LogoLinkComponent } from "../logo-link/logo-link.component";
import { RouterLink } from '@angular/router';

// --- INTERFACES E TIPOS ---
interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: string; // SVG path data
}

@Component({
    selector: 'app-generic-aside',
    imports: [CommonModule, SafeHtmlPipe, LogoLinkComponent, RouterLink],
    templateUrl: './generic-aside.component.html',
    styleUrl: './generic-aside.component.scss'
})

export class GenericAsideComponent implements OnInit, OnDestroy {
    isMinimized = signal(false);
    activeSidebarLink = signal('lessons');
    isMobileView = signal(false);
    
    sidebarLinks = signal<SidebarLink[]>([
        { id: 'grupos', label: 'Meus Grupos', link: '/app/me/grupos', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />' },
        { id: 'tasks', label: 'Minhas Atividades', link: '/app/me/atividades', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' },
        { id: 'panel', label: 'Meu Painel', link: '/app/painel', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' },
    ]);
    
    private userExpandedBeforeDesktop = false;
    
    ngOnInit(): void {
        this.checkIfMobile();
        window.addEventListener('resize', this.handleResize);
    }
    
    ngOnDestroy(): void {
        window.removeEventListener('resize', this.handleResize);
    }
    
    private handleResize = () => this.checkIfMobile();
    
    checkIfMobile(): void {
        const isMobile = window.innerWidth < 768;
        this.isMobileView.set(isMobile);
        
        if (isMobile && !this.isMinimized()) {
            this.isMinimized.set(true);
        }
        
        if (!isMobile && this.isMinimized() && this.userExpandedBeforeDesktop) {
            this.isMinimized.set(false);
        }
    }
    
    // --- Métodos Públicos ---
    setActiveSidebarLink(linkId: string): void {
        this.activeSidebarLink.set(linkId);
    }
    
    toggleSidebar(): void {
        const newValue = !this.isMinimized();
        this.isMinimized.set(newValue);
        
        if (!this.isMobileView() && !newValue) {
            this.userExpandedBeforeDesktop = true;
        }
    }
}
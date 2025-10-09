import { Component, OnInit, signal, Input } from '@angular/core';
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

export class GenericAsideComponent implements OnInit {
    isMinimized = signal(false);
    activeSidebarLink = signal('lessons');
    isMobileView = signal(false);
    
    @Input() sidebarLinks = signal<SidebarLink[]>([]);
    
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
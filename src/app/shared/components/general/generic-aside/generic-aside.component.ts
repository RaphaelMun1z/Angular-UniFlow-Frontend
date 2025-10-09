import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../safe-html.pipe';

// --- INTERFACES E TIPOS ---
interface SidebarLink {
    id: string;
    label: string;
    icon: string; // SVG path data
}

@Component({
    selector: 'app-generic-aside',
    imports: [CommonModule, SafeHtmlPipe],
    templateUrl: './generic-aside.component.html',
    styleUrl: './generic-aside.component.scss'
})

export class GenericAsideComponent implements OnInit {
    // --- Signals ---
    isMinimized = signal(false);
    activeSidebarLink = signal('lessons');
    isMobileView = signal(false);
    
    sidebarLinks = signal<SidebarLink[]>([
        { id: 'lessons', label: 'Lessons', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />' },
        { id: 'dictionary', label: 'Dictionary', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v11.494m-9-8.994v11.494m18-11.494v11.494M5.25 8.25h13.5M5.25 11.25h13.5m-13.5 3h13.5M21 21H3a2 2 0 01-2-2V5a2 2 0 012-2h18a2 2 0 012 2v14a2 2 0 01-2 2z" />' },
        { id: 'homework', label: 'Home work', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />' },
        { id: 'tests', label: 'Tests', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />' },
        { id: 'achievements', label: 'Achievements', icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />' },
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
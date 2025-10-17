import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoLinkComponent } from "../logo-link/logo-link.component";
import { RouterLink, RouterModule } from '@angular/router';
import { Bell, ChevronLeft, ChevronRight, CircleCheck, ClipboardList, House, LayoutDashboard, LoaderCircle, LucideAngularModule, LucideIconData, Trash2, Users } from "lucide-angular";

interface SidebarLink {
    id: string;
    label: string;
    link: string;
    icon: LucideIconData;
}

@Component({
    selector: 'app-generic-aside',
    imports: [CommonModule, RouterModule, LogoLinkComponent, RouterLink, LucideAngularModule],
    templateUrl: './generic-aside.component.html',
    styleUrl: './generic-aside.component.scss'
})

export class GenericAsideComponent implements OnInit, OnDestroy {
    readonly Users = Users;
    readonly ClipboardList = ClipboardList;
    readonly LayoutDashboard = LayoutDashboard;
    readonly ChevronLeft = ChevronLeft;
    readonly ChevronRight = ChevronRight;
    readonly House = House;
    readonly CircleCheck = CircleCheck;
    readonly Trash2 = Trash2;
    readonly LoaderCircle = LoaderCircle;
    readonly Bell = Bell;
    
    isMinimized = signal(false);
    activeSidebarLink = signal('lessons');
    isMobileView = signal(false);
    
    sidebarLinks = signal<SidebarLink[]>([
        { id: 'home', label: 'Início', link: '/app/home', icon: this.House },
        { id: 'grupos', label: 'Meus Grupos', link: '/app/me/grupos', icon: this.Users },
        { id: 'tasks', label: 'Minhas Atividades', link: '/app/me/atividades', icon: this.ClipboardList },
        { id: 'panel', label: 'Meu Painel', link: '/app/painel', icon: this.LayoutDashboard },
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
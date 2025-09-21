import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AvatarDropdownComponent } from "../avatar-dropdown/avatar-dropdown.component";

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterModule, AvatarDropdownComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit{
    customItems = [
        {
            label: 'Dashboard',
            link: '/user/dashboard',
            icon: 'fas fa-tachometer-alt'
        },
        // ... outros itens
    ];
    
    isMobileMenuOpen = false;
    currentFragment: string | null = null;
    isLoggedIn: boolean = true; // Simula o estado de login, pode ser dinâmico
    isNotificationMenuOpen: boolean = false;
    
    navItems = [
        { label: 'Recursos', link: '/', fragment: 'features', isActive: false },
        { label: 'Planos', link: '/', fragment: 'pricing', isActive: false },
        { label: 'Depoimentos', link: '/', fragment: 'testimonials', isActive: false },
        { label: 'FAQ', link: '/', fragment: 'faq', isActive: false }
    ];
    
    constructor(private router: Router) {}
    
    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Fecha o menu mobile ao navegar
                this.closeMobileMenu();
                
                // Atualiza os itens ativos
                this.updateActiveItems();
            }
        });
        
        // Verifica o fragmento inicial
        this.updateActiveItems();
    }
    
    updateActiveItems(): void {
        const currentUrl = this.router.url;
        const fragment = currentUrl.split('#')[1] || null;
        
        this.navItems.forEach(item => {
            item.isActive = item.fragment === fragment;
        });
    }
    
    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    
    closeMobileMenu(): void {
        this.isMobileMenuOpen = false;
    }
    
    // Fecha o menu mobile se a tela for redimensionada para desktop
    @HostListener('window:resize', ['$event'])
    onResize(event: Event): void {
        const target = event.target as Window;
        if (target.innerWidth >= 640) { // sm breakpoint do Tailwind
            this.closeMobileMenu();
        }
    }

    toggleNotificationMenu(){
        this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    }
}

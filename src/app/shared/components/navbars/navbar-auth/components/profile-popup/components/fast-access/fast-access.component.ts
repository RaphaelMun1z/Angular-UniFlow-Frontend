import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Pin, BookMarked, LucideIconData, X, Bell, CreditCard, FileText, LayoutDashboard, Send, SquarePlus, UsersRound, Bolt } from 'lucide-angular';

interface DynamicLink {
    path: string;
    label: string;
    icon: LucideIconData;
    iconBgColor: string;
    iconTextColor: string;
    isPinned: boolean;
}

@Component({
    selector: 'app-fast-access',
    imports: [CommonModule, RouterLink, LucideAngularModule],
    templateUrl: './fast-access.component.html',
    styleUrl: './fast-access.component.scss'
})

export class FastAccessComponent {
    readonly Pin = Pin;
    readonly X = X; // Disponibiliza o ícone X para o template
    
    isPopupVisible = signal(false); // Controla a visibilidade do popup
    
    teacherLinks: DynamicLink[] = [
        {
            path: '/app/me/pagamentos',
            label: 'Pagamentos',
            icon: CreditCard,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            isPinned: true
        },
        {
            path: '/app/me/notificacoes',
            label: 'Notificações',
            icon: Bell,
            iconBgColor: 'bg-blue-100',
            iconTextColor: 'text-blue-600',
            isPinned: true
        },
        {
            path: '/app/me/dashboard-professor',
            label: 'Dashboard',
            icon: LayoutDashboard,
            iconBgColor: 'bg-purple-100',
            iconTextColor: 'text-purple-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos',
            label: 'Meus Grupos',
            icon: UsersRound,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos/administrar',
            label: 'Administrar Grupos',
            icon: Bolt,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos/cadastrar',
            label: 'Criar Grupo',
            icon: SquarePlus,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: false
        },
        {
            path: '/app/me/atividades/entregas',
            label: 'Atividades - Entregar',
            icon: Send,
            iconBgColor: 'bg-sky-100',
            iconTextColor: 'text-sky-600',
            isPinned: false
        },
        {
            path: '/app/me/atividades/modelos',
            label: 'Atividades - Modelos',
            icon: FileText,
            iconBgColor: 'bg-orange-100',
            iconTextColor: 'text-orange-600',
            isPinned: false
        },
        {
            path: '/app/me/atividades',
            label: 'Gerenciar Avaliações',
            icon: BookMarked,
            iconBgColor: 'bg-rose-100',
            iconTextColor: 'text-rose-600',
            isPinned: true
        }
    ];
    
    links = signal<DynamicLink[]>(this.teacherLinks);
    
    pinnedLinks = computed(() => this.links().filter(link => link.isPinned));
    unpinnedLinks = computed(() => this.links().filter(link => !link.isPinned));
    
    openPopup(): void {
        this.isPopupVisible.set(true);
    }
    
    closePopup(): void {
        this.isPopupVisible.set(false);
    }
    
    // NOVO MÉTODO: Fecha o popup apenas se o clique for no fundo (overlay)
    closePopupIfOverlay(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.closePopup();
        }
    }
    
    @HostListener('document:keydown.escape', ['$event'])
    onKeydownHandler() {
        if (this.isPopupVisible()) {
            this.closePopup();
        }
    }
    
    togglePin(event: MouseEvent | KeyboardEvent, linkToToggle: DynamicLink) {
        event.preventDefault();
        event.stopPropagation();
        
        // Atualiza o estado 'isPinned' do item clicado
        this.links.update(currentLinks =>
            currentLinks.map(link =>
                link.path === linkToToggle.path
                ? { ...link, isPinned: !link.isPinned }
                : link
            )
        );
        
        // Se não houver mais itens para fixar, fecha o popup
        if (this.unpinnedLinks().length === 0) {
            this.closePopup();
        }
    }
}
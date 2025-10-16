import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Pin, LucideIconData, X, Bell, CreditCard, LayoutDashboard, UsersRound, User, Award, LayoutList, Layers2, LayoutTemplate, SquareArrowUp, GraduationCap, LibraryBig } from 'lucide-angular';

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
    
    allLinks: DynamicLink[] = [
        {
            path: '/app/me',
            label: 'Perfil',
            icon: User,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            isPinned: true
        },
        {
            path: '/app/me/assinaturas',
            label: 'Assinatura',
            icon: Award,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            isPinned: false
        },
        {
            path: '/app/me/pagamentos',
            label: 'Pagamentos',
            icon: CreditCard,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            isPinned: false
        },
        {
            path: '/app/me/notificacoes',
            label: 'Notificações',
            icon: Bell,
            iconBgColor: 'bg-blue-100',
            iconTextColor: 'text-blue-600',
            isPinned: false
        },
        {
            path: '/app/me/dashboard',
            label: 'Dashboard',
            icon: LayoutDashboard,
            iconBgColor: 'bg-purple-100',
            iconTextColor: 'text-purple-600',
            isPinned: true
        },
        {
            path: '/app/me/grupos',
            label: 'Meus Grupos',
            icon: UsersRound,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: false
        },
        {
            path: '/app/painel/grupos',
            label: 'Administrar Grupos',
            icon: LayoutTemplate,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos/ingressar',
            label: 'Ingressar em um Grupo',
            icon: SquareArrowUp,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos/cadastrar/turma',
            label: 'Criar Turma',
            icon: GraduationCap,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/painel/grupos/cadastrar/grupo-de-estudo',
            label: 'Criar Grupo de Estudo',
            icon: LibraryBig,
            iconBgColor: 'bg-teal-100',
            iconTextColor: 'text-teal-600',
            isPinned: true
        },
        {
            path: '/app/me/atividades',
            label: 'Minhas Atividades',
            icon: LayoutList,
            iconBgColor: 'bg-sky-100',
            iconTextColor: 'text-sky-600',
            isPinned: false
        },
        {
            path: '/app/me/atividades/modelos',
            label: 'Atividades Modelo',
            icon: Layers2,
            iconBgColor: 'bg-sky-100',
            iconTextColor: 'text-sky-600',
            isPinned: false
        },
    ];
    
    links = signal<DynamicLink[]>(this.allLinks);
    
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
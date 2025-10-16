import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Plus, Users, Pin, BookMarked, LucideIconData, ChartLine, X } from 'lucide-angular';

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
            path: '/app/professor/grupos/cadastrar',
            label: 'Criar Turma',
            icon: Plus,
            iconBgColor: 'bg-indigo-100',
            iconTextColor: 'text-indigo-600',
            isPinned: true
        },
        {
            path: '/app/professor/analytics',
            label: 'Analytics',
            icon: ChartLine,
            iconBgColor: 'bg-sky-100',
            iconTextColor: 'text-sky-600',
            isPinned: false
        },
        {
            path: '/app/professor/avaliacoes',
            label: 'Gerenciar Avaliações',
            icon: BookMarked,
            iconBgColor: 'bg-rose-100',
            iconTextColor: 'text-rose-600',
            isPinned: true
        },
        {
            path: '/app/professor/alunos',
            label: 'Alunos',
            icon: Users,
            iconBgColor: 'bg-amber-100',
            iconTextColor: 'text-amber-600',
            isPinned: false
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
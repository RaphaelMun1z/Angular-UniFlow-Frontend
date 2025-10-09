import { Component, ChangeDetectionStrategy, signal, ViewChildren, ElementRef, QueryList, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// --- INTERFACES E TIPOS ---
interface Tab {
    id: string;
    label: string;
}

// --- INTERFACES E TIPOS ---
interface Tab {
    id: string;
    label: string;
}

@Component({
    selector: 'app-generic-tab-navigation',
    imports: [CommonModule],
    templateUrl: './generic-tab-navigation.component.html',
    styleUrl: './generic-tab-navigation.component.scss'
})

export class GenericTabNavigationComponent {
    // --- Element References ---
    @ViewChildren('tabButton', { read: ElementRef }) tabElements!: QueryList<ElementRef>;
    
    // --- Signals ---
    tabs = signal<Tab[]>([
        { id: 'pendentes', label: 'Pendentes' },
        { id: 'atrasadas', label: 'Atrasadas' },
        { id: 'entregues', label: 'Entregues' },
        { id: 'avaliadas', label: 'Avaliadas' },
    ]);
    activeTab = signal<string>('pendentes');
    
    indicatorWidth = signal(0);
    indicatorPosition = signal(0);
    
    // --- Lifecycle Hooks ---
    ngAfterViewInit() {
        // Use a small timeout to ensure the view is fully rendered before calculating
        setTimeout(() => this.updateIndicator(this.activeTab()), 0);
    }
    
    // --- Event Listeners ---
    @HostListener('window:resize')
    onResize() {
        // Recalculate indicator position on window resize for responsiveness
        this.updateIndicator(this.activeTab());
    }
    
    // --- Public Methods ---
    setActiveTab(tabId: string): void {
        this.activeTab.set(tabId);
        this.updateIndicator(tabId);
    }
    
    // --- Private Methods ---
    private updateIndicator(tabId: string): void {
        const index = this.tabs().findIndex(t => t.id === tabId);
        
        // Ensure tabElements are available
        if (this.tabElements && this.tabElements.length > index) {
            const activeTabElement = this.tabElements.toArray()[index].nativeElement;
            this.indicatorWidth.set(activeTabElement.offsetWidth);
            this.indicatorPosition.set(activeTabElement.offsetLeft);
        }
    }
}

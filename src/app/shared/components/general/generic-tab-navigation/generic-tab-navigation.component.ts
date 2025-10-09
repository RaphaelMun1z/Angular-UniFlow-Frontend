import { Component, ChangeDetectionStrategy, signal, ViewChildren, ElementRef, QueryList, AfterViewInit, HostListener, ViewChild } from '@angular/core';
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
    @ViewChildren('tabButton', { read: ElementRef }) tabElements!: QueryList<ElementRef>;
    @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
    
    tabs = signal<Tab[]>([
        { id: 'pendentes', label: 'Pendentes' },
        { id: 'atrasadas', label: 'Atrasadas' },
        { id: 'entregues', label: 'Entregues' },
        { id: 'avaliadas', label: 'Avaliadas' },
        { id: 'revisadas', label: 'Revisadas' },
        { id: 'canceladas', label: 'Canceladas' },
        { id: 'finalizadas', label: 'Finalizadas' },
    ]);
    
    activeTab = signal<string>('pendentes');
    indicatorWidth = signal(0);
    indicatorPosition = signal(0);
    
    private isDragging = false;
    private startX = 0;
    private scrollLeft = 0;
    
    ngAfterViewInit() {
        setTimeout(() => this.updateIndicator(this.activeTab()), 0);
        this.enableDragScroll();
    }
    
    @HostListener('window:resize')
    onResize() {
        this.updateIndicator(this.activeTab());
    }
    
    setActiveTab(tabId: string): void {
        this.activeTab.set(tabId);
        this.updateIndicator(tabId);
        this.scrollTabIntoView(tabId);
    }
    
    private updateIndicator(tabId: string): void {
        const index = this.tabs().findIndex((t) => t.id === tabId);
        if (this.tabElements && this.tabElements.length > index) {
            const el = this.tabElements.toArray()[index].nativeElement;
            this.indicatorWidth.set(el.offsetWidth);
            this.indicatorPosition.set(el.offsetLeft);
        }
    }
    
    private enableDragScroll(): void {
        const container = this.scrollContainer.nativeElement;
        
        container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.startX = e.pageX - container.offsetLeft;
            this.scrollLeft = container.scrollLeft;
            container.classList.add('dragging');
        });
        
        container.addEventListener('mouseleave', () => {
            this.isDragging = false;
            container.classList.remove('dragging');
        });
        
        container.addEventListener('mouseup', () => {
            this.isDragging = false;
            container.classList.remove('dragging');
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - this.startX) * 1; // controle da velocidade
            container.scrollLeft = this.scrollLeft - walk;
        });
        
        // Touch (mobile)
        let startTouchX = 0;
        container.addEventListener('touchstart', (e) => {
            startTouchX = e.touches[0].pageX;
            this.scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX;
            const walk = (x - startTouchX) * 1.2;
            container.scrollLeft = this.scrollLeft - walk;
        });
    }
    
    private scrollTabIntoView(tabId: string): void {
        const index = this.tabs().findIndex((t) => t.id === tabId);
        if (this.tabElements && this.tabElements.length > index) {
            const el = this.tabElements.toArray()[index].nativeElement;
            el.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    }
}

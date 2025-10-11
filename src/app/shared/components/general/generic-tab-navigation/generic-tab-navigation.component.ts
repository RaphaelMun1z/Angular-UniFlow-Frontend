import { Component, signal, ViewChildren, ElementRef, QueryList, AfterViewInit, HostListener, ViewChild, afterNextRender, input, EventEmitter, Output, runInInjectionContext, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tab } from '../../../interfaces/User.model';

@Component({
    selector: 'app-generic-tab-navigation',
    imports: [CommonModule, RouterModule],
    templateUrl: './generic-tab-navigation.component.html',
    styleUrl: './generic-tab-navigation.component.scss'
})

export class GenericTabNavigationComponent implements AfterViewInit {
    tabs = input.required<Tab[]>();
    
    @Output() tabSelected = new EventEmitter<string>();
    
    activeTabId = signal<string>('');
    
    @ViewChildren('tabLink', { read: ElementRef }) tabElements!: QueryList<ElementRef>;
    @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
    
    indicatorWidth = signal(0);
    indicatorPosition = signal(0);
    
    private isDragging = false;
    private startX = 0;
    private scrollLeft = 0;
    
    // Injeta o Injector para ser usado com runInInjectionContext
    private injector = inject(Injector);
    
    constructor() {
        // Lógica inicial que pode ser executada na criação do componente
    }
    
    ngOnChanges() {
        const currentTabs = this.tabs();
        if (currentTabs.length > 0 && !this.activeTabId()) {
            this.selectTab(currentTabs[0].id);
        }
    }
    
    ngAfterViewInit() {
        this.enableDragScroll();
        // Garante que o indicador seja atualizado após a renderização inicial
        runInInjectionContext(this.injector, () => {
            afterNextRender(() => {
                this.updateIndicatorAndScroll();
            });
        });
    }
    
    @HostListener('window:resize')
    onResize() {
        this.updateIndicatorAndScroll();
    }
    
    selectTab(tabId: string): void {
        this.activeTabId.set(tabId);
        this.tabSelected.emit(tabId);
        
        runInInjectionContext(this.injector, () => {
            afterNextRender(() => {
                this.updateIndicatorAndScroll();
            });
        });
    }
    
    private updateIndicatorAndScroll(): void {
        const activeTabElement = this.tabElements?.find(el => 
            el.nativeElement.getAttribute('data-tab-id') === this.activeTabId()
        );
        
        if (activeTabElement) {
            const el = activeTabElement.nativeElement;
            this.indicatorWidth.set(el.offsetWidth);
            this.indicatorPosition.set(el.offsetLeft);
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }
    
    private enableDragScroll(): void {
        const container = this.scrollContainer.nativeElement;
        
        container.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            container.classList.add('grabbing');
            this.startX = e.pageX - container.offsetLeft;
            this.scrollLeft = container.scrollLeft;
        });
        
        const stopDragging = () => {
            this.isDragging = false;
            container.classList.remove('grabbing');
        };
        
        container.addEventListener('mouseleave', stopDragging);
        container.addEventListener('mouseup', stopDragging);
        
        container.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - this.startX) * 1;
            container.scrollLeft = this.scrollLeft - walk;
        });
    }
}
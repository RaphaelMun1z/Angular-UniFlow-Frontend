import { Component, ChangeDetectionStrategy, signal, ViewChildren, ElementRef, QueryList, AfterViewInit, HostListener, ViewChild, afterNextRender, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

interface Tab {
    id: string;
    label: string;
    route: string; // Caminho para o RouterLink
}

@Component({
    selector: 'app-generic-tab-navigation',
    imports: [CommonModule, RouterModule],
    templateUrl: './generic-tab-navigation.component.html',
    styleUrl: './generic-tab-navigation.component.scss'
})

export class GenericTabNavigationComponent implements AfterViewInit {
    tabs = input.required<Tab[]>();
    
    @ViewChildren('tabLink', { read: ElementRef }) tabElements!: QueryList<ElementRef>;
    @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
    
    private router = inject(Router);
    
    indicatorWidth = signal(0);
    indicatorPosition = signal(0);
    
    private isDragging = false;
    private startX = 0;
    private scrollLeft = 0;
    
    constructor() {
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe(() => {
            afterNextRender(() => {
                this.updateIndicatorAndScroll();
            });
        });
    }
    
    ngAfterViewInit() {
        this.enableDragScroll();
    }
    
    @HostListener('window:resize')
    onResize() {
        this.updateIndicatorAndScroll();
    }
    
    private updateIndicatorAndScroll(): void {
        const activeTabElement = this.tabElements?.find(el => 
            el.nativeElement.classList.contains('active-tab')
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
            this.startX = e.pageX - container.offsetLeft;
            this.scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => { this.isDragging = false; });
        container.addEventListener('mouseup', () => { this.isDragging = false; });
        
        container.addEventListener('mousemove', (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - this.startX) * 1;
            container.scrollLeft = this.scrollLeft - walk;
        });
    }
}

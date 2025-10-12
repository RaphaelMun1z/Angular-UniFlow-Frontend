import { Component, signal, ViewChildren, ElementRef, QueryList, AfterViewInit, ViewChild, afterNextRender, runInInjectionContext, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router'; import { Tab } from '../../../interfaces/User.model';
import { filter, startWith } from 'rxjs';

@Component({
    selector: 'app-generic-tab-navigation',
    imports: [CommonModule, RouterModule],
    templateUrl: './generic-tab-navigation.component.html',
    styleUrl: './generic-tab-navigation.component.scss'
})

export class GenericTabNavigationComponent implements AfterViewInit {
    tabs: Tab[] = [
        { id: '1', label: 'Grupos', route: '/app/painel/grupos' },
        { id: '2', label: 'Atividades', route: '/app/painel/atividades' }
    ];
    
    @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
    @ViewChildren('tabLink', { read: ElementRef }) tabElements!: QueryList<ElementRef>;
    
    indicatorWidth = signal(0);
    indicatorPosition = signal(0);
    
    private isDragging = false;
    private startX = 0;
    private scrollLeft = 0;
    
    private injector = inject(Injector);
    private router = inject(Router);
    
    constructor() {
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            startWith(null)
        ).subscribe(() => {
            runInInjectionContext(this.injector, () => {
                afterNextRender(() => this.updateIndicatorBasedOnActiveRoute());
            });
        });
    }
    
    ngAfterViewInit(): void {
        this.enableDragScroll();
    }
    
    private updateIndicatorBasedOnActiveRoute(): void {
        const activeElement = this.tabElements?.find(el => 
            el.nativeElement.classList.contains('tab-active')
        );
        
        if (activeElement) {
            const el = activeElement.nativeElement;
            this.indicatorWidth.set(el.offsetWidth);
            this.indicatorPosition.set(el.offsetLeft);
            
            el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            this.indicatorWidth.set(0);
        }
    }
    
    private enableDragScroll(): void {
        const container = this.scrollContainer.nativeElement;
        const startDragging = (e: MouseEvent) => {
            this.isDragging = true;
            container.classList.add('is-grabbing');
            this.startX = e.pageX - container.offsetLeft;
            this.scrollLeft = container.scrollLeft;
        };
        const stopDragging = () => {
            this.isDragging = false;
            container.classList.remove('is-grabbing');
        };
        const doDrag = (e: MouseEvent) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - this.startX) * 1.5;
            container.scrollLeft = this.scrollLeft - walk;
        };
        container.addEventListener('mousedown', startDragging);
        container.addEventListener('mouseleave', stopDragging);
        container.addEventListener('mouseup', stopDragging);
        container.addEventListener('mousemove', doDrag);
    }
}
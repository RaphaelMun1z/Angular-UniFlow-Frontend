// Arquivo: tooltip.directive.ts

import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
    Placement,
} from '@floating-ui/dom';

@Directive({
    // 1. CORREÇÃO: O seletor agora é '[tooltip]' para corresponder ao seu HTML
    selector: '[tooltip]', 
    standalone: true
})
export class TooltipDirective {
    // 2. CORREÇÃO: Simplificamos o @Input. Agora a propriedade se chama 'tooltip'
    @Input() tooltip = ''; 
    @Input() placement: Placement = 'top';
    
    private tooltipElement: HTMLElement | null = null;
    private arrowElement: HTMLElement | null = null;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    
    @HostListener('mouseenter')
    onMouseEnter(): void {
        // 3. CORREÇÃO: Usamos 'this.tooltip' em vez de 'this.tooltipText'
        if (!this.tooltip || this.tooltipElement) {
            return;
        }
        this.createTooltip();
        this.updatePosition();
    }
    
    @HostListener('mouseleave')
    onMouseLeave(): void {
        if (this.tooltipElement) {
            this.renderer.removeClass(this.tooltipElement, 'active');
            setTimeout(() => {
                if (this.tooltipElement) {
                    this.renderer.removeChild(document.body, this.tooltipElement);
                    this.tooltipElement = null;
                }
            }, 200);
        }
    }
    
    private createTooltip(): void {
        this.tooltipElement = this.renderer.createElement('div');
        this.renderer.addClass(this.tooltipElement, 'tooltip-popup');
        // 4. CORREÇÃO: Usamos 'this.tooltip' aqui também
        this.tooltipElement!.textContent = this.tooltip;
        
        this.arrowElement = this.renderer.createElement('div');
        this.renderer.addClass(this.arrowElement, 'tooltip-arrow');
        this.renderer.appendChild(this.tooltipElement, this.arrowElement);
        
        this.renderer.appendChild(document.body, this.tooltipElement);
    }
    
    private updatePosition(): void {
        if (!this.tooltipElement || !this.arrowElement) return;
        
        const hostElement = this.elementRef.nativeElement;
        const arrowEl = this.arrowElement;
        
        computePosition(hostElement, this.tooltipElement, {
            placement: this.placement,
            middleware: [
                offset(10),
                flip(),
                shift(),
                arrow({ element: arrowEl }),
            ],
        }).then(({ x, y, middlewareData, placement }) => {
            if (!this.tooltipElement) return;
            
            this.tooltipElement.style.left = `${x}px`;
            this.tooltipElement.style.top = `${y}px`;
            
            if (middlewareData.arrow) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow;
                
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement.split('-')[0]];
                
                if (staticSide) {
                    Object.assign(arrowEl.style, {
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${-arrowEl.offsetWidth / 2}px`,
                    });
                }
            }
            
            this.renderer.addClass(this.tooltipElement, 'active');
        });
    }
}
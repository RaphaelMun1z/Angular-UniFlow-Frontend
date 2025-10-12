import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, input, Input, model, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pager',
    imports: [CommonModule, FormsModule],
    templateUrl: './pager.component.html',
    styleUrl: './pager.component.scss'
})
export class PagerComponent {
    showPageSizeDropdown = false;
    
    togglePageSizeDropdown() {
        this.showPageSizeDropdown = !this.showPageSizeDropdown;
    }
    
    currentPage = model.required<number>();
    itemsPerPage = model.required<number>();
    totalItems = input.required<number>();
    
    public pageSizeOptions: number[] = [10, 25, 50, 100];
    
    totalPages = computed(() => {
        return Math.ceil(this.totalItems() / this.itemsPerPage());
    });
    
    startItem = computed(() => {
        if (this.totalItems() === 0) return 0;
        return (this.currentPage() - 1) * this.itemsPerPage() + 1;
    });
    
    endItem = computed(() => {
        return Math.min(this.currentPage() * this.itemsPerPage(), this.totalItems());
    });
    
    visiblePages = computed(() => {
        const total = this.totalPages();
        const current = this.currentPage();
        const pageBuffer = 2;
        const pages = new Set<number>();
        
        pages.add(1);
        
        for (let i = Math.max(2, current - pageBuffer); i <= Math.min(total - 1, current + pageBuffer); i++) {
            pages.add(i);
        }
        
        if (total > 1) {
            pages.add(total);
        }
        
        const result: number[] = [];
        let lastPage = 0;
        for (const page of Array.from(pages).sort((a, b) => a - b)) {
            if (page > lastPage + 1) {
                result.push(-1); // -1 representa a elipse "..."
            }
            result.push(page);
            lastPage = page;
        }
        return result;
    });
    
    // --- MÉTODOS DE NAVEGAÇÃO ---
    
    goToPage(page: number | string): void {
        const pageNum = Number(page);
        if (pageNum >= 1 && pageNum <= this.totalPages()) {
            this.currentPage.set(pageNum);
        }
    }
    
    nextPage(): void {
        this.goToPage(this.currentPage() + 1);
    }
    
    previousPage(): void {
        this.goToPage(this.currentPage() - 1);
    }
    
    onPageSizeChange(size: number) {
        this.itemsPerPage.set(size);
        this.currentPage.set(1); // reset página ao mudar o tamanho
    }
}

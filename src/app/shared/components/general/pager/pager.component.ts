import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-pager',
    imports: [CommonModule, FormsModule],
    templateUrl: './pager.component.html',
    styleUrl: './pager.component.scss'
})
export class PagerComponent {
    // --- Inputs como WritableSignals ---
    @Input() totalItems!: number;
    @Input() itemsPerPage!: WritableSignal<number>;
    @Input() currentPage!: WritableSignal<number>;
    
    @Output() currentPageChange = new EventEmitter<number>();
    @Output() itemsPerPageChange = new EventEmitter<number>();
    
    pageSizeOptions = [10, 20, 50, 100];
    jumpPage = 1;
    
    totalPages = computed(() => Math.ceil(this.totalItems / this.itemsPerPage()));
    
    visiblePages(): number[] {
        const total = this.totalPages();
        const current = this.currentPage();
        const pages: number[] = [];
        
        if (total <= 7) {
            for (let i = 1; i <= total; i++) pages.push(i);
        } else {
            pages.push(1);
            if (current > 4) pages.push(-1);
            const start = Math.max(2, current - 1);
            const end = Math.min(total - 1, current + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (current < total - 3) pages.push(-1);
            pages.push(total);
        }
        
        return pages;
    }
    
    goToPage(page: number) {
        if (page < 1) page = 1;
        if (page > this.totalPages()) page = this.totalPages();
        this.currentPage.set(page);
        this.currentPageChange.emit(page);
        this.jumpPage = page;
    }
    
    previousPage() {
        if (this.currentPage() > 1) this.goToPage(this.currentPage() - 1);
    }
    
    nextPage() {
        if (this.currentPage() < this.totalPages()) this.goToPage(this.currentPage() + 1);
    }
    
    goToFirstPage() {
        this.goToPage(1);
    }
    
    goToLastPage() {
        this.goToPage(this.totalPages());
    }
    
    setItemsPerPage(value: number) {
        this.itemsPerPage.set(value);
        this.itemsPerPageChange.emit(value);
        this.goToFirstPage();
    }
}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mvv-card',
    imports: [],
    templateUrl: './mvv-card.component.html',
    styleUrl: './mvv-card.component.scss'
})
export class MvvCardComponent {
    @Input({ required: true }) title!: string;
    @Input({ required: true }) icon!: string;
    
    @Input() description: string | undefined;
    @Input() listItems: string[] | undefined;
    
    @Input() iconColor = 'blue';
    
    get iconClasses(): string {
        switch (this.iconColor.toLowerCase()) {
            case 'indigo':
            return 'bg-indigo-100 text-indigo-600';
            case 'green':
            return 'bg-green-100 text-green-600';
            case 'blue':
            default:
            return 'bg-blue-100 text-blue-600';
        }
    }
}

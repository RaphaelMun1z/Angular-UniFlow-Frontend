import { Component, Input, OnInit } from '@angular/core';
import { loadActivities } from '../../store/activities.actions';
import { Store } from '@ngrx/store';
import { IActivityItem } from '../../store/activities.state';

@Component({
    selector: 'app-home-page',
    imports: [],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
    @Input() activities?: IActivityItem[];
    
    constructor(private store: Store) {}
    
    ngOnInit(): void {
        this.store.dispatch(loadActivities());
    }
}

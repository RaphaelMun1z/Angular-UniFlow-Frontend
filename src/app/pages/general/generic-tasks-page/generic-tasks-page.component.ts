import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { GenericTaskCardComponent } from "../../../shared/components/general/generic-task-card/generic-task-card.component";
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";
import { GenericTabNavigationComponent } from "../../../shared/components/general/generic-tab-navigation/generic-tab-navigation.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";

import { ActivityService, Activity } from '../../../core/services/activity.service'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, distinctUntilChanged, switchMap } from 'rxjs';
import { Tab } from '../../../shared/interfaces/User.model';

@Component({
    selector: 'app-generic-tasks-page',
    imports: [ CommonModule, GenericTaskCardComponent, RouterModule, GenericViewPageComponent, GenericPageHeaderComponent, GenericTabNavigationComponent, PagerComponent, GenericFloatingPlusButtonComponent],
    templateUrl: './generic-tasks-page.component.html',
    styleUrl: './generic-tasks-page.component.scss'
})

export class GenericTasksPageComponent {
    private route = inject(ActivatedRoute);
    private activityService = inject(ActivityService);
    
    title = signal('Minhas Atividades');
    
    tabs = signal<Tab[]>([
        { id: 'current', label: 'Em Andamento'},
        { id: 'pending', label: 'Pendentes'},
        { id: 'completed', label: 'Concluídas'},
        { id: 'failed', label: 'Avaliadas'},
    ]);
    
    private activities$ = this.route.queryParamMap.pipe(
        map(params => params.get('status') || 'current'),
        distinctUntilChanged(),
        switchMap(status => this.activityService.getActivitiesByStatus(status))
    );
    
    filteredActivities = toSignal(this.activities$, { initialValue: [] as Activity[] });
    
    totalItems = 0;
    itemsPerPage = signal(8);
    currentPage = signal(1);
}
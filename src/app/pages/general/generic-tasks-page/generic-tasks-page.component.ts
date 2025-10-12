import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { GenericViewPageComponent } from "../generic-view-page/generic-view-page.component";
import { GenericPageHeaderComponent } from "../../../shared/components/general/generic-page-header/generic-page-header.component";
import { PagerComponent } from "../../../shared/components/general/pager/pager.component";
import { GenericFloatingPlusButtonComponent } from "../../../shared/components/general/generic-floating-plus-button/generic-floating-plus-button.component";

import { ActivityService, Activity } from '../../../core/services/activity.service'; 
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
    selector: 'app-generic-tasks-page',
    imports: [CommonModule, RouterModule, GenericViewPageComponent, GenericPageHeaderComponent, PagerComponent, GenericFloatingPlusButtonComponent],
    templateUrl: './generic-tasks-page.component.html',
    styleUrl: './generic-tasks-page.component.scss'
})

export class GenericTasksPageComponent {
    private route = inject(ActivatedRoute);
    private activityService = inject(ActivityService);
    
    title = signal('Atividades');
    
    private activities$ = this.route.queryParamMap.pipe(
        map(params => params.get('status') || 'current'),
        distinctUntilChanged(),
        switchMap(status => this.activityService.getActivitiesByStatus(status))
    );
    
    filteredActivities = toSignal(this.activities$, { initialValue: [] as Activity[] });
    
    totalDeItensDoSeuSignal = signal(157);
    paginaAtualSignal = signal(1);
    itensPorPaginaSignal = signal(10);
}
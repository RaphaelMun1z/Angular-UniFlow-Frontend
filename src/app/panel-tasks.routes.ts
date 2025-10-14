import { Routes } from '@angular/router';
import { TasksOperationsComponent } from './pages/generic-pages/generic-management-page-template/components/tasks-operations/tasks-operations.component';
import { ActivityDetailPageComponent } from './pages/activity-pages/activity-page/activity-detail-page.component';
import { ActivityWallPageComponent } from './pages/activity-pages/activity-wall-page/activity-wall-page.component';

export const PANEL_TASKS_ROUTES: Routes = [
    {
        path: '',
        component: TasksOperationsComponent
    },
    {
        path: 'mural',
        component: ActivityWallPageComponent
    },
    {
        path: ':id',
        component: ActivityDetailPageComponent
    },
];
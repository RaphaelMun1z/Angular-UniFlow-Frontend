import { Routes } from '@angular/router';
import { ActivityWallPageComponent } from './pages/auth-subscriber/activity-pages/activity-wall-page/activity-wall-page.component';
import { ActivityDetailPageComponent } from './pages/auth-subscriber/activity-pages/activity-page/activity-detail-page.component';
import { TasksOperationsComponent } from './pages/general/generic-management-page/components/tasks-operations/tasks-operations.component';

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
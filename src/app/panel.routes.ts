import { Routes } from '@angular/router';
import { GenericManagementPageComponent } from './pages/general/generic-management-page/generic-management-page.component';

export const PANEL_ROUTES: Routes = [
    { 
        path: '', 
        component: GenericManagementPageComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'grupos', 
                pathMatch: 'full'
            },
            {
                path: 'grupos',
                loadChildren: () => import('./panel-groups.routes').then(m => m.PANEL_GROUPS_ROUTES)
            },
            {
                path: 'atividades',
                loadChildren: () => import('./panel-tasks.routes').then(m => m.PANEL_TASKS_ROUTES)
            },
        ]
    },
];
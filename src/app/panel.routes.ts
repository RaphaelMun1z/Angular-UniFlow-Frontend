import { Routes } from '@angular/router';
import { GenericManagementPageTemplateComponent } from './pages/generic-pages/generic-management-page-template/generic-management-page-template.component';

export const PANEL_ROUTES: Routes = [
    { 
        path: '', 
        component: GenericManagementPageTemplateComponent,
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
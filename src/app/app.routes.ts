import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './pages/no-auth/general-pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./public.routes').then(m => m.PUBLIC_ROUTES)
    },
    {
        path: 'pagamentos',
        loadChildren: () => import('./payment.routes').then(m => m.PAYMENT_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'app',
        children: [
            { 
                path: '', 
                redirectTo: 'painel',
                pathMatch: 'full' 
            },
            {
                path: 'painel',
                loadChildren: () => import('./panel.routes').then(m => m.PANEL_ROUTES)
            },
            {
                path: 'me',
                loadChildren: () => import('./profile.routes').then(m => m.PROFILE_ROUTES)
            },
            {
                path: 'admin',
                loadChildren: () => import('./admin.routes').then(m => m.ADMIN_ROUTES)
            },
        ]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
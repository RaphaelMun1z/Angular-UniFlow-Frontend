import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    if (authService.isAuthenticated() && authService.hasRole('ROLE_ADMIN')) {
        console.log(route)
        console.log(state)
        return true;
    } else {
        router.navigate(['/app/dashboard']);
        return true;
    }
};

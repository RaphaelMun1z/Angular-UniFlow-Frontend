import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    
    if (authService.isAuthenticated()) {
        return true;
    } else {
        return true;
        router.navigate(['/login']);
        return false;
    }
};
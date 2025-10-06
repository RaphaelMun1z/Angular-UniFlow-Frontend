import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    constructor() { }
    
    public isAuthenticated(): boolean {
        const token = localStorage.getItem('accessToken');
        return !!token;
    }
    
    public hasRole(role: string): boolean {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            return false;
        }
        
        try {
            const decodedToken: any = jwtDecode(token);
            const roles = decodedToken.roles || [];
            return roles.includes(role);
        } catch (error) {
            return false;
        }
    }
}


import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(true);
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    
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
    
    login(): void {
        console.log('Usuário logado!');
        this.isAuthenticatedSubject.next(true);
    }
    
    logout(): void {
        console.log('Usuário deslogado!');
        this.isAuthenticatedSubject.next(false); 
    }
}


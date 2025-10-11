import { Injectable, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'ROLE_ADMIN' | 'ROLE_PROFESSOR' | 'ROLE_ESTUDANTE';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(true);
    public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    
    public primaryUserRole = signal<UserRole | null>(null);
    
    public simularRole(role: UserRole | null): void {
        this.primaryUserRole.set(role);
        this.isAuthenticatedSubject.next(!!role);
        console.log(`Simulação direta: Perfil forçado para ${role}`);
    }
    
    constructor() {
        this._updatePrimaryRoleSignal();
    }
    
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
    
    private _updatePrimaryRoleSignal(): void {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            this.primaryUserRole.set(null);
            return;
        }
        
        try {
            const decodedToken: { roles?: string[] } = jwtDecode(token);
            const roles = decodedToken.roles || [];
            const priorityOrder: UserRole[] = ['ROLE_ADMIN', 'ROLE_PROFESSOR', 'ROLE_ESTUDANTE'];
            
            for (const role of priorityOrder) {
                if (roles.includes(role)) {
                    this.primaryUserRole.set(role);
                    return;
                }
            }
            this.primaryUserRole.set(null);
        } catch (error) {
            this.primaryUserRole.set(null);
        }
    }
    
    login(): void {
        console.log('Usuário logado!');
        this.isAuthenticatedSubject.next(true);
        this._updatePrimaryRoleSignal();
    }
    
    logout(): void {
        console.log('Usuário deslogado!');
        this.isAuthenticatedSubject.next(false);
        this.primaryUserRole.set(null);
    }
}
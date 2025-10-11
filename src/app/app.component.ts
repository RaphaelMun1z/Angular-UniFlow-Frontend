import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NavbarComponent } from "./shared/components/navbars/navbar/navbar.component";
import { NavbarAuthComponent } from "./shared/components/navbars/navbar-auth/navbar-auth.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, FooterComponent, NavbarComponent, NavbarAuthComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'UniFlow | Gestão Acadêmica';
    
    constructor(private titleService: Title, public authService: AuthService) {
        this.titleService.setTitle('UniFlow | Gestão Acadêmica');
        
        this.authService.simularRole('ROLE_PROFESSOR');
    }
}

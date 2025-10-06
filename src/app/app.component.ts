import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './core/services/auth.service';

import { NavbarAltNoAuthComponent } from "./shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component";
import { NavbarAltWithAuthComponent } from "./shared/components/navbar-versions-components/navbar-alt-with-auth/navbar-alt-with-auth.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, NavbarAltNoAuthComponent, NavbarAltWithAuthComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'UniFlow | Gestão Acadêmica';
    
    constructor(private titleService: Title, public authService: AuthService) {
        this.titleService.setTitle('UniFlow | Gestão Acadêmica');
    }
}

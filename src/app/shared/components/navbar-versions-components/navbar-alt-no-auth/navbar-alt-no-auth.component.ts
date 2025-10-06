import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar-alt-no-auth',
    imports: [RouterModule, CommonModule],
    templateUrl: './navbar-alt-no-auth.component.html',
    styleUrl: './navbar-alt-no-auth.component.scss'
})

export class NavbarAltNoAuthComponent {
    public isMobileMenuOpen = false;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar-alt-one',
    imports: [RouterModule, CommonModule],
    templateUrl: './navbar-alt-one.component.html',
    styleUrl: './navbar-alt-one.component.scss'
})

export class NavbarAltOneComponent {
    @Input() bgStyle: number = 0;
    @Input() tagMsg!: string;
}

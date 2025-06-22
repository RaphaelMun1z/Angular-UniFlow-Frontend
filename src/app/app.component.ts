import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
    title = 'UniFlow | Gestão Acadêmica';
    
    constructor(private titleService: Title) {
        this.titleService.setTitle('UniFlow | Gestão Acadêmica');
    }
}

import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../components/section-header/section-header.component';
import { CalltoActionCareersComponent } from "./components/callto-action-careers/callto-action-careers.component";
import { OurNumbersComponent } from './components/our-numbers/our-numbers.component';
import { TeamPresentationComponent } from './components/team-presentation/team-presentation.component';
import { OurJourneyComponent } from './components/our-journey/our-journey.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about-us-page',
    imports: [CommonModule, SectionHeaderComponent, OurHistoryComponent, OurNumbersComponent, OurJourneyComponent, CalltoActionCareersComponent, TeamPresentationComponent],
    templateUrl: './about-us-page.component.html',
    styleUrl: './about-us-page.component.scss'
})

export class AboutUsPageComponent {
    
}

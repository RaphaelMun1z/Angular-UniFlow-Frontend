import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadActivities } from '../../../store/activities.actions';
import { IActivityItem } from '../../../store/activities.state';
import { HeroSectionComponent } from '../../../shared/components/home-components/hero-section/hero-section.component';
import { PartnersSectionComponent } from '../../../shared/components/home-components/partners-section/partners-section.component';
import { KeyFeaturesSectionComponent } from '../../../shared/components/home-components/key-features-section/key-features-section.component';
import { DemoSectionComponent } from '../../../shared/components/home-components/demo-section/demo-section.component';
import { PlansSectionComponent } from '../../../shared/components/home-components/plans-section/plans-section.component';
import { TestimonialsSectionComponent } from '../../../shared/components/home-components/testimonials-section/testimonials-section.component';
import { FaqSectionComponent } from '../../../shared/components/home-components/faq-section/faq-section.component';
import { FinalCTASectionComponent } from '../../../shared/components/home-components/final-ctasection/final-ctasection.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarAltNoAuthComponent } from '../../../shared/components/navbar-versions-components/navbar-alt-no-auth/navbar-alt-no-auth.component';

@Component({
    selector: 'app-home-page',
    imports: [NavbarAltNoAuthComponent, HeroSectionComponent, PartnersSectionComponent, KeyFeaturesSectionComponent, DemoSectionComponent, PlansSectionComponent, TestimonialsSectionComponent, FaqSectionComponent, FinalCTASectionComponent, FooterComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})

export class HomePageComponent implements OnInit{
    @Input() activities?: IActivityItem[];
    
    constructor(private store: Store) {}
    
    ngOnInit(): void {
        this.store.dispatch(loadActivities());
    }
}

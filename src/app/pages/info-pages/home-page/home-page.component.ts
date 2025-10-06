import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadActivities } from '../../../store/activities.actions';
import { IActivityItem } from '../../../store/activities.state';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PartnersSectionComponent } from './components/partners-section/partners-section.component';
import { KeyFeaturesSectionComponent } from './components/key-features-section/key-features-section.component';
import { DemoSectionComponent } from './components/demo-section/demo-section.component';
import { PlansSectionComponent } from './components/plans-section/plans-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FinalCTASectionComponent } from './components/final-ctasection/final-ctasection.component';

@Component({
    selector: 'app-home-page',
    imports: [HeroSectionComponent, PartnersSectionComponent, KeyFeaturesSectionComponent, DemoSectionComponent, PlansSectionComponent, TestimonialsSectionComponent, FaqSectionComponent, FinalCTASectionComponent],
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

import { Component, Input, OnInit } from '@angular/core';
import { loadActivities } from '../../store/activities.actions';
import { Store } from '@ngrx/store';
import { IActivityItem } from '../../store/activities.state';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { HeroSectionComponent } from "../../shared/components/home/hero-section/hero-section.component";
import { PartnersSectionComponent } from "../../shared/components/home/partners-section/partners-section.component";
import { KeyFeaturesSectionComponent } from "../../shared/components/home/key-features-section/key-features-section.component";
import { DemoSectionComponent } from "../../shared/components/home/demo-section/demo-section.component";
import { PlansSectionComponent } from "../../shared/components/home/plans-section/plans-section.component";
import { TestimonialsSectionComponent } from "../../shared/components/home/testimonials-section/testimonials-section.component";
import { FaqSectionComponent } from "../../shared/components/home/faq-section/faq-section.component";
import { FinalCTASectionComponent } from "../../shared/components/home/final-ctasection/final-ctasection.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
    selector: 'app-home-page',
    imports: [NavbarComponent, HeroSectionComponent, PartnersSectionComponent, KeyFeaturesSectionComponent, DemoSectionComponent, PlansSectionComponent, TestimonialsSectionComponent, FaqSectionComponent, FinalCTASectionComponent, FooterComponent],
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

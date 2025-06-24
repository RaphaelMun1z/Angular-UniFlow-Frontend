import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFeaturesSectionComponent } from './key-features-section.component';

describe('KeyFeaturesSectionComponent', () => {
  let component: KeyFeaturesSectionComponent;
  let fixture: ComponentFixture<KeyFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyFeaturesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

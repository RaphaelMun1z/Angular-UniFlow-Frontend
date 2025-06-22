import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectionStepComponent } from './plan-selection-step.component';

describe('PlanSelectionStepComponent', () => {
  let component: PlanSelectionStepComponent;
  let fixture: ComponentFixture<PlanSelectionStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSelectionStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSelectionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

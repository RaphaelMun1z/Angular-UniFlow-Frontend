import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanManagementPageComponent } from './plan-management-page.component';

describe('PlanManagementPageComponent', () => {
  let component: PlanManagementPageComponent;
  let fixture: ComponentFixture<PlanManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanManagementPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

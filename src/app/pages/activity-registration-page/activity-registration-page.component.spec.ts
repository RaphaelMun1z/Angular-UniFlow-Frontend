import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRegistrationPageComponent } from './activity-registration-page.component';

describe('ActivityRegistrationPageComponent', () => {
  let component: ActivityRegistrationPageComponent;
  let fixture: ComponentFixture<ActivityRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityRegistrationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

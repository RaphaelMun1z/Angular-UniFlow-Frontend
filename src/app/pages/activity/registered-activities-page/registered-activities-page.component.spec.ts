import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredActivitiesComponent } from './registered-activities-page.component';

describe('RegisteredActivitiesComponent', () => {
  let component: RegisteredActivitiesComponent;
  let fixture: ComponentFixture<RegisteredActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlanPageComponent } from './user-plan-page.component';

describe('UserPlanPageComponent', () => {
  let component: UserPlanPageComponent;
  let fixture: ComponentFixture<UserPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPlanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

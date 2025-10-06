import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorActivityPageComponent } from './professor-estudante-activity-page.component';

describe('ProfessorActivityPageComponent', () => {
  let component: ProfessorActivityPageComponent;
  let fixture: ComponentFixture<ProfessorActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessorActivityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

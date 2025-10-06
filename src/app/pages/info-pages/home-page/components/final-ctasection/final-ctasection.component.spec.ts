import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalCTASectionComponent } from './final-ctasection.component';

describe('FinalCTASectionComponent', () => {
  let component: FinalCTASectionComponent;
  let fixture: ComponentFixture<FinalCTASectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalCTASectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalCTASectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

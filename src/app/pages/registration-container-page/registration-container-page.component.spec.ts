import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationContainerPageComponent } from './registration-container-page.component';

describe('RegistrationContainerPageComponent', () => {
  let component: RegistrationContainerPageComponent;
  let fixture: ComponentFixture<RegistrationContainerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationContainerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPaymentPageComponent } from './confirmed-payment-page.component';

describe('ConfirmedPaymentPageComponent', () => {
  let component: ConfirmedPaymentPageComponent;
  let fixture: ComponentFixture<ConfirmedPaymentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmedPaymentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmedPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

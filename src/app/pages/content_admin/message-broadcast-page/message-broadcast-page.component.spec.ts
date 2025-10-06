import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBroadcastPageComponent } from './message-broadcast-page.component';

describe('MessageBroadcastPageComponent', () => {
  let component: MessageBroadcastPageComponent;
  let fixture: ComponentFixture<MessageBroadcastPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBroadcastPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBroadcastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

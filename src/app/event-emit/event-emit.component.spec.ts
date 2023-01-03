import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitComponent } from './event-emit.component';

describe('EventEmitComponent', () => {
  let component: EventEmitComponent;
  let fixture: ComponentFixture<EventEmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventEmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

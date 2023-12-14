import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlogsComponent } from './eventlogs.component';

describe('EventlogsComponent', () => {
  let component: EventlogsComponent;
  let fixture: ComponentFixture<EventlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventlogsComponent]
    });
    fixture = TestBed.createComponent(EventlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

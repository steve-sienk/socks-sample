import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatviewerComponent } from './chatviewer.component';

describe('ChatviewerComponent', () => {
  let component: ChatviewerComponent;
  let fixture: ComponentFixture<ChatviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

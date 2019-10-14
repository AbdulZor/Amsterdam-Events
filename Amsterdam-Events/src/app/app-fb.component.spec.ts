import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFbComponent } from './app-fb.component';

describe('AppFbComponent', () => {
  let component: AppFbComponent;
  let fixture: ComponentFixture<AppFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

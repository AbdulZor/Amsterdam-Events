import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview4Component } from './overview4.component';

describe('Overview4Component', () => {
  let component: Overview4Component;
  let fixture: ComponentFixture<Overview4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

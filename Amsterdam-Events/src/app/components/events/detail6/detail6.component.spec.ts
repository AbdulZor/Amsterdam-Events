import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail6Component } from './detail6.component';

describe('Detail6Component', () => {
  let component: Detail6Component;
  let fixture: ComponentFixture<Detail6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

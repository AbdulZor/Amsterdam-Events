import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail11Component } from './detail11.component';

describe('Detail11Component', () => {
  let component: Detail11Component;
  let fixture: ComponentFixture<Detail11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

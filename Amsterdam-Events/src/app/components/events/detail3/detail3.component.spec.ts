import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail3Component } from './detail3.component';

describe('Detail3Component', () => {
  let component: Detail3Component;
  let fixture: ComponentFixture<Detail3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail4Component } from './detail4.component';

describe('Detail4Component', () => {
  let component: Detail4Component;
  let fixture: ComponentFixture<Detail4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detail4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview6Component } from './overview6.component';

describe('Overview6Component', () => {
  let component: Overview6Component;
  let fixture: ComponentFixture<Overview6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

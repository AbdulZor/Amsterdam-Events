import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview11Component } from './overview11.component';

describe('Overview11Component', () => {
  let component: Overview11Component;
  let fixture: ComponentFixture<Overview11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Overview11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Overview11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

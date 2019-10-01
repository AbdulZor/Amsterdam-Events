import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Detail42Component} from './detail42.component';

describe('Detail42Component', () => {
  let component: Detail42Component;
  let fixture: ComponentFixture<Detail42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Detail42Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Detail42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

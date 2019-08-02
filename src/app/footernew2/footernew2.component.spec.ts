import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footernew2Component } from './footernew2.component';

describe('Footernew2Component', () => {
  let component: Footernew2Component;
  let fixture: ComponentFixture<Footernew2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footernew2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footernew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

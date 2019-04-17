import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acknowledgement2Component } from './acknowledgement2.component';

describe('Acknowledgement2Component', () => {
  let component: Acknowledgement2Component;
  let fixture: ComponentFixture<Acknowledgement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acknowledgement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acknowledgement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

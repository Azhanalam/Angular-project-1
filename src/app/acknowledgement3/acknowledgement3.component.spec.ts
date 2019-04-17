import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acknowledgement3Component } from './acknowledgement3.component';

describe('Acknowledgement3Component', () => {
  let component: Acknowledgement3Component;
  let fixture: ComponentFixture<Acknowledgement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acknowledgement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acknowledgement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

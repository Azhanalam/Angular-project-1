import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgenewComponent } from './acknowledgenew.component';

describe('AcknowledgenewComponent', () => {
  let component: AcknowledgenewComponent;
  let fixture: ComponentFixture<AcknowledgenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

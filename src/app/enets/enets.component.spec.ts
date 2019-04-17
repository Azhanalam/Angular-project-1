import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnetsComponent } from './enets.component';

describe('EnetsComponent', () => {
  let component: EnetsComponent;
  let fixture: ComponentFixture<EnetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

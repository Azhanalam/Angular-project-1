import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationformnewComponent } from './applicationformnew.component';

describe('ApplicationformnewComponent', () => {
  let component: ApplicationformnewComponent;
  let fixture: ComponentFixture<ApplicationformnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationformnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationformnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

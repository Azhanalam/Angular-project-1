import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionfilledComponent } from './contributionfilled.component';

describe('ContributionfilledComponent', () => {
  let component: ContributionfilledComponent;
  let fixture: ComponentFixture<ContributionfilledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionfilledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionfilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

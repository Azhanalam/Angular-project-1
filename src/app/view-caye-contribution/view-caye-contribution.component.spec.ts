import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCayeContributionComponent } from './view-caye-contribution.component';

describe('ViewCayeContributionComponent', () => {
  let component: ViewCayeContributionComponent;
  let fixture: ComponentFixture<ViewCayeContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCayeContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCayeContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

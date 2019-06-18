import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CayeContributionComponent } from './caye-contribution.component';

describe('CayeContributionComponent', () => {
  let component: CayeContributionComponent;
  let fixture: ComponentFixture<CayeContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CayeContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CayeContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

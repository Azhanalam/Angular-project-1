import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalcontributionComponent } from './totalcontribution.component';

describe('TotalcontributionComponent', () => {
  let component: TotalcontributionComponent;
  let fixture: ComponentFixture<TotalcontributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalcontributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

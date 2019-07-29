import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarynewComponent } from './summarynew.component';

describe('SummarynewComponent', () => {
  let component: SummarynewComponent;
  let fixture: ComponentFixture<SummarynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarynewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

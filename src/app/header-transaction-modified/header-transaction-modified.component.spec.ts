import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTransactionModifiedComponent } from './header-transaction-modified.component';

describe('HeaderTransactionModifiedComponent', () => {
  let component: HeaderTransactionModifiedComponent;
  let fixture: ComponentFixture<HeaderTransactionModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTransactionModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTransactionModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

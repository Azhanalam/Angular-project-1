import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionhistorynewComponent } from './transactionhistorynew.component';

describe('TransactionhistorynewComponent', () => {
  let component: TransactionhistorynewComponent;
  let fixture: ComponentFixture<TransactionhistorynewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionhistorynewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionhistorynewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

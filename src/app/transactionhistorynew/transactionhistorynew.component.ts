import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactionhistorynew',
  templateUrl: './transactionhistorynew.component.html',
  styleUrls: ['./transactionhistorynew.component.css']
})
export class TransactionhistorynewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show = false;
  buttonName = '+ Show Filters';
  hide: any;

  toggle() {
  this.show = !this.show

  if(this.show) {
  this.buttonName = '- Hide Filters'
  console.log(this.show)
  }
  else {
  this.buttonName = '+ Show Filters'
  }
  }
}

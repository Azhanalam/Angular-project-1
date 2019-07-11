import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  buttonlabel:string;
  showfilter:boolean=false;
  constructor() { }

  ngOnInit() {
    if(this.showfilter==false){
this.buttonlabel="+ Show Filters";
    }
    else{
      this.buttonlabel="-  Hide Filters"; 
    }
  }

  toggle(){
if(this.showfilter==true){
  this.showfilter=false;
  this.buttonlabel="+ Show Filters";
}

else{
  this.showfilter=true;
  this.buttonlabel="-  Hide Filters";
}
  }

}

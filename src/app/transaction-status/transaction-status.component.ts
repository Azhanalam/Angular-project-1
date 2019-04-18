import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.css']
})
export class TransactionStatusComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
this.router.navigate(["userpage"]);
window.scrollTo(0, 0);
  }
}

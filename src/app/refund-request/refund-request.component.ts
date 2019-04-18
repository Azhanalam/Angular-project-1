import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-refund-request',
  templateUrl: './refund-request.component.html',
  styleUrls: ['./refund-request.component.css']
})
export class RefundRequestComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
back(){
this.router.navigate(["transaction"]);
window.scrollTo(0, 0);
}
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-refund-request2',
  templateUrl: './refund-request2.component.html',
  styleUrls: ['./refund-request2.component.css']
})
export class RefundRequest2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(["transaction"]);
    window.scrollTo(0, 0);
    }
}

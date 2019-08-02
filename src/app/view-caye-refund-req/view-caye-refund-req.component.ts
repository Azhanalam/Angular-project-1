import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-view-caye-refund-req',
  templateUrl: './view-caye-refund-req.component.html',
  styleUrls: ['./view-caye-refund-req.component.css']
})
export class ViewCayeRefundReqComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(["transactionhistorynew"]);
    window.scrollTo(0, 0);

  }
}

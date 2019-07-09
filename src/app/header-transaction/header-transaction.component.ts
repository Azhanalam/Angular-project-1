import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-transaction',
  templateUrl: './header-transaction.component.html',
  styleUrls: ['./header-transaction.component.css']
})
export class HeaderTransactionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout()
  {
    {
    this.router.navigate([""]);
    localStorage.setItem('username',"");
    // console.log("username: ",localStorage.getItem('username'));
    }
}
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-reglogin',
  templateUrl: './header-reglogin.component.html',
  styleUrls: ['./header-reglogin.component.css']
})
export class HeaderRegloginComponent implements OnInit {

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

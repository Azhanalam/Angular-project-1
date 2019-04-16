import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
logout()
  {
  this.router.navigate([""]);
  localStorage.setItem('username',"");
  // console.log("username: ",localStorage.getItem('username'));
  }
  
Nextpage()
{

  this.username=localStorage.getItem('username');
  console.log(this.username);
  if(this.username=="sruthy")
  this.router.navigate(["userpage"]);
  else
  this.router.navigate(["welcome"]);
}
}

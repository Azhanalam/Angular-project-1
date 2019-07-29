import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string="";
password:string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

login()
{
  localStorage.setItem('username', this.username);
  console.log("username: ",localStorage.getItem('username'));
  // if(this.username=="sruthy@gmail.com")
  // this.router.navigate(["userpage"]);
  // else
  if(this.username=="reguser")
  this.router.navigate(["AppSuccess"]);
  else
  this.router.navigate(["applycayenew"]);
}
}

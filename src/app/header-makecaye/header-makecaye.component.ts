import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-makecaye',
  templateUrl: './header-makecaye.component.html',
  styleUrls: ['./header-makecaye.component.css']
})
export class HeaderMakecayeComponent implements OnInit {

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

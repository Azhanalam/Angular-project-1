import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-application-form2',
  templateUrl: './application-form2.component.html',
  styleUrls: ['./application-form2.component.css']
})
export class ApplicationForm2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
Summary()
{
  this.router.navigate(["summary"]);
}
}

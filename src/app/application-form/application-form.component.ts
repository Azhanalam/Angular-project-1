import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
Next()
{
  this.router.navigate(["applicationform2"]);
  window.scrollTo(0, 0);
}
}

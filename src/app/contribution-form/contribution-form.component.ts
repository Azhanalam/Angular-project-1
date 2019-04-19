import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {
  formatsDateTest: string[] = [
    'dd/MM/yyyy'
    ];
    dateNow : String  = new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear();
    

  constructor(private router:Router) { }

  ngOnInit() {
  }
importfile(){
  console.log("hello!!! pls work");
  this.router.navigate(["filledform"]);
  window.scrollTo(0, 0);
}

back()
{
  this.router.navigate(["cayecontribution"]);
  window.scrollTo(0, 0);
}

next()
{
  this.router.navigate(["filledform"]);
  window.scrollTo(0, 0);
}
}

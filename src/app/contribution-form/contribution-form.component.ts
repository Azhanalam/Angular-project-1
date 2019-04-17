import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
importfile(){
  console.log("hello!!! pls work");
  this.router.navigate(["filledform"]);
}

back()
{
  this.router.navigate(["cayecontribution"]);
}

next()
{
  this.router.navigate(["filledform"]);
}
}

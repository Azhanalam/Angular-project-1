import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contributionfilled',
  templateUrl: './contributionfilled.component.html',
  styleUrls: ['./contributionfilled.component.css']
})
export class ContributionfilledComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  importfile(){
    console.log("hello!!! pls work");
    this.router.navigate(["filledform"]);
  }
  back()
  {
    this.router.navigate(["contributionform"]);
  }
  
  next()
  {
    this.router.navigate(["totalcontribution"]);
  }
}

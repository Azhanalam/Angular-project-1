import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contributionfilled',
  templateUrl: './contributionfilled.component.html',
  styleUrls: ['./contributionfilled.component.css']
})
export class ContributionfilledComponent implements OnInit {
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
    this.router.navigate(["contributionform"]);
    window.scrollTo(0, 0);
  }
  
  next()
  {
    this.router.navigate(["totalcontribution"]);
    window.scrollTo(0, 0);
  }
}

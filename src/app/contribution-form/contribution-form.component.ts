import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contribution-form',
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.css']
})
export class ContributionFormComponent implements OnInit {
  showthis:boolean=false;
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

draft()
{
  this.router.navigate(["draftsubmission"]);
  window.scrollTo(0, 0);
}

submit()
{
  document.getElementById('colorchange').style.backgroundColor="rgba(240, 180, 180, 0.61)";
  (<HTMLInputElement>document.getElementById('colorchange')).value="S1234567A";
  (<HTMLInputElement>document.getElementById('value1')).value="500.00";
  (<HTMLInputElement>document.getElementById('value2')).value="S9999567B";
  (<HTMLInputElement>document.getElementById('value3')).value="350.00";
  this.showthis=true;
  window.scrollTo(0, 0);
}
nextpage()
{
  this.router.navigate(["totalcontribution"]);
  window.scrollTo(0, 0);
}
}

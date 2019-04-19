import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
var date1 = new Date(new Date().setUTCDate(new Date().getDate()+3));

var day = date1.getDate()
var month = date1.getMonth()+1
var year = date1.getFullYear()

var fullDate = day + '/' +month+ '/'+year;

@Component({
  selector: 'app-totalcontribution',
  templateUrl: './totalcontribution.component.html',
  styleUrls: ['./totalcontribution.component.css']
})
export class TotalcontributionComponent implements OnInit {
  formatsDateTest: string[] = [
    'dd/MM/yyyy'
    ];
   
      dateNow1 : String  = new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear();
      
    dateNow : String  = fullDate;
    

  constructor(private router:Router) { }

  ngOnInit() {
  }

 back()
 {
this.router.navigate(["filledform"]);
window.scrollTo(0, 0);
 } 

 acknowledge2(){
this.router.navigate(["acknowledgement2"]);
window.scrollTo(0, 0);
 }

 enets(){
  this.router.navigate(["enetspayment"]);
  window.scrollTo(0, 0);
   }
}

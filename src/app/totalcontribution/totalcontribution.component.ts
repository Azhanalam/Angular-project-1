import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-totalcontribution',
  templateUrl: './totalcontribution.component.html',
  styleUrls: ['./totalcontribution.component.css']
})
export class TotalcontributionComponent implements OnInit {
  formatsDateTest: string[] = [
    'dd/MM/yyyy'
    ];

    date1:any  = new Date(new Date().setUTCDate(new Date().getDate()+3));
    
    //  datenew= this.date1.getDate()+" "+ this.date1.toLocaleString('en-us', { month: 'long' }) + " " + this.date1.getFullYear();
     day = this.date1.getDate();
     month = this.date1.getMonth()+1;
     year = this.date1.getFullYear();
   
     fullDate = this.day + '/' +this.month+ '/'+this.year;
      dateNow1 : String  = new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear();
      
    // dateNow : String  = this.fullDate;

    // datenew1: String = this.datenew;
    

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

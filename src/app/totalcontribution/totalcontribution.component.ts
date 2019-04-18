import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-totalcontribution',
  templateUrl: './totalcontribution.component.html',
  styleUrls: ['./totalcontribution.component.css']
})
export class TotalcontributionComponent implements OnInit {

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

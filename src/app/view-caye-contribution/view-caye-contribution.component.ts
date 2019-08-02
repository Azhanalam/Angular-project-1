import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-view-caye-contribution',
  templateUrl: './view-caye-contribution.component.html',
  styleUrls: ['./view-caye-contribution.component.css']
})
export class ViewCayeContributionComponent implements OnInit {
  public show:boolean = false;
  public show1:boolean = false;
  public No:any='';
  // public Yes:any='';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  minimize() {

    if(!this.show)
   {
    this.show =!this.show;
    this.No='No';
   }
 else
   {
    this.show =!this.show;
    this.No='No';
   }

  }

  minimize1() {

    if(!this.show1)
   {
    this.show1 =!this.show1;
    this.No='No';
   }
 else
   {
    this.show1 =!this.show1;
    this.No='No';
   }

  }

  back(){
    this.router.navigate(["transactionhistorynew"]);
    window.scrollTo(0, 0);

  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  
  input: {value: string}[];
  input1: {value: string}[];

  public show:boolean = true;
  public show1:boolean = false;
  public No:any='';
  public Yes:any='';

  constructor(private router:Router) {
    this.input = [];

    this.input1 = [{value: ''},{value: ''}];
   }

  ngOnInit() {
  }
  toggle1() {
    
    if(!this.show)  
   {
    this.show =!this.show;
    this.No='No';
   }
   if(this.show1)
   {
    this.show1 =!this.show1;
    this.Yes='Yes';
   }
   
  }
  toggle() {
    
    if(this.show)  {
    this.show =!this.show;
   this.Yes='Yes';
    }
    if(!this.show1)  {
      this.show1 =!this.show1;
     this.Yes='No';
      }
 
  }

  add() {
    this.input.push({value: ''});
  }
  remove()
  {
    this.input.pop();
  }
  add1() {
    this.input.push({value: ''});
  }
Next()
{
  this.router.navigate(["summary"]);
  window.scrollTo(0, 0);
}
Back()
{
  this.router.navigate(["applycaye"]);
  window.scrollTo(0, 0);
}
}

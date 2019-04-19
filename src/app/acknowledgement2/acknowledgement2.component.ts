import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acknowledgement2',
  templateUrl: './acknowledgement2.component.html',
  styleUrls: ['./acknowledgement2.component.css']
})
export class Acknowledgement2Component implements OnInit {
  formatsDateTest: string[] = [
    'dd/MM/yyyy'
    ];
   
      dateNow1 : String  = new Date().getDate() + " " + new Date().toLocaleString('en-us', { month: 'long' }) + " " + new Date().getFullYear();
      

  constructor() { }

  ngOnInit() {
  }

}

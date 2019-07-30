import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-header-transaction-modified',
  templateUrl: './header-transaction-modified.component.html',
  styleUrls: ['./header-transaction-modified.component.css']
})
export class HeaderTransactionModifiedComponent implements OnInit {

  screenflag:boolean=true;
  screenHeight:any;
  screenWidth:any;

  constructor() {
      this.getScreenSize();
  }

  ngOnInit() {
    console.log("width of device")
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.screen.width;
        console.log(this.screenHeight, this.screenWidth);
        console.log("screen width",window.innerWidth);
        if(this.screenWidth > 768)
        {
          this.screenflag=true;
          console.log("screenwidth:",this.screenWidth);
          console.log("flag value",this.screenflag);
        }

        else
        {
          this.screenflag=false;
          console.log("screenwidth:",this.screenWidth);
          console.log("flag value",this.screenflag);
        }

  }

}

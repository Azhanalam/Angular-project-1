import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css']
})
export class DeductionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  AppSuccess()
  {
    this.router.navigate(["AppSuccess"]);
    window.scrollTo(0, 0);
  }

  back()
  {
    this.router.navigate(["cayecontribution"]);
    window.scrollTo(0, 0);
  }
}

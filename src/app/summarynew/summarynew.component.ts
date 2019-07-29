import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summarynew',
  templateUrl: './summarynew.component.html',
  styleUrls: ['./summarynew.component.css']
})
export class SummarynewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Next(){
    this.router.navigate(["acknowledgenew"]);
  }

  Back()
  {
    this.router.navigate(["applicationformnew"]);
  }
}

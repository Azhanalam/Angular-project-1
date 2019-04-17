import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


Summary2()
{
  this.router.navigate(["acknowledgement"]);
  window.scrollTo(0, 0);
}
goBack()
{
  this.router.navigate(["applicationform"]);
  window.scrollTo(0, 0);
}
}

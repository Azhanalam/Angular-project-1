import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.css']
})
export class Summary2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
acknowledge()
{
  this.router.navigate(["acknowledgement"]);
  window.scrollTo(0, 0);
}
goBack()
{
  this.router.navigate(["summary"]);
  window.scrollTo(0, 0);
}
}

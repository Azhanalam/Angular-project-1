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
}
}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-applycayenew',
  templateUrl: './applycayenew.component.html',
  styleUrls: ['./applycayenew.component.css']
})
export class ApplycayenewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Next()
  {
    this.router.navigate(["applicationformnew"]);
  }
}

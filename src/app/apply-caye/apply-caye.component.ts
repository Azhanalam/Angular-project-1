import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-apply-caye',
  templateUrl: './apply-caye.component.html',
  styleUrls: ['./apply-caye.component.css']
})
export class ApplyCayeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
start()
{
this.router.navigate(["applicationform"]);
}
}

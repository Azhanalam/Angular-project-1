import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enets',
  templateUrl: './enets.component.html',
  styleUrls: ['./enets.component.css']
})
export class EnetsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
next()
{
  this.router.navigate(["acknowledgement3"]);
}
}

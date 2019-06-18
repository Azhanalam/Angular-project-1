import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-draftsubmission',
  templateUrl: './draftsubmission.component.html',
  styleUrls: ['./draftsubmission.component.css']
})
export class DraftsubmissionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  AppSuccess()
  {
    this.router.navigate(["AppSuccess"]);
    window.scrollTo(0, 0);
  }
}

import { Component, OnInit } from '@angular/core';
import { WarningAlertComponent } from '../warning-alert/warning-alert.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  // styleUrls: ['./nav-bar.component.css']
  styles: [
    `
      div {
        border: 1px solid orange;
        margin: 10px;
        padding: 5px;
      }
      p {
        color: purple;
      }
    `
  ]
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  username = null;
  password = null;
  package = null;
  server = null;
  port = null;
  file = null;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){}

}

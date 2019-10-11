import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _title: string;

  constructor() { }

  ngOnInit() {
    this._title = 'Hybrid Application';
  }

  get title() {
    return this._title;
  }
}

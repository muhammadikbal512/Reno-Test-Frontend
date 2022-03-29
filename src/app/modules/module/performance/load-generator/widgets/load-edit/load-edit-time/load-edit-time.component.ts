import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-edit-time',
  templateUrl: './load-edit-time.component.html',
  styleUrls: ['./load-edit-time.component.css']
})
export class LoadEditTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-create-table-time',
  templateUrl: './load-create-table-time.component.html',
  styleUrls: ['./load-create-table-time.component.css']
})
export class LoadCreateTableTimeComponent implements OnInit {

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

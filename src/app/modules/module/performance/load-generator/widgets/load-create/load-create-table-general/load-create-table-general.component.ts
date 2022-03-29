import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-create-table-general',
  templateUrl: './load-create-table-general.component.html',
  styleUrls: ['./load-create-table-general.component.css']
})
export class LoadCreateTableGeneralComponent implements OnInit {

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

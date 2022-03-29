import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-edit-general',
  templateUrl: './load-edit-general.component.html',
  styleUrls: ['./load-edit-general.component.css']
})
export class LoadEditGeneralComponent implements OnInit {

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

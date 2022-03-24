import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  showSidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

  getOnClick() {
    this.showSidebar = !this.showSidebar
  }

}

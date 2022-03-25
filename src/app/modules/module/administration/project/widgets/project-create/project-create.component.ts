import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schema-edit-table-general',
  templateUrl: './schema-edit-table-general.component.html',
  styleUrls: ['./schema-edit-table-general.component.css']
})
export class SchemaEditTableGeneralComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }
}

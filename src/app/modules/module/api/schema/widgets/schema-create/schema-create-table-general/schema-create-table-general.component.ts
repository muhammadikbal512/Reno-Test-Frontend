import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schema-create-table-general',
  templateUrl: './schema-create-table-general.component.html',
  styleUrls: ['./schema-create-table-general.component.css']
})
export class SchemaCreateTableGeneralComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

}

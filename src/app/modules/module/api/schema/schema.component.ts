import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SchemaCreateComponent } from './widgets/schema-create/schema-create.component';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(SchemaCreateComponent,{
      width: '600px'
    })
  }

}

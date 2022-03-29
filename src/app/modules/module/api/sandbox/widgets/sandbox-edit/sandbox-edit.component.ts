import { Component, OnInit } from '@angular/core';
import { BtnBackService } from 'src/app/modules/services/btn-back.service';

@Component({
  selector: 'app-sandbox-edit',
  templateUrl: './sandbox-edit.component.html',
  styleUrls: ['./sandbox-edit.component.css']
})
export class SandboxEditComponent implements OnInit {

  constructor(private _back: BtnBackService) { }

  ngOnInit(): void {
  }

  backClicked() {
    this._back.backClicked();
  }

}
